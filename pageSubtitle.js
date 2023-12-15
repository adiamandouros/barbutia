const subtitles = [
    'No more bets.',
    'Πάμε Τζένη;',
    'Χαχαχα, στο βραστό',
    'Διονύση, πιάσε μια μπύρα'
]

const subtitle = subtitles[Math.floor(Math.random()*subtitles.length)];
document.getElementById("pageSubtitle").textContent=subtitle;