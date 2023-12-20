const nicknames = {
    '00': 'Ντούνκερ',
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
    '15': 'Βέλος',
    '20': 'Zlatan Kakaric',
    '24': 'Μαύρη Δεντρογαλιά',
    '25': 'Lorbek',
    '42': 'Κόουτς Πλάτ',
    '44': 'Γκάμπε'
}

const matches={};
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
                const playerID = player.id;
                let jersey;
                player.jersey==0 ? jersey='00' : jersey=player.jersey;
                
                const card = document.createElement('div');
                card.classList.add('card', 'm-1', 'p-0', 'accordion-item', 'accordion-header');
                card.setAttribute('style', 'max-width: 35em;');
                card.setAttribute('id', playerID);
                card.innerHTML='<button class="row g-0 accordion-button collapsed p-0 focus-ring" type="button" data-bs-toggle="collapse" data-bs-target="#collapse' + jersey + '" aria-expanded="false" aria-controls="collapse' + jersey + '">' +
                                    '<div class="col-3">' +
                                        '<div class="imageWrapper position-relative">' + 
                                            '<img class="top-0 start-0 img-fluid rounded" src="content/imgs/players/resizedTrue/' + jersey + '.png" alt="' + jersey + '">' +
                                            '<img class="hide position-absolute top-0 start-0 img-fluid rounded" src="content/imgs/players/resized/' + jersey + '.jpg" alt="' + jersey + '">' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="col">' +
                                        '<div class="card-body pe-0">' +
                                            '<h5 class="card-title">' + jersey + '. ' + player.surname.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase() + ' ' + '</h5>' +
                                        '   <h6 class="card-subtitle mb-2 text-muted">' + nicknames[jersey] + '</h6>' +
                                        '</div>' +
                                    '</div>' +
                                '</button>';
                
                let points=0, assists=0, rebounds=0, steals=0, blocks=0, to=0, twoSuccess=0, twoTotal=0, threeSuccess=0, threeTotal=0, freeSuccess=0, freeTotal=0, totalMatches;
                totalMatches = player.stats.length;
                player.stats.forEach(match => {
                    // console.log(match.matchId);
                    if(!(match.matchId in matches)){
                        const newMatch = {
                            matchDate: match.matchDatetime,
                            opponent: match.opponentTeamName
                        }
                        matches[match.matchId] = newMatch;
                        // console.log(JSON.stringify(matches));
                    }
                    points+=match.points;
                    assists+=match.assists;
                    rebounds+=match.rebounds;
                    steals+=match.steals;
                    blocks+=match.blockedShots;
                    to+=match.turnovers;
                    twoSuccess+=match.twoPointsMade;
                    twoTotal+=match.twoPointAttempts;
                    threeSuccess+=match.threePointsMade;
                    threeTotal+=match.threePointAttempts;
                    freeSuccess+=match.freeThrowsMade;
                    freeTotal+=match.freeThrowAttempts;
                });
                let twoPerc, threePerc, ftPerc;
                twoTotal==0 ? twoPerc='-' : twoPerc = (twoSuccess/twoTotal*100).toFixed(1);
                threeTotal==0 ? threePerc='-' : threePerc = (threeSuccess/threeTotal*100).toFixed(1);
                freeTotal==0 ? ftPerc='-' : ftPerc = (freeSuccess/freeTotal*100).toFixed(1);
                let pointsMO=0, assistsMO=0, reboundsMO=0, stealsMO=0, blocksMO=0, toMO=0;
                if (totalMatches!=0){
                    pointsMO = (points/totalMatches).toFixed(1);
                    assistsMO = (assists/totalMatches).toFixed(1);
                    reboundsMO = (rebounds/totalMatches).toFixed(1);
                    stealsMO = (steals/totalMatches).toFixed(1);
                    blocksMO = (blocks/totalMatches).toFixed(1);
                    toMO = (to/totalMatches).toFixed(1);
                }

                const stats = document.createElement('div');
                stats.setAttribute('id', 'collapse'+jersey);
                stats.setAttribute('aria-labelledby', playerID);
                stats.classList.add('accordion-collapse', 'collapse');
                stats.innerHTML='<div class="accordion-body p-2">' +
                                    '<div class="row p-2">' +
                                        '<div class="col row generalStats col-sm-5 col-md-5">' +
                                            '<span class="col p-0 m-0">Ύψος: ' + player.height + '</span>' +
                                            '<span class="col p-0 m-0">Θέση: ' + player.position + '</span>' + 
                                            '<div class="col p-0 m-0 hstack gap-1">' +
                                                '<span>2P: ' + twoPerc + '%</span>' +
                                                '<span class="ms-auto">3P: ' + threePerc + '%</span>' +
                                                '<span class="ms-auto">FT: ' + ftPerc + '%</span>' +
                                            '</div>' +
                                        '</div>'+
                                        '<div class="col">' +
                                            '<div class="table-responsive">' +
                                                '<table class="table table-sm table-hover table-dark align-middle mb-0">' +
                                                ' <thead class="table-dark">' +
                                                    '<tr>' +
                                                            '<th scope="col">Points</th>' +
                                                            '<th scope="col">Assists</th>' +
                                                            '<th scope="col">Reb.</th>' +
                                                            '<th scope="col">Steals</th>' +
                                                            '<th scope="col">Blocks</th>' +
                                                            '<th scope="col">TO</th>' +
                                                        '</tr>' +
                                                    '</thead>' +
                                                    '<tbody>' +
                                                    '<tr>' +
                                                        '<td>' + points + '</td>' +
                                                        '<td>' + assists + '</td>' +
                                                        '<td>' + rebounds + '</td>' +
                                                        '<td>' + steals + '</td>' +
                                                        '<td>' + blocks + '</td>' +
                                                        '<td>' + to + '</td>' +
                                                    '</tr>' +
                                                    '<tr>' +
                                                        '<td>' + pointsMO + '</td>' +
                                                        '<td>' + assistsMO + '</td>' +
                                                        '<td>' + reboundsMO + '</td>' +
                                                        '<td>' + stealsMO + '</td>' +
                                                        '<td>' + blocksMO + '</td>' +
                                                        '<td>' + toMO + '</td>' +
                                                    '</tr>' +
                                                    '</tbody>' +
                                                '</table>' +
                                            '</div>' +
                                        '</div>'+
                                    '</div>'+
                                '</div>';
                card.appendChild(stats);
                
                document.querySelector('.playerlist').appendChild(card);
            }
        }
    }
});