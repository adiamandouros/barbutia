fetch('https://yioka.eu/api/mparmpoutia.php?method=matches&id=617')
.then(response => response.json())
.then(data => {
    console.log(data);
    data.forEach(element => {
        let score1, score2;
        console.log(element);
        const match = document.createElement('div');
        match.classList.add('container-xxl', 'main-match', 'bg-dark', 'main-card', 'my-1', 'py-2');

        let description = document.createElement('p');
        let descrType = document.createElement('span');
        let descrPlace = document.createElement('span');
        let descrTime = document.createElement('span');
        description.classList.add('justify-content-around', 'row', 'matchDescription', 'align-items-center', 'p-0', 'm-0');
        descrType.classList.add('col');
        descrPlace.classList.add('col');
        descrTime.classList.add('col');

        element.cup? descrType.textContent = "Κύπελλο" : descrType.textContent = element.league.title;

        if(element.pending){
            score1 = '', score2 ='';
            descrTime.textContent = new Intl.DateTimeFormat('el-GR', {hour:'numeric', minute:'numeric', hour12:false, day:'numeric',month:'2-digit'}).format(new Date(element.matchDatetime));
            descrPlace.textContent = element.arena.name;
        }
        else if(element.postponed){
            score1 = '', score2 ='';
            descrTime.textContent = new Intl.DateTimeFormat('el-GR', {hour:'numeric', minute:'numeric', hour12:false, day:'numeric',month:'2-digit'}).format(new Date(element.matchDatetime));
            descrPlace.textContent = 'Αναβλήθηκε';
            descrPlace.classList.add('text-warning');
        }
        else{
            score1 = element.scoreTeam1;
            score2 = element.scoreTeam2;
            descrTime.textContent = new Intl.DateTimeFormat('el-GR', {day:'numeric',month:'2-digit'}).format(new Date(element.matchDatetime));
            descrPlace.textContent = '';
        }

        description.appendChild(descrType);
        description.appendChild(descrPlace);
        description.appendChild(descrTime);
        description.classList.add('fw-light');

        match.innerHTML='<span class="row justify-content-center align-items-center"><span class="col-md text-nowrap text-start text-md-end"><img src="https://storage.googleapis.com/' + element.team1.logo + '" alt="team1 logo" class="teamlogo">' +
                        '<span class="teamName fw-bold"> ' + element.team1.name + '</span></span>' +
                        '<span class="col-md text-nowrap">' + score1 + '-' + score2 + '</span>'  +
                        '<span class="col-md text-nowrap text-end text-md-start"><span class="teamName fw-bold">' + element.team2.name + ' </span>' +
                        '<img src="https://storage.googleapis.com/' + element.team2.logo + '" alt="team2 logo" class="teamlogo" id="team2Logo"></span></span>';
        match.appendChild(description);
        


        document.querySelector('.main').appendChild(match);
    });
});