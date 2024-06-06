const search = new URL(window.location).searchParams.get('search');

    // console.log(nextgame);
document.getElementById("team1").textContent='Μπαρ-Μπούτια';
document.getElementById("team2").textContent='Blue Oysters';
let nextGameDate = new Date('4/10/2023');
document.getElementById("nextGameDate").textContent=new Intl.DateTimeFormat('el-GR', {weekday:'long',day:'numeric',month:'numeric', hour:'numeric', minute:'numeric', hour12:false}).format(nextGameDate);
document.getElementById("nextGamePlace").textContent='Κλειστό Γήπεδο Μιαούλη';
document.getElementById("nextGamePlace").setAttribute('href', 'https://www.google.com/maps/search/?api=1&query=37.9537256%2C23.6874198');
document.getElementById("team1Logo").setAttribute('src', 'https://storage.googleapis.com/'+nextgame.team1.logo);
document.getElementById("team2Logo").setAttribute('src', 'https://storage.googleapis.com/'+nextgame.team2.logo);
// 'https://www.google.com/maps/place/37.958229,23.669898'
// 'https://www.google.com/maps/search/?api=1&query=47.5951518%2C-122.3316393'

search ? searchAndHide(document.querySelectorAll('.main-element'), search) : null