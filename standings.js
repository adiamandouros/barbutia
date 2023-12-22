const search = new URL(window.location).searchParams.get('search');
fetch('https://yioka.eu/api/mparmpoutia.php?method=leagues&id=25')
.then(response => response.json())
.then(response => JSON.parse(response))
.then(data => {
    console.log(data);
    let i=1;

    data.sort((a,b) => {
        return b.standing - a.standing || b.pointsDiff-a.pointsDiff;
    });

    data.forEach(team => {
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
        tdGP.textContent = team.won+team.lost;
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
    search ? searchAndHide(document.querySelectorAll('tbody tr'), search) : null
});
