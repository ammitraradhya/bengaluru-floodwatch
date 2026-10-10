# Frontend prototype outcomes

- [x] A community-tool disclaimer prominently states that Bengaluru FloodWatch is not an official government service and that prototype information is sample-only.
- [x] Simulated Bengaluru map view displays clearly labeled sample flood-report markers without connecting to a live map service. Flood report browsing lets users select sample markers and inspect report details such as location, severity, time, description, and photo evidence.
- [x] Route-check prototype accepts two place names and simulates a route with sample flood warnings or an illustrative clear-route result. No recent reports must not be presented as proof that a route is safe.
- [x] Start-report flow captures a location, severity, description, and locally previewed photo evidence, then ends with a clear simulation notice instead of submitting data.
- [x] Bilingual English and Kannada safety copy presents concise flood precautions and emergency guidance.
- [x] One-tap emergency and helpline actions use visible phone links with confirmation messaging and clear emergency context.
- [x] Responsive, accessible frontend interactions include keyboard-friendly controls, readable status labels, and simulated loading, success, empty, and validation states.
- [x] The delivered application remains frontend-only: no backend, authentication, external API, live map, database, real location capture, remote report submission, or network persistence.

## Interactive map upgrade

- [x] Drag to pan and scroll / double-click to zoom the schematic map (80%–260%), with clamped panning so the map never drifts fully out of view; pins and the route line move together with the base map.
- [x] Zoom +/− buttons and a reset (crosshair) button still work; the view resets to centre.

## Mandatory photo + location

- [x] A report cannot be previewed without a location AND a photo. Location and photo show a "required" badge; the description note is "optional".
- [x] Missing location or photo shows a bilingual inline message; the photo tile shakes when a photo is required but absent. "Use demo photo" satisfies the photo requirement.

## AI assistant (on-device)

- [x] A floating chat button sits at the bottom-right; opening it greets the user and offers quick-reply suggestions.
- [x] The assistant answers, in English and Kannada, about: what the site is, how to report, how to check a route, the reports currently on the map (read live from the page), a specific area, severities, safety, helplines, languages, data freshness and privacy.
- [x] It never claims a route is "safe", keeps the community-tool disclaimer, and stays fully on-device (no network). `respond()` is the single seam to swap in a real backend/AI later.
