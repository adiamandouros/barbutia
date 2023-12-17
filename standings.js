fetch('https://yioka.eu/api/mparmpoutia.php?method=leagues&id=25')
.then(response => response.json())
.then(response => JSON.parse(response))
.then(data => {
    console.log(data);
    let i=1;

    data.forEach(team => {
        const row = document.createElement('div');
        row.classList.add('main-element', 'bg-dark', 'my-1', 'py-2', 'row', 'navbar-expand-lg', 'align-items-center');
        row.innerHTML='<div class="col-1">' + i + '</div>' +
                        '<div class="col-1 collapse navbar-collapse justify-content-end flex-grow-0 flex-shrink-1"><img src="https://storage.googleapis.com/' + team.imageUrl.replaceAll('"','') + '" alt="team logo" class="smallLogo"></div>' +
                        '<div class="col fw-bold">' + team.name + '</div>' +
                        '<div class="col">' + team.standing + '</div>' +
                        '<div class="col">' + team.gp + '</div>' +
                        '<div class="col">' + team.won + '</div>' +
                        '<div class="col">' + team.lost + '</div>' +
                        '<div class="col">' + team.pointsPlus + '</div>' +
                        '<div class="col">' + team.pointsMinus + '</div>';
        i++;

        document.querySelector('.main-card').appendChild(row);

    })
});
