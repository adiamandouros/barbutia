fetch('https://yioka.eu/api/mparmpoutia.php?method=leagues&id=25')
.then(response => response.json())
.then(response => JSON.parse(response))
.then(data => {
    console.log(data);
    let i=1;

    data.forEach(team => {
        // console.log(team);
        // const row = document.createElement('div');
        // row.classList.add('main-element', 'bg-dark', 'my-1', 'py-2', 'row', 'navbar-expand-lg', 'align-items-center', 'flex-nowrap');
        // row.innerHTML='<div class="col-1">' + i + '</div>' +
        //                 '<div class="col-1 collapse navbar-collapse justify-content-end flex-grow-0 flex-shrink-1"><img src="https://storage.googleapis.com/' + team.imageUrl.replaceAll('"','') + '" alt="team logo" class="smallLogo"></div>' +
        //                 '<div class="col fw-bold">' + team.name + '</div>' +
        //                 '<div class="col">' + team.standing + '</div>' +
        //                 '<div class="col">' + team.gp + '</div>' +
        //                 '<div class="col">' + team.won + '</div>' +
        //                 '<div class="col">' + team.lost + '</div>' +
        //                 '<div class="col">' + team.pointsPlus + '</div>' +
        //                 '<div class="col">' + team.pointsMinus + '</div>';
        // i++;

        // document.querySelector('tbody').appendChild(row);
        const row = document.createElement('tr');
        // row.classList.add('navbar-expand-lg');
        const th = document.createElement('th');
        th.setAttribute('scope', 'row');
        th.textContent=i;
        const tdLogo = document.createElement('td');
        // tdLogo.classList.add('collapse', 'navbar-collapse');
        tdLogo.innerHTML='<img src="https://storage.googleapis.com/' + team.imageUrl.replaceAll('"','') + '" alt="team logo" class="smallLogo">';
        const tdName = document.createElement('td');
        tdName.classList.add('fw-bold');
        tdName.style = "text-align: left;";
        tdName.textContent = team.name;
        const tdStanding = document.createElement('td');
        tdStanding.textContent = team.standing;
        const tdDifference = document.createElement('td');
        tdDifference.textContent = team.pointsDiff;
        const tdGP = document.createElement('td');
        tdGP.textContent = team.gp;
        const tdGw = document.createElement('td');
        tdGw.textContent = team.won;
        const tdGl = document.createElement('td');
        tdGl.textContent = team.lost;
        const tdPp = document.createElement('td');
        tdPp.textContent = team.pointsPlus;
        const tdPm = document.createElement('td');
        tdPm.textContent = team.pointsMinus;

        
        row.appendChild(th);
        row.appendChild(tdLogo);
        row.appendChild(tdName);
        row.appendChild(tdStanding);
        row.appendChild(tdDifference);
        row.appendChild(tdGP);
        row.appendChild(tdGw);
        row.appendChild(tdGl);
        row.appendChild(tdPp);
        row.appendChild(tdPm);

        document.querySelector('tbody').appendChild(row);
        i++;
    })
});
