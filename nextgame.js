fetch('https://yioka.eu/api/mparmpoutia.php?method=matches&id=617')
.then(response => response.json())
.then(data => 
    {
        let nextgame;
        // console.log(data);
        for(let i=0;i<data.length;i++){
            if(data[i].pending == true){
                nextgame = data[i];
                break;
            }
        }
        console.log(nextgame);
        document.getElementById("team1").textContent=nextgame.team1.name;
        document.getElementById("team2").textContent=nextgame.team2.name;
        let nextGameDate = new Date(nextgame.matchDatetime);
        document.getElementById("nextGameDate").textContent=new Intl.DateTimeFormat('el-GR', {weekday:'long',day:'numeric',month:'numeric', hour:'numeric', minute:'numeric', hour12:false}).format(nextGameDate);
        document.getElementById("nextGamePlace").textContent=nextgame.arena.name;
        document.getElementById("nextGamePlace").setAttribute('href', 'https://www.google.com/maps/search/?api=1&query=' + nextgame.arena.coordinates.replace(',','%2C'));
        document.getElementById("team1Logo").setAttribute('src', 'https://storage.googleapis.com/'+nextgame.team1.logo);
        document.getElementById("team2Logo").setAttribute('src', 'https://storage.googleapis.com/'+nextgame.team2.logo);
        // 'https://www.google.com/maps/place/37.958229,23.669898'
        // 'https://www.google.com/maps/search/?api=1&query=47.5951518%2C-122.3316393'
    }
    );