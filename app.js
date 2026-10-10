const copy = {
  en: {
    reportFlood: 'Report flooding', sampleLabel: 'SAMPLE REPORTS · NOT LIVE', headline: 'Know before<br>you head out.',
    subhead: 'A little local knowledge can change a whole journey.', communityOnly: 'A community tool, not a government service.',
    sampleNotice: 'All reports and map details here are illustrative sample data.', mapReports: 'Map & reports', routeCheck: 'Route check',
    nearbyTitle: 'NEARBY REPORTS', filter: 'Filter', all: 'All reports', high: 'High water', moderate: 'Moderate',
    noReports: 'No sample reports in this filter.', tryAnother: 'Try another severity filter.', showAll: 'View all sample reports',
    checkJourney: 'Check your journey', routeIntro: 'See whether sample flood reports fall along your way.',
    fromLabel: 'Starting point', toLabel: 'Destination', checkRouteButton: 'Check this route', trySample: 'TRY A SAMPLE ROUTE',
    routeWarning: 'No recent reports does not mean a route is safe. Use your judgment.', needHelp: 'Need urgent help?',
    callLocal: 'Use official emergency channels.', emergency: 'EMERGENCY', civicLine: 'CIVIC LINE · GBA',
    contactNote: 'Prototype contact details — verify with the GBA before launch.', communityData: 'Community-submitted · Sample preview',
    mapTitle: 'Bengaluru', sampleMap: 'Illustrative map · Sample reports', waterLevel: 'WATER LEVEL', cleared: 'Cleared',
    mapCaption: 'Schematic only · Not for navigation', seeSomething: 'See flooding nearby?', helpNeighbors: 'Your neighbors could use a heads-up.',
    makeReport: 'Make a report', call112: 'Call 112', communityReport: 'COMMUNITY REPORT', reportFlowTitle: 'Help others steer clear.',
    reportFlowDescription: 'Add a sample photo and details. This demo stays on this device.', locationLabel: 'Location',
    example: 'SAMPLE', locationHint: 'Example place only — no location is being collected.', severityLabel: 'How deep is the water?',
    low: 'Low', descriptionLabel: 'What can others expect?', addPhoto: 'Add sample photo', photoHint: 'Capture or select a photo · stays local',
    previewReport: 'Preview report', sampleTime: 'SAMPLE TIME', reportPreview: 'REPORT PREVIEW', editReport: 'Edit details',
    finishDemo: 'Finish demo', photoRequired: 'Add a photo from this device or use the sample photo to continue.',
    locationRequired: 'Add a location and a short description to preview this report.',
    samplePhotoButton: 'Use demo photo', selectedPhoto: 'Photo selected · local preview only',
    noPhotoYet: 'No photo selected yet.', reviewOnly: 'Preview only — no information has been shared.',
    demoComplete: 'Demo complete', nothingSent: 'No data was sent or saved. No neighbors or authorities were contacted.',
    urgentAgain: 'If there is immediate danger, use official emergency channels.', closePreview: 'Close preview',
    phoneNotice: 'Opening your phone app. Check the number and confirm before calling.',
    mapCentered: 'Showing the illustrative Bengaluru map.', zoomNotice: 'Map zoom: sample illustration only.',
    routeMissing: 'Enter both a starting point and a destination.', routeLoading: 'Checking sample reports…',
    routeAlertTitle: 'Flood report on the way', routeAlertText: 'A sample report is near this illustrative route. Conditions may differ; this is not turn-by-turn navigation.',
    routeClearTitle: 'No sample reports on this route', routeClearText: 'No matching reports appear in this demo. That does not mean the route is safe.',
    routeUnknownTitle: 'No recent sample data', routeUnknownText: 'This demo has no recent reports for the places entered. Please use your judgment.',
    routeSample: 'SIMULATED RESULT', sampleNearby: 'Illustrative report nearby', allReports: 'All sample reports shown',
    confirmed: 'Still flooded', clearedVote: 'Cleared', voteNotice: 'Your response was simulated in this preview; nothing was sent.',
    reportStatusHigh: 'High water', reportStatusModerate: 'Moderate water', reportStatusLow: 'Low water',
    reportStatusCleared: 'Cleared', justNow: 'just now', reportCountOne: 'report', reportCountMany: 'reports',
    photoBadge: 'SAMPLE PHOTO', notToScale: 'Not to scale',
    // Map interaction
    mapPanHint: 'Drag to pan · scroll or double-click to zoom',
    mapResetView: 'View reset',
    // Required report fields
    locationRequired: 'A location is required to preview this report.',
    photoRequired: 'A photo is required — capture one or use the demo photo.',
    requiredField: 'required',
    optionalField: 'optional',
    // Log in / log out
    authLogin: 'Log in',
    authLogout: 'Log out',
    authTitle: 'Log in',
    authSubtitle: 'Sign in with your phone number to report flooding. Browsing the map needs no account.',
    authPhoneLabel: 'Phone number',
    authSendCode: 'Send code',
    authOtpTitle: 'Enter your code',
    authOtpLabel: '6-digit code',
    authVerify: 'Verify & log in',
    authChangeNumber: 'Change number',
    authDemoNote: 'Demo only — no real SMS is sent. Enter any 6 digits (e.g. 123456).',
    authInvalidPhone: 'Enter a valid 10-digit Indian mobile number.',
    authInvalidOtp: 'Enter the 6-digit code.',
    authResident: 'Resident',
    authLoginSuccess: 'You are logged in.',
    authLogoutSuccess: 'You have been logged out.',
    // Chatbot
    chatTitle: 'FloodWatch Assistant',
    chatSubtitle: 'Ask me anything about this site',
    chatWelcome: "Hi! I'm the FloodWatch assistant. I can explain what this site is, how to report flooding or check a route, and read the reports currently on the map. What would you like to know?",
    chatPlaceholder: 'Ask about reports, routes, safety…',
    chatSend: 'Send',
    chatOpen: 'Open FloodWatch assistant',
    chatClose: 'Close assistant',
    chatTyping: 'Assistant is typing…',
    chatSuggestWhat: 'What is this site?',
    chatSuggestHowReport: 'How do I report flooding?',
    chatSuggestHowRoute: 'How do I check a route?',
    chatSuggestReports: 'What floods are reported now?',
    chatSuggestSafety: 'Is it safe to go out?',
    chatFallback: "I'm a small on-device assistant for this demo, so I answer best about the site itself — what it is, how to use it, and the reports shown. Try asking “How do I report flooding?” or “What floods are reported now?”. For real emergencies, call 112.",
    chatNotOfficial: 'This is a community tool, not an official government service.',
    chatSuggestHelp: 'What can you help with?',
    chatCapIntro: 'I can help with all of this:',
    chatCapList: 'What this site is|How to report flooding|How to check a route|The flood reports on the map right now|A specific area (e.g. Bellandur, HSR)|What the map colours mean|Safety during a flood|Emergency & helpline numbers|Languages|How fresh the data is|Privacy & what we store|How confirming (still flooded / cleared) works',
    chatOfficial: 'No — FloodWatch is a <strong>community tool, not an official government service</strong>, and it is not run by the GBA, BBMP or any authority. It complements official channels; for civic issues call <strong>1533</strong> (GBA) and for emergencies <strong>112</strong>.',
    chatWhoMade: 'This is a community flood-reporting prototype for Bengaluru, built to show how neighbours can share where roads and underpasses are flooded after heavy rain. It is a demo — the reports shown are sample data and nothing is sent anywhere.',
    chatDuringFlood: 'If you are caught in flooding: move to higher ground, never walk or drive through floodwater, keep away from water near electric poles and wires, and call <strong>112</strong> in an emergency. Do not risk a photo — your safety comes first.',
  },
  kn: {
    reportFlood: 'ಪ್ರವಾಹ ವರದಿ ಮಾಡಿ', sampleLabel: 'ಮಾದರಿ ವರದಿಗಳು · ನೇರವಲ್ಲ', headline: 'ಹೊರಡುವ ಮುನ್ನ<br>ಪರಿಸ್ಥಿತಿ ತಿಳಿಯಿರಿ.',
    subhead: 'ಸ್ಥಳೀಯ ಮಾಹಿತಿ ನಿಮ್ಮ ಪ್ರಯಾಣವನ್ನು ಬದಲಾಯಿಸಬಹುದು.', communityOnly: 'ಇದು ಸಮುದಾಯದ ಸಾಧನ — ಸರ್ಕಾರಿ ಸೇವೆಯಲ್ಲ.',
    sampleNotice: 'ಇಲ್ಲಿನ ಎಲ್ಲಾ ವರದಿಗಳು ಮತ್ತು ನಕ್ಷೆ ವಿವರಗಳು ಮಾದರಿ ಮಾಹಿತಿಯಷ್ಟೇ.', mapReports: 'ನಕ್ಷೆ ಮತ್ತು ವರದಿಗಳು', routeCheck: 'ಮಾರ್ಗ ಪರಿಶೀಲನೆ',
    nearbyTitle: 'ಹತ್ತಿರದ ವರದಿಗಳು', filter: 'ಫಿಲ್ಟರ್', all: 'ಎಲ್ಲಾ ವರದಿಗಳು', high: 'ಹೆಚ್ಚಿನ ನೀರು', moderate: 'ಮಧ್ಯಮ',
    noReports: 'ಈ ಫಿಲ್ಟರ್‌ನಲ್ಲಿ ಮಾದರಿ ವರದಿಗಳಿಲ್ಲ.', tryAnother: 'ಬೇರೆ ನೀರಿನ ಮಟ್ಟ ಆಯ್ಕೆಮಾಡಿ.', showAll: 'ಎಲ್ಲಾ ಮಾದರಿ ವರದಿಗಳನ್ನು ನೋಡಿ',
    checkJourney: 'ನಿಮ್ಮ ಪ್ರಯಾಣ ಪರಿಶೀಲಿಸಿ', routeIntro: 'ನಿಮ್ಮ ಮಾರ್ಗದಲ್ಲಿ ಮಾದರಿ ಪ್ರವಾಹ ವರದಿಗಳಿವೆಯೇ ನೋಡಿ.',
    fromLabel: 'ಪ್ರಾರಂಭ ಸ್ಥಳ', toLabel: 'ಗಮ್ಯಸ್ಥಾನ', checkRouteButton: 'ಈ ಮಾರ್ಗ ಪರಿಶೀಲಿಸಿ', trySample: 'ಮಾದರಿ ಮಾರ್ಗ ಪ್ರಯತ್ನಿಸಿ',
    routeWarning: 'ಇತ್ತೀಚಿನ ವರದಿಗಳಿಲ್ಲವೆಂದರೆ ಮಾರ್ಗ ಸುರಕ್ಷಿತ ಎಂದರ್ಥವಲ್ಲ. ವಿವೇಚನೆಯಿಂದ ನಿರ್ಧರಿಸಿ.', needHelp: 'ತುರ್ತು ಸಹಾಯ ಬೇಕೇ?',
    callLocal: 'ಅಧಿಕೃತ ತುರ್ತು ಸಂಪರ್ಕಗಳನ್ನು ಬಳಸಿ.', emergency: 'ತುರ್ತು ಸೇವೆ', civicLine: 'ನಾಗರಿಕ ಸಹಾಯವಾಣಿ · GBA',
    contactNote: 'ಮಾದರಿ ಸಂಪರ್ಕ ವಿವರಗಳು — ಬಿಡುಗಡೆಗೂ ಮೊದಲು GBA ಜೊತೆ ಪರಿಶೀಲಿಸಿ.', communityData: 'ಸಮುದಾಯ ಮಾಹಿತಿ · ಮಾದರಿ ಪೂರ್ವವೀಕ್ಷಣೆ',
    mapTitle: 'ಬೆಂಗಳೂರು', sampleMap: 'ಸಾಂಕೇತಿಕ ನಕ್ಷೆ · ಮಾದರಿ ವರದಿಗಳು', waterLevel: 'ನೀರಿನ ಮಟ್ಟ', cleared: 'ನೀರು ತೆರವು',
    mapCaption: 'ಸಾಂಕೇತಿಕ ನಕ್ಷೆ · ದಾರಿ ತೋರಿಸಲು ಅಲ್ಲ', seeSomething: 'ಹತ್ತಿರ ಪ್ರವಾಹ ಕಂಡಿದೆಯೇ?', helpNeighbors: 'ನೆರೆಹೊರೆಯವರಿಗೆ ತಿಳಿಸಿ.',
    makeReport: 'ವರದಿ ಮಾಡಿ', call112: '112 ಗೆ ಕರೆ', communityReport: 'ಸಮುದಾಯ ವರದಿ', reportFlowTitle: 'ಇತರರ ಸುರಕ್ಷತೆಗೆ ಸಹಾಯ ಮಾಡಿ.',
    reportFlowDescription: 'ಮಾದರಿ ಫೋಟೋ ಮತ್ತು ವಿವರಗಳನ್ನು ಸೇರಿಸಿ. ಈ ಡೆಮೊ ಈ ಸಾಧನದಲ್ಲೇ ಇರುತ್ತದೆ.', locationLabel: 'ಸ್ಥಳ',
    example: 'ಮಾದರಿ', locationHint: 'ಉದಾಹರಣೆಯ ಸ್ಥಳ ಮಾತ್ರ — ಸ್ಥಳದ ಮಾಹಿತಿ ಸಂಗ್ರಹಿಸಲಾಗುವುದಿಲ್ಲ.', severityLabel: 'ನೀರಿನ ಆಳ ಎಷ್ಟು?',
    low: 'ಕಡಿಮೆ', descriptionLabel: 'ಇತರರು ಏನನ್ನು ನಿರೀಕ್ಷಿಸಬೇಕು?', addPhoto: 'ಮಾದರಿ ಫೋಟೋ ಸೇರಿಸಿ', photoHint: 'ಫೋಟೋ ತೆಗೆಯಿರಿ ಅಥವಾ ಆಯ್ಕೆಮಾಡಿ · ಸ್ಥಳೀಯವಾಗಿ ಮಾತ್ರ',
    previewReport: 'ವರದಿ ಪೂರ್ವವೀಕ್ಷಣೆ', sampleTime: 'ಮಾದರಿ ಸಮಯ', reportPreview: 'ವರದಿ ಪೂರ್ವವೀಕ್ಷಣೆ', editReport: 'ವಿವರ ಬದಲಾಯಿಸಿ',
    finishDemo: 'ಡೆಮೊ ಮುಗಿಸಿ', photoRequired: 'ಮುಂದುವರಿಯಲು ಫೋಟೋ ಸೇರಿಸಿ ಅಥವಾ ಮಾದರಿ ಫೋಟೋ ಬಳಸಿ.',
    locationRequired: 'ಪೂರ್ವವೀಕ್ಷಣೆಗೆ ಸ್ಥಳ ಮತ್ತು ಸಂಕ್ಷಿಪ್ತ ವಿವರ ಸೇರಿಸಿ.',
    samplePhotoButton: 'ಡೆಮೊ ಫೋಟೋ ಬಳಸಿ', selectedPhoto: 'ಫೋಟೋ ಆಯ್ಕೆಮಾಡಲಾಗಿದೆ · ಸ್ಥಳೀಯ ಪೂರ್ವವೀಕ್ಷಣೆ ಮಾತ್ರ',
    noPhotoYet: 'ಇನ್ನೂ ಫೋಟೋ ಆಯ್ಕೆಮಾಡಿಲ್ಲ.', reviewOnly: 'ಪೂರ್ವವೀಕ್ಷಣೆ ಮಾತ್ರ — ಯಾವುದೇ ಮಾಹಿತಿ ಹಂಚಿಲ್ಲ.',
    demoComplete: 'ಡೆಮೊ ಪೂರ್ಣಗೊಂಡಿದೆ', nothingSent: 'ಯಾವುದೇ ಮಾಹಿತಿ ಕಳುಹಿಸಿಲ್ಲ ಅಥವಾ ಉಳಿಸಿಲ್ಲ. ನೆರೆಹೊರೆಯವರಿಗೆ ಅಥವಾ ಅಧಿಕಾರಿಗಳಿಗೆ ತಿಳಿಸಿಲ್ಲ.',
    urgentAgain: 'ತಕ್ಷಣದ ಅಪಾಯವಿದ್ದರೆ ಅಧಿಕೃತ ತುರ್ತು ಸಂಪರ್ಕ ಬಳಸಿ.', closePreview: 'ಪೂರ್ವವೀಕ್ಷಣೆ ಮುಚ್ಚಿ',
    phoneNotice: 'ಫೋನ್ ಅಪ್ಲಿಕೇಶನ್ ತೆರೆಯುತ್ತಿದೆ. ಸಂಖ್ಯೆಯನ್ನು ಪರಿಶೀಲಿಸಿ, ಕರೆ ಮಾಡಲು ದೃಢೀಕರಿಸಿ.',
    mapCentered: 'ಸಾಂಕೇತಿಕ ಬೆಂಗಳೂರು ನಕ್ಷೆಯನ್ನು ತೋರಿಸಲಾಗುತ್ತಿದೆ.', zoomNotice: 'ನಕ್ಷೆ ಜೂಮ್: ಮಾದರಿ ಚಿತ್ರಣ ಮಾತ್ರ.',
    routeMissing: 'ಪ್ರಾರಂಭ ಸ್ಥಳ ಮತ್ತು ಗಮ್ಯಸ್ಥಾನ ಎರಡನ್ನೂ ನಮೂದಿಸಿ.', routeLoading: 'ಮಾದರಿ ವರದಿಗಳನ್ನು ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ…',
    routeAlertTitle: 'ಮಾರ್ಗದಲ್ಲಿ ಪ್ರವಾಹ ವರದಿ ಇದೆ', routeAlertText: 'ಈ ಸಾಂಕೇತಿಕ ಮಾರ್ಗದ ಬಳಿ ಮಾದರಿ ವರದಿ ಇದೆ. ನಿಜ ಪರಿಸ್ಥಿತಿ ಬೇರೆಯಾಗಿರಬಹುದು; ಇದು ನ್ಯಾವಿಗೇಶನ್ ಅಲ್ಲ.',
    routeClearTitle: 'ಈ ಮಾರ್ಗದಲ್ಲಿ ಮಾದರಿ ವರದಿಗಳಿಲ್ಲ', routeClearText: 'ಈ ಡೆಮೊದಲ್ಲಿ ಹೊಂದುವ ವರದಿಗಳಿಲ್ಲ. ಅದರಿಂದ ಮಾರ್ಗ ಸುರಕ್ಷಿತವೆಂದರ್ಥವಲ್ಲ.',
    routeUnknownTitle: 'ಇತ್ತೀಚಿನ ಮಾದರಿ ಮಾಹಿತಿ ಇಲ್ಲ', routeUnknownText: 'ನಮೂದಿಸಿದ ಸ್ಥಳಗಳ ಕುರಿತು ಈ ಡೆಮೊದಲ್ಲಿ ಇತ್ತೀಚಿನ ವರದಿಗಳಿಲ್ಲ. ವಿವೇಚನೆಯಿಂದ ನಿರ್ಧರಿಸಿ.',
    routeSample: 'ಸಿಮ್ಯುಲೇಟೆಡ್ ಫಲಿತಾಂಶ', sampleNearby: 'ಹತ್ತಿರದ ಸಾಂಕೇತಿಕ ವರದಿ', allReports: 'ಎಲ್ಲಾ ಮಾದರಿ ವರದಿಗಳು',
    confirmed: 'ಇನ್ನೂ ಪ್ರವಾಹವಿದೆ', clearedVote: 'ನೀರು ತೆರವು', voteNotice: 'ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆ ಈ ಪೂರ್ವವೀಕ್ಷಣೆಯಲ್ಲಿ ಸಿಮ್ಯುಲೇಟೆಡ್ ಆಗಿದೆ; ಕಳುಹಿಸಿಲ್ಲ.',
    reportStatusHigh: 'ಹೆಚ್ಚಿನ ನೀರು', reportStatusModerate: 'ಮಧ್ಯಮ ನೀರು', reportStatusLow: 'ಕಡಿಮೆ ನೀರು',
    reportStatusCleared: 'ನೀರು ತೆರವು', justNow: 'ಈಗಷ್ಟೇ', reportCountOne: 'ವರದಿ', reportCountMany: 'ವರದಿಗಳು',
    photoBadge: 'ಮಾದರಿ ಫೋಟೋ', notToScale: 'ಅಳತೆಯಲ್ಲ',
    // Map interaction
    mapPanHint: 'ಜೂಮ್ ಮಾಡಲು ಎಳೆ ಅಥವಾ ಸ್ಕ್ರಾಲ್/ಡಬಲ್-ಕ್ಲಿಕ್',
    mapResetView: 'ನೋಟ ಮರುಹೊಂದಿಸಲಾಗಿದೆ',
    // Required report fields
    locationRequired: 'ಈ ವರದಿಯ ಪೂರ್ವವೀಕ್ಷಣೆಗೆ ಸ್ಥಳ ಅಗತ್ಯ.',
    photoRequired: 'ಫೋಟೋ ಅಗತ್ಯ — ಫೋಟೋ ತೆಗೆಯಿರಿ ಅಥವಾ ಡೆಮೊ ಫೋಟೋ ಬಳಸಿ.',
    requiredField: 'ಅಗತ್ಯ',
    optionalField: 'ಐಚ್ಛಿಕ',
    // Log in / log out
    authLogin: 'ಲಾಗ್ ಇನ್',
    authLogout: 'ಲಾಗ್ ಔಟ್',
    authTitle: 'ಲಾಗ್ ಇನ್',
    authSubtitle: 'ಪ್ರವಾಹ ವರದಿ ಮಾಡಲು ನಿಮ್ಮ ಫೋನ್ ಸಂಖ್ಯೆಯಿಂದ ಸೈನ್ ಇನ್ ಮಾಡಿ. ನಕ್ಷೆ ನೋಡಲು ಖಾತೆ ಬೇಕಿಲ್ಲ.',
    authPhoneLabel: 'ಫೋನ್ ಸಂಖ್ಯೆ',
    authSendCode: 'ಕೋಡ್ ಕಳುಹಿಸಿ',
    authOtpTitle: 'ನಿಮ್ಮ ಕೋಡ್ ನಮೂದಿಸಿ',
    authOtpLabel: '6-ಅಂಕಿಯ ಕೋಡ್',
    authVerify: 'ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಲಾಗ್ ಇನ್',
    authChangeNumber: 'ಸಂಖ್ಯೆ ಬದಲಿಸಿ',
    authDemoNote: 'ಡೆಮೊ ಮಾತ್ರ — ನಿಜ SMS ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ. ಯಾವುದೇ 6 ಅಂಕೆ ನಮೂದಿಸಿ (ಉದಾ. 123456).',
    authInvalidPhone: 'ಮಾನ್ಯ 10-ಅಂಕಿಯ ಭಾರತೀಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ.',
    authInvalidOtp: '6-ಅಂಕಿಯ ಕೋಡ್ ನಮೂದಿಸಿ.',
    authResident: 'ನಿವಾಸಿ',
    authLoginSuccess: 'ನೀವು ಲಾಗ್ ಇನ್ ಆಗಿದ್ದೀರಿ.',
    authLogoutSuccess: 'ನೀವು ಲಾಗ್ ಔಟ್ ಆಗಿದ್ದೀರಿ.',
    // Chatbot
    chatTitle: 'ಫ್ಲಡ್‌ವಾಚ್ ಸಹಾಯಕ',
    chatSubtitle: 'ಈ ಸೈಟ್ ಬಗ್ಗೆ ಏನಾದರೂ ಕೇಳಿ',
    chatWelcome: 'ನಮಸ್ಕಾರ! ನಾನು ಫ್ಲಡ್‌ವಾಚ್ ಸಹಾಯಕ. ಈ ಸೈಟ್ ಏನು, ಪ್ರವಾಹ ವರದಿ ಹೇಗೆ ಮಾಡುವುದು ಅಥವಾ ಮಾರ್ಗ ಹೇಗೆ ಪರಿಶೀಲಿಸುವುದು ಎಂಬುದನ್ನು ವಿವರಿಸಬಲ್ಲೆ, ಮತ್ತು ನಕ್ಷೆಯಲ್ಲಿ ಇರುವ ವರದಿಗಳನ್ನು ಓದಬಲ್ಲೆ. ನಿಮಗೆ ಏನು ತಿಳಿಯಬೇಕು?',
    chatPlaceholder: 'ವರದಿಗಳು, ಮಾರ್ಗ, ಸುರಕ್ಷತೆ ಬಗ್ಗೆ ಕೇಳಿ…',
    chatSend: 'ಕಳುಹಿಸಿ',
    chatOpen: 'ಫ್ಲಡ್‌ವಾಚ್ ಸಹಾಯಕರನ್ನು ತೆರೆಯಿರಿ',
    chatClose: 'ಸಹಾಯಕ ಮುಚ್ಚಿ',
    chatTyping: 'ಸಹಾಯಕ ಟೈಪ್ ಮಾಡುತ್ತಿದ್ದಾರೆ…',
    chatSuggestWhat: 'ಈ ಸೈಟ್ ಏನು?',
    chatSuggestHowReport: 'ಪ್ರವಾಹ ವರದಿ ಹೇಗೆ ಮಾಡುವುದು?',
    chatSuggestHowRoute: 'ಮಾರ್ಗ ಹೇಗೆ ಪರಿಶೀಲಿಸುವುದು?',
    chatSuggestReports: 'ಈಗ ಯಾವ ಪ್ರವಾಹ ವರದಿಯಿದೆ?',
    chatSuggestSafety: 'ಹೊರಗೆ ಹೋಗುವುದು ಸುರಕ್ಷಿತವೇ?',
    chatFallback: 'ಇದು ಈ ಡೆಮೊಗಾಗಿ ಒಂದು ಸಣ್ಣ ಸಾಧನ-ಆಧಾರಿತ ಸಹಾಯಕ, ಆದ್ದರಿಂದ ಸೈಟ್ ಬಗ್ಗೆ — ಅದು ಏನು, ಹೇಗೆ ಬಳಸುವುದು ಮತ್ತು ತೋರಿಸಿದ ವರದಿಗಳು — ಉತ್ತಮವಾಗಿ ಉತ್ತರಿಸುತ್ತದೆ. “ಪ್ರವಾಹ ವರದಿ ಹೇಗೆ ಮಾಡುವುದು?” ಅಥವಾ “ಈಗ ಯಾವ ಪ್ರವಾಹ ವರದಿಯಿದೆ?” ಎಂದು ಕೇಳಿ. ನಿಜ ತುರ್ತು ಪರಿಸ್ಥಿತಿಗೆ 112 ಗೆ ಕರೆ ಮಾಡಿ.',
    chatNotOfficial: 'ಇದು ಸಮುದಾಯದ ಸಾಧನ — ಸರ್ಕಾರಿ ಸೇವೆಯಲ್ಲ.',
    chatSuggestHelp: 'ನೀವು ಏನು ಸಹಾಯ ಮಾಡಬಲ್ಲಿರಿ?',
    chatCapIntro: 'ನಾನು ಇವುಗಳಲ್ಲಿ ಸಹಾಯ ಮಾಡಬಲ್ಲೆ:',
    chatCapList: 'ಈ ಸೈಟ್ ಏನು|ಪ್ರವಾಹ ವರದಿ ಹೇಗೆ ಮಾಡುವುದು|ಮಾರ್ಗ ಹೇಗೆ ಪರಿಶೀಲಿಸುವುದು|ಈಗ ನಕ್ಷೆಯಲ್ಲಿರುವ ಪ್ರವಾಹ ವರದಿಗಳು|ನಿರ್ದಿಷ್ಟ ಪ್ರದೇಶ (ಉದಾ. ಬೆಳ್ಳಂದೂರು, HSR)|ನಕ್ಷೆಯ ಬಣ್ಣಗಳ ಅರ್ಥ|ಪ್ರವಾಹದ ಸಮಯದಲ್ಲಿ ಸುರಕ್ಷತೆ|ತುರ್ತು ಮತ್ತು ಸಹಾಯವಾಣಿ ಸಂಖ್ಯೆಗಳು|ಭಾಷೆಗಳು|ಮಾಹಿತಿ ಎಷ್ಟು ತಾಜಾ|ಗೌಪ್ಯತೆ ಮತ್ತು ನಾವು ಏನು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ|ದೃಢೀಕರಣ (ಇನ್ನೂ ಪ್ರವಾಹ / ನೀರು ತೆರವು) ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
    chatOfficial: 'ಇಲ್ಲ — ಫ್ಲಡ್‌ವಾಚ್ <strong>ಸಮುದಾಯದ ಸಾಧನ, ಸರ್ಕಾರಿ ಸೇವೆಯಲ್ಲ</strong>, ಮತ್ತು ಅದನ್ನು GBA, BBMP ಅಥವಾ ಯಾವ ಅಧಿಕಾರಿಯೂ ನಡೆಸುವುದಿಲ್ಲ. ಇದು ಅಧಿಕೃತ ಚಾನೆಲುಗಳನ್ನು ಪೂರಕವಾಗಿ ಮಾಡುತ್ತದೆ; ನಾಗರಿಕ ಸಮಸ್ಯೆಗೆ <strong>1533</strong> (GBA) ಮತ್ತು ತುರ್ತು ಪರಿಸ್ಥಿತಿಗೆ <strong>112</strong> ಗೆ ಕರೆ ಮಾಡಿ.',
    chatWhoMade: 'ಇದು ಬೆಂಗಳೂರಿಗಾಗಿ ಒಂದು ಸಮುದಾಯ ಪ್ರವಾಹ-ವರದಿ ಮಾದರಿ. ಭಾರೀ ಮಳೆಯ ನಂತರ ರಸ್ತೆಗಳು ಮತ್ತು ಅಂಡರ್‌ಪಾಸ್‌ಗಳಲ್ಲಿ ಎಲ್ಲಿ ನೀರು ನಿಂತಿದೆ ಎಂದು ನೆರೆಹೊರೆಯವರು ಹಂಚಿಕೊಳ್ಳಬಹುದು. ಇದು ಡೆಮೊ — ತೋರಿಸಿದ ವರದಿಗಳು ಮಾದರಿ ಮಾಹಿತಿ ಮತ್ತು ಏನನ್ನೂ ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ.',
    chatDuringFlood: 'ನೀವು ಪ್ರವಾಹದಲ್ಲಿ ಸಿಲುಕಿದ್ದರೆ: ಉನ್ನತ ಸ್ಥಳಕ್ಕೆ ಹೋಗಿ, ಪ್ರವಾಹದ ನೀರಿನಲ್ಲಿ ನಡಿಯಬೇಡಿ ಅಥವಾ ವಾಹನ ಚಲಾಯಿಸಬೇಡಿ, ವಿದ್ಯುತ್ ಖಂಬಗಳು ಮತ್ತು ತಂತಿಗಳ ಹತ್ತಿರದ ನೀರನ್ನು ದೂರವಿಡಿ, ಮತ್ತು ತುರ್ತು ಪರಿಸ್ಥಿತಿಗೆ <strong>112</strong> ಗೆ ಕರೆ ಮಾಡಿ. ಫೋಟೋಗಾಗಿ ಅಪಾಯ ಎಂದಿಗೂ ಮಾಡಬೇಡಿ — ನಿಮ್ಮ ಸುರಕ್ಷತೆ ಮುಖ್ಯ.',
  },
};

const reports = [
  { id: 'bellandur', location: 'Bellandur', spot: 'Outer Ring Road · near Ecospace', severity: 'high', age: '11 min ago', ageKn: '11 ನಿಮಿಷಗಳ ಹಿಂದೆ', description: 'Water across two lanes near the underpass. Slow traffic is visible.', descriptionKn: 'ಅಂಡರ್‌ಪಾಸ್ ಬಳಿ ಎರಡು ಲೇನ್‌ಗಳಲ್ಲಿ ನೀರು. ವಾಹನ ಸಂಚಾರ ನಿಧಾನವಾಗಿದೆ.', confirmations: 14, x: 66.5, y: 49.5, thumb: 'thumb-rain' },
  { id: 'koramangala', location: 'Koramangala', spot: '80 Feet Road · 4th Block', severity: 'medium', age: '24 min ago', ageKn: '24 ನಿಮಿಷಗಳ ಹಿಂದೆ', description: 'Water collecting at the junction. Take care if walking across.', descriptionKn: 'ಜಂಕ್ಷನ್‌ನಲ್ಲಿ ನೀರು ನಿಂತಿದೆ. ರಸ್ತೆ ದಾಟುವಾಗ ಎಚ್ಚರಿಕೆ ವಹಿಸಿ.', confirmations: 8, x: 57.7, y: 64.8, thumb: 'thumb-underpass' },
  { id: 'hsr', location: 'HSR Layout', spot: '27th Main · near Agara', severity: 'high', age: '39 min ago', ageKn: '39 ನಿಮಿಷಗಳ ಹಿಂದೆ', description: 'Standing water beside the service road. Conditions may change.', descriptionKn: 'ಸರ್ವಿಸ್ ರಸ್ತೆಯ ಪಕ್ಕದಲ್ಲಿ ನೀರು ನಿಂತಿದೆ. ಪರಿಸ್ಥಿತಿ ಬದಲಾಗಬಹುದು.', confirmations: 11, x: 72.2, y: 70.5, thumb: 'thumb-road' },
  { id: 'jayanagar', location: 'Jayanagar', spot: '9th Block · 39th Cross', severity: 'cleared', age: '1 hr ago', ageKn: '1 ಗಂಟೆ ಹಿಂದೆ', description: 'A neighbor marked this spot as cleared. Use your own judgment.', descriptionKn: 'ನೆರೆಹೊರೆಯವರು ಈ ಸ್ಥಳದಲ್ಲಿ ನೀರು ತೆರವಾಗಿದೆ ಎಂದು ಗುರುತಿಸಿದ್ದಾರೆ. ವಿವೇಚನೆಯಿಂದ ನಿರ್ಧರಿಸಿ.', confirmations: 5, x: 38.4, y: 68.6, thumb: 'thumb-clear' },
];

const state = { language: 'en', filter: 'all', selected: null, zoom: 1, panX: 0, panY: 0, severity: 'medium', photoUrl: null, hasPhoto: false, samplePhoto: false, reportStep: 1, busy: false, votes: {}, user: null, authPhone: '', authOtpSent: false };
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const t = (key) => copy[state.language][key] || copy.en[key] || key;
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

function setLanguage(language) {
  state.language = language;
  document.documentElement.lang = language;
  $$('[data-i18n]').forEach((element) => { element.innerHTML = t(element.dataset.i18n); });
  $('#routeFrom').placeholder = language === 'kn' ? 'ಇಂದ (ಉದಾ. ಇಂದಿರಾನಗರ)' : 'From (e.g. Indiranagar)';
  $('#routeTo').placeholder = language === 'kn' ? 'ಗೆ (ಉದಾ. ಕೋರಮಂಗಲ)' : 'To (e.g. Koramangala)';
  $('#routeFrom').setAttribute('aria-label', t('fromLabel'));
  $('#routeTo').setAttribute('aria-label', t('toLabel'));
  $('#languageToggle').setAttribute('aria-label', language === 'en' ? 'Switch language to Kannada' : 'ಭಾಷೆಯನ್ನು ಇಂಗ್ಲಿಷ್‌ಗೆ ಬದಲಿಸಿ');
  $('.lang-en').classList.toggle('active', language === 'en');
  $('.lang-kn').classList.toggle('active', language === 'kn');
  if ($('.sample-photo-link')) $('.sample-photo-link').textContent = t('samplePhotoButton');
  renderReports();
  renderPins();
  if (state.selected) showSelected(state.selected.id);
  renderReportStep();
  const vp = $('#mapViewport');
  if (vp) vp.setAttribute('title', t('mapPanHint'));
  if (typeof renderAuthButton === 'function') renderAuthButton();
}

function severityLabel(severity) {
  const keys = { high: 'reportStatusHigh', medium: 'reportStatusModerate', low: 'reportStatusLow', cleared: 'reportStatusCleared' };
  return t(keys[severity] || keys.medium);
}

function renderReports() {
  const visible = reports.filter((report) => state.filter === 'all' || report.severity === state.filter);
  const list = $('#reportList');
  $('#reportCount').textContent = String(visible.length).padStart(2, '0');
  $('#emptyState').hidden = visible.length > 0;
  $('#viewAllButton').hidden = state.filter === 'all';
  list.innerHTML = visible.map((report) => {
    const displaySeverity = report.severity === 'cleared' ? 'cleared' : report.severity;
    return `<button type="button" class="report-card ${state.selected?.id === report.id ? 'selected' : ''}" data-report-id="${report.id}" data-severity="${report.severity}" aria-label="${escapeHtml(report.location)} · ${escapeHtml(severityLabel(report.severity))} · ${escapeHtml(state.language === 'kn' ? report.ageKn : report.age)}">
      <span class="report-thumb ${report.thumb}" aria-hidden="true"></span><span class="report-card-info"><strong class="report-location">${escapeHtml(report.location)}</strong><span class="report-spot">${escapeHtml(report.spot)}</span><span class="report-meta"><i class="severity-dot severity-${displaySeverity}"></i><strong class="severity-label-text">${escapeHtml(severityLabel(report.severity))}</strong><span>·</span><span>${escapeHtml(state.language === 'kn' ? report.ageKn : report.age)}</span></span></span>
      <svg class="report-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></button>`;
  }).join('');
  $$('.report-card').forEach((card) => card.addEventListener('click', () => showSelected(card.dataset.reportId)));
}

function renderPins() {
  const container = $('#mapPins');
  container.replaceChildren();
  reports.forEach((report) => {
    const pin = document.createElement('button');
    pin.type = 'button';
    pin.className = `map-pin severity-${report.severity}${state.selected?.id === report.id ? ' selected' : ''}${state.filter !== 'all' && state.filter !== report.severity ? ' is-muted' : ''}`;
    pin.style.left = `${report.x}%`;
    pin.style.top = `${report.y}%`;
    pin.dataset.reportId = report.id;
    pin.setAttribute('aria-label', `${report.location}: ${severityLabel(report.severity)}; ${state.language === 'kn' ? report.ageKn : report.age}. ${state.language === 'kn' ? 'ವಿವರಗಳನ್ನು ನೋಡಲು ಆಯ್ಕೆಮಾಡಿ' : 'Select for details.'}`);
    pin.innerHTML = `<span class="pin-body"><span class="pin-count">${report.confirmations + (state.votes[report.id] || 0)}</span></span><span class="pin-caption">${escapeHtml(report.location)}</span>`;
    pin.addEventListener('click', () => showSelected(report.id));
    container.append(pin);
  });
}

function showSelected(id) {
  const report = reports.find((item) => item.id === id);
  if (!report) return;
  state.selected = report;
  const card = $('#mapSelectedCard');
  card.hidden = false;
  const description = state.language === 'kn' ? report.descriptionKn : report.description;
  const age = state.language === 'kn' ? report.ageKn : report.age;
  card.innerHTML = `<div class="selected-card-top"><span class="selected-card-label"><i class="severity-dot severity-${report.severity}"></i>${escapeHtml(severityLabel(report.severity))} · ${escapeHtml(age)}</span><button type="button" class="selected-close" aria-label="${state.language === 'kn' ? 'ಮುಚ್ಚಿ' : 'Close report details'}">×</button></div><h3 class="selected-card-title">${escapeHtml(report.location)}</h3><p class="selected-card-subtitle">${escapeHtml(report.spot)}</p><div class="selected-photo" role="img" aria-label="${escapeHtml(t('photoBadge'))}"></div><p class="selected-description">${escapeHtml(description)}</p><div class="selected-actions"><button type="button" data-vote="still">${escapeHtml(t('confirmed'))}</button><button type="button" data-vote="cleared">${escapeHtml(t('clearedVote'))}</button></div>`;
  $('.selected-close', card).addEventListener('click', () => { card.hidden = true; state.selected = null; renderReports(); renderPins(); });
  $$('[data-vote]', card).forEach((button) => button.addEventListener('click', () => {
    state.votes[report.id] = (state.votes[report.id] || 0) + 1;
    renderPins();
    renderReports();
    showToast(t('voteNotice'));
  }));
  renderReports();
  renderPins();
}

function setFilter(filter) {
  state.filter = filter;
  $$('.filter-chip').forEach((chip) => chip.classList.toggle('active', chip.dataset.filter === filter));
  renderReports();
  renderPins();
}

function setPanel(name) {
  const isRoute = name === 'route';
  $('#reportsPanel').hidden = isRoute;
  $('#routePanel').hidden = !isRoute;
  $$('.panel-tab').forEach((tab) => {
    const active = tab.dataset.panel === name;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });
}

function routeResult(from, to) {
  const normalized = `${from} ${to}`.toLowerCase();
  const warning = /bellandur|sarjapur|koramangala|hsr|outer ring|agara/.test(normalized);
  const none = /jayanagar|mg road|malleshwaram|yelahanka|indiranagar/.test(normalized);
  const group = $('#routeLineGroup');
  group.style.display = 'block';
  let tone, title, text, detail;
  if (warning) {
    tone = 'warning'; title = t('routeAlertTitle'); text = t('routeAlertText');
    const match = reports.find((report) => normalized.includes(report.location.toLowerCase()) || (report.id === 'bellandur' && /sarjapur|outer ring/.test(normalized)));
    detail = match ? `${t('sampleNearby')}: ${match.location} · ${match.spot} · ${state.language === 'kn' ? match.ageKn : match.age}` : `${t('sampleNearby')}: Bellandur · Outer Ring Road · 11 min ago`;
  } else if (none) {
    tone = 'clear'; title = t('routeClearTitle'); text = t('routeClearText'); detail = `${escapeHtml(from)} → ${escapeHtml(to)}`;
  } else {
    tone = 'unknown'; title = t('routeUnknownTitle'); text = t('routeUnknownText'); detail = `${escapeHtml(from)} → ${escapeHtml(to)}`;
  }
  const result = $('#routeResult');
  result.className = `route-result tone-${tone}`;
  result.innerHTML = `<span class="result-chip">${escapeHtml(t('routeSample'))}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p><div class="route-details">${detail}</div>`;
  result.hidden = false;
}

function setRouteLoading(loading) {
  const button = $('#routeSubmit');
  button.disabled = loading;
  button.querySelector('span').textContent = loading ? t('routeLoading') : t('checkRouteButton');
  button.classList.toggle('is-loading', loading);
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('visible');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('visible'), 2700);
}

// --- Log in / log out (simulated phone OTP, on-device) ---------------------
// The full product verifies a phone number via OTP before reporting. This
// prototype simulates that entirely on the device: a phone number -> a 6-digit
// code (any code works) -> a signed-in session remembered in localStorage.
// No network, no real SMS — consistent with the rest of this demo.
const AUTH_KEY = 'floodwatch_user';

function maskPhone(phone) {
  const digits = String(phone || '').replace(/\D/g, '');
  if (digits.length < 4) return phone || '';
  return '+91 ••••• ' + digits.slice(-4);
}

function loadUser() {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    state.user = raw ? JSON.parse(raw) : null;
  } catch (_) {
    state.user = null;
  }
}

function saveUser(user) {
  try {
    if (user) localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    else localStorage.removeItem(AUTH_KEY);
  } catch (_) { /* storage may be unavailable; ignore */ }
}

function renderAuthButton() {
  const btn = $('#authButton');
  const label = $('#authButtonLabel');
  const menuName = $('#authMenuName');
  const menuPhone = $('#authMenuPhone');
  if (!btn || !label) return;
  if (state.user) {
    btn.classList.add('logged-in');
    label.textContent = maskPhone(state.user.phone);
    btn.setAttribute('aria-expanded', String(!$('#authMenu').hidden));
    if (menuName) menuName.textContent = t('authResident');
    if (menuPhone) menuPhone.textContent = maskPhone(state.user.phone);
  } else {
    btn.classList.remove('logged-in');
    label.textContent = t('authLogin');
    btn.setAttribute('aria-expanded', 'false');
    if (menuPhone) menuPhone.textContent = '';
  }
}

function toggleAuthMenu(force) {
  const menu = $('#authMenu');
  const btn = $('#authButton');
  if (!menu || !btn) return;
  const shouldOpen = typeof force === 'boolean' ? force : menu.hidden;
  menu.hidden = !shouldOpen;
  btn.setAttribute('aria-expanded', String(shouldOpen));
}

function setAuthPane(which) {
  $('#authPanePhone').hidden = which !== 'phone';
  $('#authPaneOtp').hidden = which !== 'otp';
  $('#authPhoneError').hidden = true;
  $('#authOtpError').hidden = true;
}

function openAuthDialog() {
  const dialog = $('#authDialog');
  if (!dialog) return;
  // Reset to the phone step each time.
  state.authPhone = '';
  state.authOtpSent = false;
  $('#authPhone').value = '';
  $('#authOtp').value = '';
  setAuthPane('phone');
  if (!dialog.open) dialog.showModal();
}

function isValidIndianMobile(digits) {
  return /^[6-9]\d{9}$/.test(digits);
}

function handleSendCode() {
  const digits = $('#authPhone').value.replace(/\D/g, '');
  const err = $('#authPhoneError');
  if (!isValidIndianMobile(digits)) {
    err.textContent = t('authInvalidPhone');
    err.hidden = false;
    $('#authPhone').focus();
    return;
  }
  err.hidden = true;
  state.authPhone = digits;
  state.authOtpSent = true;
  setAuthPane('otp');
  window.setTimeout(() => $('#authOtp').focus(), 50);
  showToast(t('authDemoNote'));
}

function handleVerify() {
  const code = $('#authOtp').value.replace(/\D/g, '');
  const err = $('#authOtpError');
  if (code.length !== 6) {
    err.textContent = t('authInvalidOtp');
    err.hidden = false;
    $('#authOtp').focus();
    return;
  }
  err.hidden = true;
  // Any 6-digit code is accepted in this demo.
  state.user = { phone: state.authPhone, since: Date.now() };
  saveUser(state.user);
  const dialog = $('#authDialog');
  if (dialog && dialog.open) dialog.close();
  renderAuthButton();
  showToast(t('authLoginSuccess'));
}

function handleLogout() {
  state.user = null;
  saveUser(null);
  toggleAuthMenu(false);
  renderAuthButton();
  showToast(t('authLogoutSuccess'));
}

function setupAuth() {
  loadUser();
  renderAuthButton();

  const btn = $('#authButton');
  const menu = $('#authMenu');

  btn.addEventListener('click', (event) => {
    event.stopPropagation();
    if (state.user) toggleAuthMenu();
    else openAuthDialog();
  });

  // Close the menu when clicking outside it.
  document.addEventListener('click', (event) => {
    if (menu.hidden) return;
    if (event.target.closest('#authCluster')) return;
    toggleAuthMenu(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !menu.hidden) toggleAuthMenu(false);
  });

  $('#authLogout').addEventListener('click', handleLogout);
  $('#authSendCode').addEventListener('click', handleSendCode);
  $('#authVerify').addEventListener('click', handleVerify);
  $('#authChangeNumber').addEventListener('click', () => setAuthPane('phone'));

  // Enter key submits the current pane.
  $('#authPhone').addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); handleSendCode(); } });
  $('#authOtp').addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); handleVerify(); } });

  // Reset the phone pane when the dialog closes.
  $('#authDialog').addEventListener('close', () => setAuthPane('phone'));
}

function setReportStep(step) {
  state.reportStep = step;
  $('#reportStepOne').hidden = step !== 1;
  $('#reportStepTwo').hidden = step !== 2;
  $('#reportStepThree').hidden = step !== 3;
  $('#stepLabel').textContent = step === 1 ? (state.language === 'kn' ? 'ಮಾದರಿ ವರದಿ' : 'SAMPLE REPORT') : step === 2 ? (state.language === 'kn' ? 'ಪೂರ್ವವೀಕ್ಷಣೆ' : 'REVIEW ONLY') : (state.language === 'kn' ? 'ಡೆಮೊ ಪೂರ್ಣ' : 'DEMO COMPLETE');
  [1, 2, 3].forEach((n) => {
    const dot = $(`#stepDot${n === 1 ? 'One' : n === 2 ? 'Two' : 'Three'}`);
    dot.classList.toggle('active', step === n);
    dot.classList.toggle('complete', step > n);
  });
  if (step > 1) renderReportStep();
}

function renderReportStep() {
  const review = $('#reportStepTwo');
  const success = $('#reportStepThree');
  if (state.reportStep === 2) {
    const location = escapeHtml($('#reportLocation').value.trim());
    const description = escapeHtml($('#reportDescription').value.trim());
    const photo = state.photoUrl && !state.samplePhoto ? `<img class="review-photo" src="${state.photoUrl}" alt="${state.language === 'kn' ? 'ಸ್ಥಳೀಯ ಮಾದರಿ ವರದಿ ಫೋಟೋ ಪೂರ್ವವೀಕ್ಷಣೆ' : 'Local sample flood-report photo preview'}">` : `<div class="review-no-photo">${escapeHtml(t('photoBadge'))} · ${escapeHtml(t('notToScale'))}</div>`;
    review.innerHTML = `<span class="dialog-eyebrow">${escapeHtml(t('reportPreview'))}</span><h2>${escapeHtml(t('reportFlowTitle'))}</h2><p class="dialog-description">${escapeHtml(t('reviewOnly'))}</p><div class="review-card">${photo}<div class="review-content"><span class="review-label">${escapeHtml(t('reportStatus' + state.severity[0].toUpperCase() + state.severity.slice(1)))}</span><h3 class="review-place">${location}</h3><p class="review-desc">${description}</p><div class="review-meta"><span>⌖ ${escapeHtml(t('sampleTime'))}</span><span>·</span><span>${state.language === 'kn' ? 'ಈಗ' : 'Just now'}</span></div></div></div><p class="report-sample-notice">${escapeHtml(t('nothingSent'))}</p><div class="dialog-button-row"><button class="secondary-button" type="button" id="editReportButton">${escapeHtml(t('editReport'))}</button><button class="primary-button" type="button" id="finishDemoButton">${escapeHtml(t('finishDemo'))}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></button></div>`;
    $('#editReportButton').addEventListener('click', () => setReportStep(1));
    $('#finishDemoButton').addEventListener('click', () => setReportStep(3));
  }
  if (state.reportStep === 3) {
    success.innerHTML = `<div class="success-view"><span class="success-mark" aria-hidden="true">✓</span><span class="dialog-eyebrow">${escapeHtml(t('demoComplete'))}</span><h2>${escapeHtml(t('demoComplete'))}</h2><p>${escapeHtml(t('nothingSent'))}</p><div class="local-confirmation">${escapeHtml(t('urgentAgain'))}</div><div class="success-helplines"><a href="tel:112">☎ 112 · ${escapeHtml(t('emergency'))}</a><a href="tel:1533">☎ GBA · 1533</a></div><button type="button" class="primary-button success-done" id="closeReportDialog">${escapeHtml(t('closePreview'))}</button></div>`;
    $('#closeReportDialog').addEventListener('click', closeReportDialog);
  }
}

function closeReportDialog() {
  const dialog = $('#reportDialog');
  if (dialog.open) dialog.close();
  if (state.photoUrl) URL.revokeObjectURL(state.photoUrl);
  state.photoUrl = null;
  state.hasPhoto = false;
  state.samplePhoto = false;
  state.busy = false;
  $('#reportPhoto').value = '';
  $('#reportLocation').value = state.language === 'kn' ? 'ಇಂದಿರಾನಗರ, ಬೆಂಗಳೂರು' : 'Indiranagar, Bengaluru';
  $('#reportDescription').value = '';
  $('#reportError').hidden = true;
  $('#uploadTile').classList.remove('has-file');
  $('#photoStatus').textContent = t('photoHint');
  if ($('.sample-photo-link')) $('.sample-photo-link').textContent = t('samplePhotoButton');
  setReportStep(1);
}

// --- Interactive map: pan + zoom --------------------------------------------
// The whole map (base SVG, pins, route line) is one element (#streetMap), so a
// single transform moves everything together. We clamp panning so the map never
// drifts fully out of view, and keep zoom within a friendly range.
const MAP_MIN_ZOOM = 0.8;
const MAP_MAX_ZOOM = 2.6;

function mapViewport() {
  return $('#mapViewport');
}

function clampPan() {
  const vp = mapViewport();
  if (!vp) return;
  const rect = vp.getBoundingClientRect();
  // Max travel is half the overflow created by scaling about the centre.
  const maxX = ((state.zoom - 1) * rect.width) / 2;
  const maxY = ((state.zoom - 1) * rect.height) / 2;
  state.panX = Math.max(-maxX, Math.min(maxX, state.panX));
  state.panY = Math.max(-maxY, Math.min(maxY, state.panY));
}

function applyMapTransform() {
  const map = $('#streetMap');
  if (!map) return;
  clampPan();
  map.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`;
}

function zoomBy(delta) {
  state.zoom = Math.max(MAP_MIN_ZOOM, Math.min(MAP_MAX_ZOOM, state.zoom + delta));
  applyMapTransform();
  showToast(`${Math.round(state.zoom * 100)}%`);
}

function resetMapView() {
  state.zoom = 1;
  state.panX = 0;
  state.panY = 0;
  applyMapTransform();
}

function setupMapInteraction() {
  const vp = mapViewport();
  if (!vp) return;
  const map = $('#streetMap');

  let dragging = false;
  let startX = 0;
  let startY = 0;
  let originX = 0;
  let originY = 0;
  let moved = false;

  vp.addEventListener('pointerdown', (event) => {
    // Let pin clicks and controls work normally; only drag on the base map.
    if (event.target.closest('.map-pin') || event.target.closest('.map-tool-button') || event.target.closest('.map-selected-card')) return;
    dragging = true;
    moved = false;
    startX = event.clientX;
    startY = event.clientY;
    originX = state.panX;
    originY = state.panY;
    vp.classList.add('is-grabbing');
    map.style.transition = 'none';
  });

  vp.addEventListener('pointermove', (event) => {
    if (!dragging) return;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    if (!moved && Math.hypot(dx, dy) < 3) return; // ignore tiny jitters
    moved = true;
    state.panX = originX + dx;
    state.panY = originY + dy;
    applyMapTransform();
  });

  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    vp.classList.remove('is-grabbing');
    map.style.transition = '';
  };
  vp.addEventListener('pointerup', endDrag);
  vp.addEventListener('pointerleave', endDrag);
  vp.addEventListener('pointercancel', endDrag);

  // Wheel zoom (only when the pointer is over the map, and not scrolling page).
  vp.addEventListener('wheel', (event) => {
    if (event.ctrlKey) return; // let browser pinch-zoom through
    event.preventDefault();
    zoomBy(event.deltaY < 0 ? 0.12 : -0.12);
  }, { passive: false });

  // Double-click to zoom in; shift+double-click to zoom out.
  vp.addEventListener('dblclick', (event) => {
    if (event.target.closest('.map-pin') || event.target.closest('.map-selected-card')) return;
    zoomBy(event.shiftKey ? -0.5 : 0.5);
  });

  // Keep panning valid if the window is resized.
  window.addEventListener('resize', () => applyMapTransform());

  // Expose the hint the first time the map is used.
  vp.setAttribute('title', t('mapPanHint'));
}


function beginReport() {
  const dialog = $('#reportDialog');
  if (dialog.open) return;
  state.busy = false;
  setReportStep(1);
  initSamplePhotoShortcut();
  dialog.showModal();
}

function initSamplePhotoShortcut() {
  if ($('.sample-photo-link')) return;
  const shortcut = document.createElement('button');
  shortcut.type = 'button';
  shortcut.className = 'sample-photo-link';
  shortcut.textContent = t('samplePhotoButton');
  shortcut.addEventListener('click', () => {
    state.samplePhoto = true;
    state.hasPhoto = true;
    state.photoUrl = null;
    $('#uploadTile').classList.add('has-file');
    $('#photoStatus').textContent = t('selectedPhoto');
    showToast(t('reviewOnly'));
  });
  $('#uploadTile').after(shortcut);
}

function init() {
  renderReports();
  renderPins();
  initSamplePhotoShortcut();

  $('#languageToggle').addEventListener('click', () => setLanguage(state.language === 'en' ? 'kn' : 'en'));
  $$('.panel-tab').forEach((tab) => tab.addEventListener('click', () => setPanel(tab.dataset.panel)));
  $$('.severity-choice').forEach((button) => button.addEventListener('click', () => {
    state.severity = button.dataset.severity;
    $$('.severity-choice').forEach((choice) => choice.classList.toggle('active', choice === button));
  }));
  $('#filterButton').addEventListener('click', () => {
    const chips = $('#filterChips');
    const expanded = $('#filterButton').getAttribute('aria-pressed') !== 'true';
    $('#filterButton').setAttribute('aria-pressed', String(expanded));
    chips.hidden = !expanded;
  });
  $$('.filter-chip').forEach((chip) => chip.addEventListener('click', () => setFilter(chip.dataset.filter)));
  $('#viewAllButton').addEventListener('click', () => setFilter('all'));
  $$('[data-action="report"]').forEach((button) => button.addEventListener('click', beginReport));
  $$('[data-route-from]').forEach((button) => button.addEventListener('click', () => {
    $('#routeFrom').value = button.dataset.routeFrom;
    $('#routeTo').value = button.dataset.routeTo;
    $('#routeError').hidden = true;
    $('#routeResult').hidden = true;
    $('#routeLineGroup').style.display = 'none';
  }));
  $('#routeForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const from = $('#routeFrom').value.trim();
    const to = $('#routeTo').value.trim();
    const error = $('#routeError');
    if (!from || !to) {
      error.textContent = t('routeMissing');
      error.hidden = false;
      $('#routeResult').hidden = true;
      return;
    }
    error.hidden = true;
    $('#routeResult').hidden = true;
    setRouteLoading(true);
    window.setTimeout(() => {
      setRouteLoading(false);
      routeResult(from, to);
    }, 650);
  });

  $('#reportPhoto').addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      $('#reportError').textContent = t('photoRequired');
      $('#reportError').hidden = false;
      return;
    }
    if (state.photoUrl) URL.revokeObjectURL(state.photoUrl);
    state.photoUrl = URL.createObjectURL(file);
    state.hasPhoto = true;
    state.samplePhoto = false;
    $('#uploadTile').classList.add('has-file');
    $('#photoStatus').textContent = t('selectedPhoto');
    $('#reportError').hidden = true;
    $('.sample-photo-link').textContent = t('samplePhotoButton');
  });
  $('#previewReportButton').addEventListener('click', () => {
    const location = $('#reportLocation').value.trim();
    const error = $('#reportError');
    // Location and photo are mandatory; the description note is optional.
    if (!location) {
      error.textContent = t('locationRequired');
      error.hidden = false;
      $('#reportLocation').focus();
      $('#reportLocation').closest('.location-input')?.classList.add('is-invalid');
      return;
    }
    $('#reportLocation').closest('.location-input')?.classList.remove('is-invalid');
    if (!state.hasPhoto) {
      error.textContent = t('photoRequired');
      error.hidden = false;
      $('#uploadTile').classList.add('shake');
      window.setTimeout(() => $('#uploadTile').classList.remove('shake'), 600);
      return;
    }
    error.hidden = true;
    setReportStep(2);
  });
  $('#reportDialog').addEventListener('close', () => {
    closeReportDialog();
  });
  $('#reportDialog').addEventListener('click', (event) => {
    const rect = $('#reportDialog').getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeReportDialog();
  });
  document.addEventListener('click', (event) => {
    if (event.target.closest('a[href^="tel:"]')) showToast(t('phoneNotice'));
  });

  $('#zoomIn').addEventListener('click', () => zoomBy(0.25));
  $('#zoomOut').addEventListener('click', () => zoomBy(-0.25));
  $('#myLocation').addEventListener('click', () => {
    resetMapView();
    showToast(t('mapCentered'));
  });

  setupMapInteraction();
  setupAuth();
}

init();
