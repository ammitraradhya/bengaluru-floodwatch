# FloodWatch · Bengaluru — Local Preview

A **community flood-reporting prototype** for Bengaluru. This is a **community
tool, not an official government service**, and everything shown here is
**illustrative sample data** — no live reports, no backend, no location capture.

The frontend is a self-contained static site. This repo runs it locally over
HTTP so the browser loads all assets correctly.

---

## Quick start (Windows)

Option A — double-click / run the launcher:

```powershell
.\start.ps1
```

Option B — run the server directly:

```powershell
py serve.py --open
```

## Quick start (macOS / Linux)

```bash
chmod +x start.sh
./start.sh
# or
python3 serve.py --open
```

The server prints a URL like `http://localhost:54321/` and (unless disabled)
opens it in your default browser. **Press `Ctrl+C` to stop.**

> The frontend uses absolute asset paths (`/app.js`, `/styles.css`,
> `/floodwatch.svg`), so it must be served over HTTP. Opening `index.html`
> directly via `file://` will not load the assets.

---

## Requirements

- **Python 3.8+** only. No Node, npm, build step, or internet connection needed.
- Any modern browser (Chrome, Edge, Firefox, Safari).

Check your Python:

```powershell
py --version        # Windows launcher
python3 --version   # macOS/Linux
```

---

## Server options

```powershell
py serve.py --port 8080      # use a specific port
py serve.py --open           # auto-open the browser
py serve.py --host 0.0.0.0   # allow other devices on your LAN to connect
```

Environment variables also work: `FLOODWATCH_PORT`, `FLOODWATCH_HOST`.

To allow phones on the same Wi-Fi to view the demo, run
`py serve.py --host 0.0.0.0` and open `http://<your-computer-LAN-IP>:<port>/`.

---

## What's in here

| File | Purpose |
|------|---------|
| `index.html` | App shell and the inline schematic Bengaluru map (SVG) |
| `app.js` | Frontend logic: sample reports, **interactive map** (pan + zoom), route check, report flow with **required photo + location**, EN/KN i18n |
| `chatbot.js` | On-device **AI assistant** (bottom-right): answers questions about the site, how to use it, and the reports currently on the map — in EN & KN |
| `styles.css` | Styling (responsive, mobile-first) incl. chatbot + map + required-field styles |
| `floodwatch.svg` | Favicon / brand mark |
| `manus-routes.json` | Placeholder route metadata |
| `serve.py` | Dependency-free local static server (Python stdlib) |
| `start.ps1` / `start.sh` | One-command launchers (Windows / macOS·Linux) |
| `TODO.md` | Notes on what the prototype does and does not do |

### Features
- **Interactive map** — drag to pan, scroll or double-click to zoom (80%–260%), clamped so it never drifts out of view. Zoom buttons and a reset (crosshair) still work. Pins and the route line move with the map.
- **Mandatory photo + location** — a report can't be previewed without a location **and** a photo (capture in-app, or "Use demo photo"). Required/optional badges appear on the fields; missing input shows a bilingual message and the photo tile shakes.
- **AI assistant** — click the chat bubble at the bottom-right. It reads the live page (current reports, language) and explains what the site is, how to report, how to check a route, what severities mean, safety, helplines, languages, data freshness and privacy. Quick-reply chips included. Fully offline/on-device; swap `respond()` for a real API later.

---

## What this prototype does (and does not) do

**Does:** browse clearly-labelled **sample** reports on a schematic map, run a
simulated **route check** between two places, walk through a **report** flow with
a local photo preview, toggle **English/ಕನ್ನಡ**, and offer one-tap **call**
buttons (112 emergency, 1533 civic).

**Does not:** connect to any backend, capture real location, upload photos,
authenticate, or persist anything. It stays entirely on your device.

See `TODO.md` for the full list.

---

## Where this goes next

This is **Phase 1 groundwork** for the full product described in the master
brief. The natural next steps, in order:

1. **Real backend** (e.g. Supabase/Postgres+PostGIS or AWS ap-south-1) with a
   reports API, phone-OTP auth, and storage.
2. **Real map + routing** (MapLibre/OSM + self-hosted Valhalla or OSRM).
3. Replace the hardcoded `reports` array in `app.js` with API calls, keeping the
   exact same shape so the UI does not change.

The current static server is a fine local dev host while those are built.
