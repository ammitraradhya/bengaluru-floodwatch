#!/usr/bin/env python3
"""
FloodWatch · Bengaluru — local static file server.

Serves this directory (the app root) over HTTP so the frontend loads correctly.
The frontend uses absolute asset paths (/app.js, /styles.css, /floodwatch.svg),
so it MUST be served over HTTP from the app root — opening index.html via
file:// will fail to load those assets.

Why a custom server instead of `python -m http.server`?
  * Correct MIME types (notably text/javascript for .js on older setups).
  * No-cache headers so edits show up on refresh during development.
  * Threaded, so a hung request never blocks others.
  * Automatic free-port selection and a clean, informative startup banner.
  * Binds to localhost only by default (not exposed to the network).

Usage:
    python serve.py                 # auto-pick a free port, print the URL
    python serve.py --port 8080     # use a specific port
    python serve.py --host 0.0.0.0  # listen on all interfaces (LAN access)
    python serve.py --open          # also open the default browser
    set FLOODWATCH_PORT=8080; python serve.py   # port via environment variable

Stop the server with Ctrl+C.
"""

from __future__ import annotations

import argparse
import os
import sys
import webbrowser
from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

# Directory this script lives in is treated as the web root. This keeps the
# server correct no matter which working directory it is launched from.
APP_ROOT = os.path.dirname(os.path.abspath(__file__))


class FloodWatchRequestHandler(SimpleHTTPRequestHandler):
    """Static handler with sensible MIME types and no-cache dev headers."""

    # Ensure modern, correct content types regardless of the OS mimetypes DB.
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".html": "text/html; charset=utf-8",
        ".css": "text/css; charset=utf-8",
        ".js": "text/javascript; charset=utf-8",
        ".mjs": "text/javascript; charset=utf-8",
        ".json": "application/json; charset=utf-8",
        ".svg": "image/svg+xml",
        ".ico": "image/x-icon",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".webp": "image/webp",
        ".woff": "font/woff",
        ".woff2": "font/woff2",
        ".map": "application/json; charset=utf-8",
    }

    def end_headers(self) -> None:  # noqa: D102 - add dev-friendly headers
        # Disable caching so a refresh always reflects the latest files.
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def log_message(self, format: str, *args) -> None:  # noqa: A002 - signature from base
        # Concise, single-line request logging to stderr.
        sys.stderr.write("[floodwatch] %s - %s\n" % (self.address_string(), format % args))


def build_server(host: str, port: int) -> ThreadingHTTPServer:
    """Create a threaded HTTP server rooted at APP_ROOT.

    Passing port=0 lets the OS assign a free port; read it back from
    server.server_address after construction.
    """
    handler = partial(FloodWatchRequestHandler, directory=APP_ROOT)
    return ThreadingHTTPServer((host, port), handler)


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="FloodWatch Bengaluru local static server")
    parser.add_argument(
        "--host",
        default=os.environ.get("FLOODWATCH_HOST", "127.0.0.1"),
        help="Interface to bind (default 127.0.0.1; use 0.0.0.0 for LAN access)",
    )
    parser.add_argument(
        "--port",
        type=int,
        default=int(os.environ.get("FLOODWATCH_PORT", "0")),
        help="Port to bind (default: auto-select a free port; 0 = auto)",
    )
    parser.add_argument(
        "--open",
        action="store_true",
        help="Open the app in the default web browser after starting",
    )
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv)

    try:
        server = build_server(args.host, args.port)
    except OSError as exc:
        sys.stderr.write(
            "[floodwatch] Could not bind to %s:%s (%s).\n"
            "             Try a different --port, or set FLOODWATCH_PORT.\n"
            % (args.host, args.port, exc)
        )
        return 1

    host, port = server.server_address[0], server.server_address[1]
    display_host = "localhost" if host in ("127.0.0.1", "0.0.0.0", "::1") else host
    url = "http://%s:%d/" % (display_host, port)

    print("=" * 60)
    print("  FloodWatch · Bengaluru  (community preview — sample data)")
    print("=" * 60)
    print("  Serving :", APP_ROOT)
    print("  Local   :", url)
    if host == "0.0.0.0":
        print("  Note    : listening on all interfaces (LAN accessible)")
    else:
        print("  Note    : localhost only — not exposed to the network")
    print("  Stop    : press Ctrl+C")
    print("=" * 60)
    sys.stdout.flush()

    if args.open:
        try:
            webbrowser.open(url)
        except Exception:  # pragma: no cover - best effort only
            pass

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n[floodwatch] Shutting down…")
    finally:
        server.server_close()
        print("[floodwatch] Stopped.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
