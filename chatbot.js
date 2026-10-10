/*
 * FloodWatch · Bengaluru — on-device assistant (chatbot.js)
 * ---------------------------------------------------------
 * A small, dependency-free assistant that answers questions about THIS site:
 * what it is, how to report or check a route, what reports are on the map right
 * now, what the severities mean, safety guidance, helplines, languages, privacy.
 *
 * It is intentionally "on-device": it reads the live page content (the `reports`
 * array, the current language, etc.) that app.js exposes in the shared global
 * scope, so its answers always match what the user is looking at. No network,
 * no external AI API — which keeps the demo private, fast and offline-capable.
 *
 * If a real backend/AI is added later, replace `respond()` with an API call and
 * keep the same rendering; everything else stays the same.
 */

(function () {
  'use strict';

  const $chat = (sel) => document.querySelector(sel);

  const fab = $chat('#chatbotFab');
  const panel = $chat('#chatbot');
  const closeBtn = $chat('#chatbotClose');
  const body = $chat('#chatbotBody');
  const form = $chat('#chatbotForm');
  const input = $chat('#chatbotInput');
  const sendBtn = $chat('#chatbotSend');
  const subtitle = $chat('#chatbotSubtitle');
  const suggestionsBox = $chat('#chatbotSuggestions');

  let greeted = false;
  let busy = false;

  // --- Small utilities ------------------------------------------------------
  const lang = () => (typeof state !== 'undefined' && state.language) || 'en';
  const esc = (v) => (typeof escapeHtml === 'function' ? escapeHtml(v) : String(v));
  const sevLabel = (sev) => (typeof severityLabel === 'function' ? severityLabel(sev) : sev);
  const reportAge = (r) => (lang() === 'kn' ? r.ageKn : r.age);
  const reportDesc = (r) => (lang() === 'kn' ? r.descriptionKn : r.description);

  function normalize(text) {
    return String(text || '')
      .toLowerCase()
      .replace(/[।?!.,;:'"()\[\]{}\-\/|]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Match a keyword against tokenized text.
  //  - multi-word phrases: must appear as a whole phrase (space-padded)
  //  - very short words (<=3 chars like "hi", "to", "in"): exact token match,
  //    so "hi" never matches inside "this"
  //  - longer words: token *starts with* the keyword, so "flood" matches
  //    "floods"/"flooding" but "hi" still won't match "history"
  function keywordMatches(keyword, tokens, padded) {
    const k = String(keyword).trim();
    if (!k) return false;
    if (k.includes(' ')) return padded.includes(' ' + k + ' ');
    if (k.length <= 3) return tokens.includes(k);
    return tokens.some((tk) => tk.startsWith(k));
  }

  function hasAny(text, words) {
    const padded = ' ' + text + ' ';
    const tokens = text.split(' ').filter(Boolean);
    return words.some((w) => keywordMatches(w, tokens, padded));
  }

  function score(text, groups) {
    // groups: array of keyword-arrays; matching more groups = higher score.
    let s = 0;
    for (const words of groups) if (hasAny(text, words)) s += 1;
    return s;
  }

  // Live data snapshot helpers ---------------------------------------------
  function activeReports() {
    if (typeof reports === 'undefined') return [];
    return reports.filter((r) => r.severity !== 'cleared');
  }

  function allReports() {
    return typeof reports !== 'undefined' ? reports.slice() : [];
  }

  function findReportForArea(text) {
    const t = normalize(text);
    const aliases = {
      bellandur: ['bellandur', 'ecospace', 'outer ring', 'orr', 'sarjapur', 'sarjapura'],
      koramangala: ['koramangala', '80 feet', '4th block'],
      hsr: ['hsr', 'agara', '27th main'],
      jayanagar: ['jayanagar', '9th block', '39th cross'],
    };
    let best = null;
    let bestLen = 0;
    for (const r of allReports()) {
      const keys = [r.location.toLowerCase(), ...(aliases[r.id] || [])];
      for (const k of keys) {
        if (k && t.includes(k) && k.length > bestLen) {
          best = r;
          bestLen = k.length;
        }
      }
    }
    return best;
  }

  // --- Answer builders (each returns an HTML string) -----------------------
  function answerGreeting() {
    return lang() === 'kn'
      ? 'ನಮಸ್ಕಾರ! ನಾನು ಫ್ಲಡ್‌ವಾಚ್ ಸಹಾಯಕ. ನಕ್ಷೆಯಲ್ಲಿರುವ ಪ್ರಸ್ತುತ ಪ್ರವಾಹ ವರದಿಗಳು, ವರದಿ ಹೇಗೆ ಮಾಡುವುದು, ಮಾರ್ಗ ಪರಿಶೀಲನೆ, ಸುರಕ್ಷತೆ ಮತ್ತು ಸಹಾಯವಾಣಿಗಳ ಬಗ್ಗೆ ನಿಮಗೆ ಸಹಾಯ ಮಾಡಬಲ್ಲೆ. ಏನು ತಿಳಿಯಬೇಕು?'
      : "Hi! I'm the FloodWatch assistant. I can help with the flood reports on the map, how to report, route checks, safety and helplines. What would you like to know?";
  }

  function answerWhatIs() {
    const kn = lang() === 'kn';
    const parts = kn
      ? [
          '<strong>ಫ್ಲಡ್‌ವಾಚ್</strong> ಬೆಂಗಳೂರಿಗಾಗಿ ಒಂದು <strong>ಸಮುದಾಯ ಪ್ರವಾಹ-ವರದಿ ಸಾಧನ</strong>.',
          'ಭಾರೀ ಮಳೆಯ ನಂತರ ರಸ್ತೆಗಳು, ಅಂಡರ್‌ಪಾಸ್‌ಗಳು ಮತ್ತು ವ್ಯಾಪ್ತಿಗಳಲ್ಲಿ ಎಲ್ಲಿ ನೀರು ನಿಂತಿದೆ ಎಂದು ನಿವಾಸಿಗರು ಭೂ-ಗುರುತುಳಿಕೆ ಫೋಟೋ ಪ್ರಮಾಣದೊಂದಿಗೆ ವರದಿ ಮಾಡುತ್ತಾರೆ, ಮತ್ತು ಇತರರು ಅದನ್ನು ನಕ್ಷೆಯಲ್ಲಿ ನೋಡುತ್ತಾರೆ.',
          'ಇದು ಅಧಿಕೃತ ಸ ensors ಮತ್ತು ದೂರು ಚಾನೆಲುಗಳನ್ನು <em>ಪೂರಕ</em>ವಾಗಿ ಮಾಡುತ್ತದೆ — ಅವುಗಳನ್ನು ಬದಲಿಸುವುದಿಲ್ಲ.',
          '<em>ಗಮನಿಸಿ:</em> ಇದು ಸಮುದಾಯದ ಸಾಧನ, ಸರ್ಕಾರಿ ಸೇವೆಯಲ್ಲ. ಇಲ್ಲಿ ತೋರಿಸಿದ ಎಲ್ಲವೂ ಮಾದರಿ ಮಾಹಿತಿ.',
        ]
      : [
          '<strong>FloodWatch</strong> is a <strong>community flood-reporting tool</strong> for Bengaluru.',
          'After heavy rain, residents post geotagged photo reports of where roads, underpasses and neighbourhoods are flooded, and others see them on the map.',
          'It <em>complements</em> official sensors and complaint channels — it does not replace them.',
          '<em>Note:</em> this is a community tool, not an official government service, and everything shown here is illustrative sample data.',
        ];
    return '<p>' + parts.join('</p><p>') + '</p>';
  }

  function answerHowToReport() {
    const kn = lang() === 'kn';
    const steps = kn
      ? [
          'ಮೇಲಿನ <strong>“ಪ್ರವಾಹ ವರದಿ ಮಾಡಿ”</strong> ಬಟನ್ ಒತ್ತಿ.',
          'ಕ್ಯಾಮೆರಾ ಮತ್ತು ನಿಖರ ಸ್ಥಲ ಅನುಮತಿಗಳಿಗೆ ಅನುಮತಿಸಿ.',
          'ಆ್ಯಪ್ ಒಳಗೆ <strong>1–3 ಫೋಟೋ</strong> ತೆಗೆಯಿರಿ — ಗ್ಯಾಲರಿ ಅಪ್‌ಲೋಡ್ ಇಲ್ಲ.',
          '<strong>ಸ್ಥಳ ಮತ್ತು ಫೋಟೋ ಅಗತ್ಯ</strong>; ನೀರಿನ ಆಳ ಮತ್ತು ಟಿಪ್ಪಣಿ ಐಚ್ಛಿಕ.',
          'ಪೂರ್ವವೀಕ್ಷಿಸಿ ಮತ್ತು ಸಲ್ಲಿಸಿ.',
          '<em>ಈ ಡೆಮೊದಲ್ಲಿ ಏನನ್ನೂ ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ — ಎಲ್ಲವೂ ನಿಮ್ಮ ಸಾಧನದಲ್ಲೇ ಇರುತ್ತದೆ.</em>',
        ]
      : [
          'Tap the <strong>“Report flooding”</strong> button at the top (or the big button under the map).',
          'Allow camera and precise-location permission (each shows a one-line reason).',
          'Take <strong>1–3 photos inside the app</strong> — no gallery upload, so the evidence stays fresh.',
          '<strong>Location and photo are required</strong>; pick the depth and add an optional short note.',
          'Preview and submit. With no signal, the report queues and syncs later.',
          '<em>In this demo nothing is actually sent — it all stays on your device.</em>',
        ];
    return '<p>' + (kn ? 'ಹೀಗೆ ವರದಿ ಮಾಡಿ:' : 'Here’s how to report:') + '</p><ol class="chat-list"><li>' + steps.join('</li><li>') + '</li></ol>';
  }

  function answerHowToRoute() {
    const kn = lang() === 'kn';
    const lead = kn
      ? [
          '<strong>“ಮಾರ್ಗ ಪರಿಶೀಲನೆ”</strong> ಟ್ಯಾಬ್ ತೆರೆಯಿರಿ.',
          '<strong>ಇಂದ</strong> (ಡೀಫಾಲ್ಟ್: ನಿಮ್ಮ ಸ್ಥಳ) ಮತ್ತು <strong>ಗೆ</strong> ಸ್ಥಳ ನಮೂದಿಸಿ.',
          'ಪ್ರತಿ ಮಾರ್ಗಕ್ಕೂ <strong>ಮೂರು ಸ್ಥಿತಿಗಳಲ್ಲಿ ಒಂದು</strong> ತೋರಿಸಲಾಗುತ್ತದೆ:',
        ]
      : [
          'Open the <strong>“Route check”</strong> tab.',
          'Enter <strong>From</strong> (defaults to your location) and <strong>To</strong>, and choose car, two-wheeler or walking.',
          'Each route shows <strong>one of three states</strong>:',
        ];
    const states = kn
      ? [
          '<strong>ಮಾರ್ಗದಲ್ಲಿ ಪ್ರವಾಹ ವರದಿ ಇದೆ</strong> — ಹೊಂದಿಕೆ ಆಯ್ದ ವರದಿಗಳ ಸಂಖ್ಯೆ ಮತ್ತು ಹೊಸದರ ಅವಧಿ.',
          '<strong>ಯಾವುದೇ ವರದಿ ಇಲ್ಲ</strong> — ಇದು <em>“ಸುರಕ್ಷಿತ”</em> ಅಲ್ಲ.',
          '<strong>ಇತ್ತೀಚಿನ ಮಾಹಿತಿ ಇಲ್ಲ</strong> — ಆ ಪ್ರದೇಶಗಳಿಗೆ ಇತ್ತೀಚಿನ ವರದಿಗಳಿಲ್ಲ.',
        ]
      : [
          '<strong>Flood reported on the way</strong> — with the count of matching reports and the age of the newest.',
          '<strong>None reported</strong> — this is <em>never</em> “safe”; it shows how fresh and dense the data is.',
          '<strong>No recent data</strong> — there are no recent reports for those places.',
        ];
    const tip = kn
      ? 'ಸಲಹೆ ಯಾವಾಗಲೂ “ಕಡಿಮೆ ವರದಿಗಳು” ಎಂದು ಹೇಳುತ್ತದೆ, “ಸುರಕ್ಷಿತ” ಎಂದು ಎಂದಿಗೂ ಅಲ್ಲ.'
      : 'The suggestion always says “fewer reports”, never “safe”.';
    return '<p>' + lead.join('</p><p>') + '</p><ul class="chat-list"><li>' + states.join('</li><li>') + '</li></ul><p>' + tip + '</p>';
  }

  function answerCurrentReports() {
    const kn = lang() === 'kn';
    const active = activeReports();
    const cleared = allReports().filter((r) => r.severity === 'cleared');
    if (!active.length) {
      return kn
        ? 'ಈ ಸಮಯದಲ್ಲಿ ಸಕ್ರಿಯ ಪ್ರವಾಹ ವರದಿಗಳಿಲ್ಲ. ಆದರೆ “ವರದಿ ಇಲ್ಲ” ಎಂದರೆ “ಸುರಕ್ಷಿತ” ಎಂದರ್ಥವಲ್ಲ.'
        : 'There are no active flood reports right now. But “none reported” does not mean “safe”.';
    }
    const items = active
      .map((r) => `<strong>${esc(r.location)}</strong> · ${esc(r.spot)} — ${esc(sevLabel(r.severity))} · ${esc(reportAge(r))}`)
      .join('</li><li>');
    const intro = kn
      ? `ಪ್ರಸ್ತುತ ನಕ್ಷೆಯಲ್ಲಿ <strong>${active.length}</strong> ಸಕ್ರಿಯ ಪ್ರವಾಹ ವರದಿ(ಗಳು) ಇವೆ:`
      : `There ${active.length === 1 ? 'is' : 'are'} <strong>${active.length}</strong> active flood report${active.length === 1 ? '' : 's'} on the map:`;
    let extra = '';
    if (cleared.length) {
      extra = kn
        ? `<p>ಹೆಚ್ಚುವರಿಯಾಗಿ, <strong>${cleared.length}</strong> ಸ್ಥಳವನ್ನು “ನೀರು ತೆರವು” ಎಂದು ಗುರುತಿಸಲಾಗಿದೆ.</p>`
        : `<p>Additionally, <strong>${cleared.length}</strong> spot${cleared.length === 1 ? ' has' : 's have'} been marked “cleared”.</p>`;
    }
    return `<p>${intro}</p><ul class="chat-list"><li>${items}</li></ul>${extra}`;
  }

  function answerArea(report) {
    const kn = lang() === 'kn';
    const head = `${esc(report.location)} — ${esc(report.spot)}:`;
    const line = kn
      ? `${esc(sevLabel(report.severity))} · ${esc(reportAge(report))} · ${esc(report.confirmations)} ದೃಢೀಕರಣ(ಗಳು). ${esc(reportDesc(report))}`
      : `${esc(sevLabel(report.severity))} · ${esc(reportAge(report))} · ${esc(report.confirmations)} confirmation${report.confirmations === 1 ? '' : 's'}. ${esc(reportDesc(report))}`;
    const tip = kn
      ? 'ಇದು ಮಾದರಿ ಮಾಹಿತಿ; ನಿಜ ಪರಿಸ್ಥಿತಿ ಬೇರೆಯಾಗಿರಬಹುದು. ನಕ್ಷೆಯಲ್ಲಿ ಪಿನ್ ಒತ್ತಿ ಪೂರ್ಣ ವಿವರ ನೋಡಲಿ.'
      : 'This is sample data and real conditions may differ. Tap the pin on the map to see the full report.';
    return `<p><strong>${head}</strong></p><p>${line}</p><p><em>${tip}</em></p>`;
  }

  function answerSeverity() {
    const kn = lang() === 'kn';
    const rows = kn
      ? [
          '<strong>ಹೆಚ್ಚಿನ ನೀರು</strong> (ಕೆಂಪು) — ಆಳದ ನೀರು; ದಾಟಲು ಪ್ರಯತ್ನಿಸಬೇಡಿ.',
          '<strong>ಮಧ್ಯಮ ನೀರು</strong> (ಕಿತ್ತಳೆ) — ರಸ್ತೆಯ ಮೇಲೆ ನೀರು; ಎಚ್ಚರವೆ.',
          '<strong>ಕಡಿಮೆ ನೀರು / ನೀರು ತೆರವು</strong> (ಹಸಿರು) — ಕಡಿಮೆ ನೀರು ಅಥವಾ ತೆರವಾಗಿದೆ.',
        ]
      : [
          '<strong>High water</strong> (red) — deep water; do not attempt to cross.',
          '<strong>Moderate</strong> (orange) — water on the road; take care.',
          '<strong>Low / Cleared</strong> (green) — shallow water, or marked cleared.',
        ];
    const note = kn
      ? 'ಬಣ್ಣ ಮಾತ್ರ ಸೂಚಿಯಾಗಿಲ್ಲ — ಪ್ರತಿ ಪಿನ್‌ನಲ್ಲಿ ಅವಧಿ ಮತ್ತು ಫೋಟೋ ಕೂಡ ಇರುತ್ತದೆ.'
      : 'Colour is never the only signal — each pin also shows its age and photo.';
    return `<p>${kn ? 'ನಕ್ಷೆಯ ಬಣ್ಣಗಳ ಅರ್ಥ:' : 'The map colours mean:'}</p><ul class="chat-list"><li>${rows.join('</li><li>')}</li></ul><p><em>${note}</em></p>`;
  }

  function answerSafety() {
    const kn = lang() === 'kn';
    const tips = kn
      ? [
          'ಎಂದಿಗೂ ಪ್ರವಾಹದ ನೀರಿನೊಳಗೆ ಹೋಗಬೇಡಿ — ಕುತ್ಕೂಹಲ ಅಥವಾ ವರದಿಗಾಗಿ ಅಲ್ಲ.',
          'ವಿದ್ಯುತ್ ಖಂಬಗಳು ಮತ್ತು ತಂತಿಗಳ ಹತ್ತಿರದ ನೀರನ್ನು ದೂರವಿಡಿ — ನೇರಾಂತರದ ಅಪಾಯ.',
          'ತಳಿರುತ್ತಿದ್ದರೆ ಉನ್ನತ ಸ್ಥಳಕ್ಕೆ ಹೋಗಿ.',
          'ತುರ್ತು ಪರಿಸ್ಥಿತಿ: <strong>112</strong>. ನಾಗರಿಕ ಸಮಸ್ಯೆ: <strong>1533</strong> (GBA).',
        ]
      : [
          'Never enter floodwater — not for curiosity and not for a report.',
          'Keep away from water near electric poles and wires — electrocution risk.',
          'If trapped, move to higher ground.',
          'Emergencies: call <strong>112</strong>. Civic issues: <strong>1533</strong> (GBA).',
        ];
    const lead = kn
      ? 'ನನ್ನಿಂದ “ಸುರಕ್ಷಿತ” ಎಂದು ಹೇಳಲು ಸಾಧ್ಯವಿಲ್ಲ — ಆದರೆ ಇಲ್ಲಿ ಕೆಲವು ಮಹತ್ವದ ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು:'
      : 'I can’t tell you it’s “safe” — but here are the important precautions:';
    return `<p>${lead}</p><ul class="chat-list"><li>${tips.join('</li><li>')}</li></ul>`;
  }

  function answerHelplines() {
    const kn = lang() === 'kn';
    const rows = kn
      ? [
          '<strong>112</strong> — ಎಲ್ಲಾ ತುರ್ತು ಸೇವೆಗಳು (ರಾಷ್ಟ್ರೀಯ).',
          '<strong>1533</strong> — ನಾಗರಿಕ ಸಹಾಯವಾಣಿ (GBA).',
          '<strong>1916</strong> — ನೀರು ಸಮಸ್ಯೆ (BWSSB).',
          '<strong>1912</strong> — ವಿದ್ಯುತ್ ಸಮಸ್ಯೆ (BESCOM).',
        ]
      : [
          '<strong>112</strong> — all emergencies (national).',
          '<strong>1533</strong> — civic helpline (GBA).',
          '<strong>1916</strong> — water issues (BWSSB).',
          '<strong>1912</strong> — power issues (BESCOM).',
        ];
    const note = kn
      ? 'ಆ್ಯಪ್‌ನಲ್ಲಿ ಇವುಗಳಿಗೆ ಒಂದು-ಟ್ಯಾಪ್ ಕರೆ ಬಟನ್‌ಗಳು ಇವೆ. (ಮಾದರಿ ಸಂಪರ್ಕ — ಬಿಡುಗಡೆಗೂ ಮುನ್ನ GBA ಜೊತೆ ಪರಿಶೀಲಿಸಿ.)'
      : 'The app has one-tap call buttons for these. (Sample contact details — verify with the GBA before relying on them.)';
    return `<p>${kn ? 'ಪ್ರಮುಖ ಸಂಪರ್ಕ ಸಂಖ್ಯೆಗಳು:' : 'Key contact numbers:'}</p><ul class="chat-list"><li>${rows.join('</li><li>')}</li></ul><p><em>${note}</em></p>`;
  }

  function answerLanguages() {
    const kn = lang() === 'kn';
    return kn
      ? '<p>ಈ ಡೆಮೊ <strong>ಇಂಗ್ಲಿಷ್</strong> ಮತ್ತು <strong>ಕನ್ನಡ</strong> ಎರಡರಲ್ಲೂ ಲಭ್ಯ. ಮೇಲಿನ ಬಲಭಾಗದಲ್ಲಿರುವ <strong>EN / ಕನ್ನಡ</strong> ಟಾಗಲ್ ಒತ್ತಿ ಭಾಷೆ ಬದಲಿಸಿ.</p><p>ಪೂರ್ಣ ಉತ್ಪನ್ನದಲ್ಲಿ ಹಿಂದಿ, ತಮಿಳು ಮತ್ತು ತೆಲುಗೂ ಸೇರಿಸಲು ಯೋಜಿಸಲಾಗಿದೆ.</p>'
      : '<p>This demo is available in <strong>English</strong> and <strong>Kannada</strong>. Use the <strong>EN / ಕನ್ನಡ</strong> toggle in the top-right to switch — every screen updates.</p><p>Hindi, Tamil and Telugu are planned for the full product.</p>';
  }

  function answerConfirmations() {
    const kn = lang() === 'kn';
    return kn
      ? '<p>ಯಾವುದೇ ವರದಿಯ ಮೇಲೆ <strong>“ಇನ್ನೂ ಪ್ರವಾಹವಿದೆ”</strong> ಅಥವಾ <strong>“ನೀರು ತೆರವು”</strong> ಎಂದು ಒತ್ತಿ ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆ ತೋರಿಸಬಹುದು. ಇತರರು ದೃಢೀಕರಿಸಿದಾಗ ವಿಶ್ವಾಸ ಹೆಚ್ಚುತ್ತದೆ; ಎರಡು ಜನ “ತೆರವು” ಎಂದರೆ ಅದು ಮುಗಿಯುತ್ತದೆ.</p><p><em>ಈ ಡೆಮೊದಲ್ಲಿ ಇದು ಸ್ಥಳೀಯವಾಗಿ ಸಿಮ್ಯುಲೇಟ್ ಆಗುತ್ತದೆ.</em></p>'
      : '<p>On any report you can tap <strong>“Still flooded”</strong> or <strong>“Cleared”</strong> to give feedback. When others confirm, the report’s confidence rises; when two people mark it cleared, it ends.</p><p><em>In this demo this is simulated locally.</em></p>';
  }

  function answerFreshness() {
    const kn = lang() === 'kn';
    return kn
      ? '<p>ಪ್ರತಿ ವರದಿ ತನ್ನ <strong>ಅವಧಿ</strong> (ಉದಾ. “11 ನಿಮಿಷಗಳ ಹಿಂದೆ”) ತೋರಿಸುತ್ತದೆ. ಪಿನ್‌ನ ಮೇಲೆ ಹೊವರಿಸಿದಾಗ ಅವಧಿ ಕಾಣಿಸುತ್ತದೆ.</p><p>ಪೂರ್ಣ ಉತ್ಪನ್ನದಲ್ಲಿ ವರದಿ 3 ಗಂಟೆಗಳಲ್ಲಿ ಮಸುಕಾಗಿ, 24 ಗಂಟೆಗಳಲ್ಲಿ ಸಂಗ್ರಹವಾಗುತ್ತದೆ.</p>'
      : '<p>Every report shows its <strong>age</strong> (e.g. “11 min ago”), and the age appears when you hover a pin. The reports on the map are the most recent ones.</p><p>In the full product, a report fades after 3 hours and archives after 24 hours.</p>';
  }

  function answerPrivacy() {
    const kn = lang() === 'kn';
    return kn
      ? '<p>ಈ ಡೆಮೊ <strong>ಯಾವುದೇ ಡೇಟಾವನ್ನು ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ</strong>: ಖಾತೆ ಇಲ್ಲ, ನಿಜ ಸ್ಥಳ ಇಲ್ಲ, ಅಪ್‌ಲೋಡ್ ಇಲ್ಲ, ನೆಟ್‌ವರ್ಕ್ ಕರೆಗಳೂ ಇಲ್ಲ. ಫೋಟೋ ಕೇವಲ ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಸ್ಥಳೀಯವಾಗಿ ಮುನ್ನೋಟ ಮಾಡಲಾಗುತ್ತದೆ.</p><p>ಪೂರ್ಣ ಉತ್ಪನ್ನದಲ್ಲಿ ಕೇವಲ ಫೋನ್ ಸಂಖ್ಯೆ (ಸೈನ್-ಇನ್) ಮತ್ತು ವರದಿಯ ಸಮಯದಲ್ಲಿ ಮಾತ್ರ ನಿಖರ ಸ್ಥಳ ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ; ಹಿನ್ನೆಲೆ ಟ್ರ್ಯಾಕಿಂಗ್ ಇಲ್ಲ.</p>'
      : '<p>This demo <strong>stores no data</strong>: no account, no real location, no uploads, no network calls. Photos are only previewed locally in your browser.</p><p>The full product would collect just a phone number (for sign-in) and precise location only at report time — never background tracking. Public photos have EXIF stripped and faces/plates blurred.</p>';
  }

  function answerFallback() {
    return typeof t === 'function' ? t('chatFallback') : 'I can help with what this site is, how to use it, and the reports shown.';
  }

  // A tidy list of everything the assistant can do (used by "what can you help
  // with?" and by the upgraded fallback so an unknown question is never a dead end).
  function capabilitiesList() {
    const raw = typeof t === 'function' ? t('chatCapList') : 'What this site is|How to report flooding|How to check a route';
    const items = String(raw).split('|').map((s) => `<li>${esc(s)}</li>`).join('');
    const intro = typeof t === 'function' ? t('chatCapIntro') : 'I can help with all of this:';
    return `<p>${esc(intro)}</p><ul class="chat-list">${items}</ul>`;
  }

  function answerHelp() {
    return capabilitiesList();
  }

  function answerOfficial() {
    return `<p>${typeof t === 'function' ? t('chatOfficial') : 'This is a community tool, not an official government service.'}</p>`;
  }

  function answerWhoMade() {
    return `<p>${typeof t === 'function' ? t('chatWhoMade') : 'A community flood-reporting prototype for Bengaluru.'}</p>`;
  }

  function answerDuringFlood() {
    return `<p>${typeof t === 'function' ? t('chatDuringFlood') : 'Move to higher ground, never enter floodwater, and call 112 in an emergency.'}</p>`;
  }

  // --- Intent routing -------------------------------------------------------
  function respond(raw) {
    const text = normalize(raw);
    if (!text) return answerFallback();

    // Greeting — only for short messages that are basically just a greeting.
    if (text.length <= 24 && score(text, [['hi', 'hello', 'hey', 'namaste', 'namaskara', 'ನಮಸ್ಕಾರ', 'ಹಲೋ']])) {
      return answerGreeting();
    }

    const area = findReportForArea(text);

    // How-to phrasings give the report/route intents a strong second signal,
    // so "how do i report flooding in HSR" is treated as a how-to, not an area.
    const howto = [['how do i', 'how to', 'how can i', 'steps', 'guide', 'ಹೇಗೆ']];
    const intents = [
      { s: score(text, [['help', 'what can you', 'capab', 'options', 'features', 'ಸಹಾಯ', 'ಸಾಧ್ಯ']]), fn: answerHelp },
      { s: score(text, [['official', 'government', 'gba', 'bbmp', 'authority', 'ಸರ್ಕಾರ', 'ಅಧಿಕಾರ', 'ಗುರಿ']]), fn: answerOfficial },
      { s: score(text, [['who made', 'who built', 'creator', 'prototype', 'demo', 'ಯಾರು', 'ರಚಿಸ', 'ಮಾದರಿ']]), fn: answerWhoMade },
      { s: score(text, [['during', 'caught', 'trapped', 'stuck', 'what should i do', 'right now help', 'ಸಿಲುಕ', 'ಏನು ಮಾಡಲಿ']]), fn: answerDuringFlood },
      { s: score(text, [['helpline', 'helplines', 'emergency', 'phone', 'call', 'number', 'ಸಹಾಯವಾಣಿ', 'ತುರ್ತು', 'ನಂಬರ', 'ಕರೆ']]), fn: answerHelplines },
      { s: score(text, [['safety', 'safe', 'precaution', 'danger', 'electro', 'careful', 'risk', 'ಸುರಕ್ಷ', 'ಎಚ್ಚರ', 'ಅಪಾಯ']]), fn: answerSafety },
      { s: score(text, [['language', 'kannada', 'english', 'hindi', 'tamil', 'telugu', 'translate', 'ಭಾಷೆ', 'ಇಂಗ್ಲಿಷ']]), fn: answerLanguages },
      { s: score(text, [['severity', 'colour', 'color', 'red', 'orange', 'green', 'mean', 'meaning', 'legend', 'high water', 'moderate', 'ಗುರುತು', 'ಬಣ್ಣ', 'ಅರ್ಥ', 'ಮಟ್ಟ']]), fn: answerSeverity },
      { s: score(text, [['confirm', 'confirmation', 'still flooded', 'cleared', 'vote', 'feedback', 'ದೃಢ', 'ತೆರವು', 'ಪ್ರತಿಕ್ರಿಯ']]), fn: answerConfirmations },
      { s: score(text, [['recent', 'fresh', 'old', 'age', 'when', 'timestamp', 'how long', 'ಹಳೆಯ', 'ತಾಜಾ', 'ಅವಧಿ', 'ಯಾವಾಗ']]), fn: answerFreshness },
      { s: score(text, [['privacy', 'data', 'location', 'my data', 'store', 'track', 'collect', 'ಗೌಪ್ಯ', 'ಡೇಟಾ', 'ಸ್ಥಳ', 'ಸಂಗ್ರಹ']]), fn: answerPrivacy },
      { s: score(text, [['report', 'submit', 'post', 'upload', 'photo', 'camera', 'capture', 'ವರದಿ', 'ಸಲ್ಲಿಸ', 'ಫೋಟೋ', 'ಕ್ಯಾಮೆರಾ']], howto), fn: answerHowToReport },
      { s: score(text, [['route', 'from', 'check', 'way', 'journey', 'travel', 'navigate', 'driving', 'ಮಾರ್ಗ', 'ಪರಿಶೀಲ', 'ಪ್ರಯಾಣ']], howto), fn: answerHowToRoute },
      { s: score(text, [['what is', 'about', 'purpose', 'what does', 'community', 'official', 'why', 'ಏನು', 'ಉದ್ದೇಶ', 'ಸಮುದಾಯ', 'ಸರ್ಕಾರ']]), fn: answerWhatIs },
      {
        s: score(
          text,
          [['flood', 'report', 'water', 'waterlogging', 'ವರದಿ', 'ಪ್ರವಾಹ', 'ನೀರು'], ['now', 'current', 'currently', 'right now', 'latest', 'any', 'where', 'show', 'list', 'ಈಗ', 'ಪ್ರಸ್ತುತ', 'ಎಲ್ಲಿ', 'ತೋರಿ']],
        ),
        fn: answerCurrentReports,
      },
    ];

    intents.sort((a, b) => b.s - a.s);
    const best = intents[0];

    // Decision order:
    //  1. A strong intent match (>=2) wins outright (e.g. a clear how-to or a
    //     "reports now" question).
    //  2. Otherwise, if a specific area was named, answer about that area —
    //     mentioning a place usually means asking about it.
    //  3. Otherwise fall back to a single-keyword intent match.
    if (best && best.s >= 2) return best.fn();
    if (area) return answerArea(area);
    if (best && best.s === 1) return best.fn();

    // Nothing matched: never a dead end — show what the bot can do.
    return answerFallback() + capabilitiesList();
  }

  // --- Rendering ------------------------------------------------------------
  function addMessage(role, html) {
    const row = document.createElement('div');
    row.className = `chat-msg ${role}`;
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.innerHTML = html;
    row.appendChild(bubble);
    body.appendChild(row);
    body.scrollTop = body.scrollHeight;
    return bubble;
  }

  function showTyping() {
    const row = document.createElement('div');
    row.className = 'chat-msg bot typing';
    row.innerHTML = '<div class="chat-bubble"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>';
    body.appendChild(row);
    body.scrollTop = body.scrollHeight;
    return row;
  }

  function send(raw) {
    const text = String(raw || '').trim();
    if (!text || busy) return;
    addMessage('user', esc(text));
    input.value = '';
    busy = true;
    sendBtn.disabled = true;
    const typing = showTyping();
    // Small, human-like delay before the answer appears.
    window.setTimeout(() => {
      typing.remove();
      addMessage('bot', respond(text));
      busy = false;
      sendBtn.disabled = false;
      input.focus();
    }, 360 + Math.min(680, text.length * 16));
  }

  function suggestions() {
    const list = [
      { k: 'chatSuggestWhat', q_en: 'what is this site', q_kn: 'ಈ ಸೈಟ್ ಏನು' },
      { k: 'chatSuggestHowReport', q_en: 'how do i report flooding', q_kn: 'ಪ್ರವಾಹ ವರದಿ ಹೇಗೆ ಮಾಡುವುದು' },
      { k: 'chatSuggestHowRoute', q_en: 'how do i check a route', q_kn: 'ಮಾರ್ಗ ಹೇಗೆ ಪರಿಶೀಲಿಸುವುದು' },
      { k: 'chatSuggestReports', q_en: 'what floods are reported now', q_kn: 'ಈಗ ಯಾವ ಪ್ರವಾಹ ವರದಿಯಿದೆ' },
      { k: 'chatSuggestSafety', q_en: 'is it safe to go out', q_kn: 'ಹೊರಗೆ ಹೋಗುವುದು ಸುರಕ್ಷಿತವೇ' },
      { k: 'chatSuggestHelp', q_en: 'what can you help with', q_kn: 'ನೀವು ಏನು ಸಹಾಯ ಮಾಡಬಲ್ಲಿರಿ' },
    ];
    suggestionsBox.replaceChildren();
    for (const item of list) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chat-suggestion';
      btn.textContent = typeof t === 'function' ? t(item.k) : item.q_en;
      btn.addEventListener('click', () => send(lang() === 'kn' ? item.q_kn : item.q_en));
      suggestionsBox.appendChild(btn);
    }
  }

  function refreshChrome() {
    if (typeof t !== 'function') return;
    if (subtitle) subtitle.textContent = t('chatSubtitle');
    input.placeholder = t('chatPlaceholder');
    sendBtn.textContent = t('chatSend');
    fab.setAttribute('aria-label', t('chatOpen'));
    closeBtn.setAttribute('aria-label', t('chatClose'));
    suggestions();
  }

  function open() {
    panel.hidden = false;
    requestAnimationFrame(() => panel.classList.add('open'));
    fab.setAttribute('aria-expanded', 'true');
    fab.classList.remove('attention');
    if (!greeted) {
      greeted = true;
      addMessage('bot', typeof t === 'function' ? t('chatWelcome') : answerGreeting());
      suggestions();
    }
    setTimeout(() => input.focus(), 120);
  }

  function close() {
    panel.classList.remove('open');
    fab.setAttribute('aria-expanded', 'false');
    window.setTimeout(() => {
      if (!panel.classList.contains('open')) panel.hidden = true;
    }, 200);
  }

  function isOpen() {
    return !panel.hidden;
  }

  function toggle() {
    if (!isOpen()) open();
    else close();
  }

  // --- Wire up --------------------------------------------------------------
  function init() {
    if (!fab || !panel) return;
    refreshChrome();

    fab.addEventListener('click', () => {
      toggle();
      fab.classList.remove('attention');
    });
    closeBtn.addEventListener('click', close);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      send(input.value);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && isOpen()) close();
    });

    // Re-render labels/suggestions when the app language changes.
    const langToggle = document.querySelector('#languageToggle');
    if (langToggle) langToggle.addEventListener('click', () => setTimeout(refreshChrome, 0));

    // A gentle nudge so people notice the assistant.
    setTimeout(() => {
      if (!isOpen()) fab.classList.add('attention');
    }, 5000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for debugging / future backend integration.
  window.FloodWatchChat = { respond, send, open, close, toggle };
})();





