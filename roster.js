nicknames = {
    '0': 'Ντούνκερ',
    '3': 'Απαράμιλλο Στυλ',
    '4': 'Μπουλντόζα με προσποίηση',
    '7': 'Βελούδινο σφυρί',
    '8': 'Άλφα',
    '9': 'Kareem από τη Κόρινθο',
    '10': 'Σφηκοφωλιά',
    '11': 'Q',
    '12': 'Αιώνιος MVP',
    '13': 'Βελούδινο σφυρί με μούσι',
    '14': 'Milos Soucic',
    '15': 'Τόξο',
    '20': 'Zlatan Kakaric',
    '24': 'Μαύρη Δεντρογαλιά',
    '25': 'Lorbek',
    '42': 'Κόουτς Πλάτ',
    '44': 'Γκάμπε'
}

fetch('https://yioka.eu/api/mparmpoutia.php?method=teams&id=617')
.then(response => response.json())
.then(data => data.players)
.then(data => {
        
    console.log(data);
    for (const position of ['guard', 'forward', 'center']){
        for(let i=0; i<=99; i++){
            for (const [id,player] of Object.entries(data)){
                if(player.jersey!=i) continue;
                if(!player.active) continue;
                if(player.position != position) continue;
                // console.log(player);
                    
                
                const card = document.createElement('div');
                card.classList.add('card', 'm-1', 'p-0');
                card.setAttribute('style', 'max-width: 30em;');
                card.innerHTML='<div class="row g-0">' +
                                    '<div class="col-3">' +
                                        '<img src="content/imgs/players/resized/' + player.jersey + '.jpg" class="img-fluid rounded" alt="' + player.jersey + '">' +
                                    '</div>' +
                                    '<div class="col">' +
                                        '<div class="card-body">' +
                                            '<h5 class="card-title">' + player.jersey + '. ' + player.surname.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase() + ' ' + '</h5>' +
                                        '   <h6 class="card-subtitle mb-2 text-muted">' + nicknames[player.jersey] + '</h6>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>';
                document.querySelector('.playerlist').appendChild(card);
            }
        }
    }
});
