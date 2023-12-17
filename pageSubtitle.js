const subtitles = [
    'No more bets.',
    'Πάμε Τζένη;',
    'Χαχαχα, στο βραστό',
    'Διονύση, πιάσε μια μπύρα',
    'Ρίξε μια ζαριά καλή',
    'Ωωωω, Μπαρμπουτάρες',
    'Φωτο το σκορ στη Μυρσίνη',
    'Όχι καμαρωτός, καμαρώτος',
    'Πιάσε ένα δίγκαλτσο',
    'Κόκκινες αμαζόνες',
    'και τάκα τούκα',
    'Pancakes στο Γαλάτσι'
]

const subtitle = subtitles[Math.floor(Math.random()*subtitles.length)];
document.getElementById("pageSubtitle").textContent=subtitle;