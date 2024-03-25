const GEOGRAPHY_LIST = [
    {
        country: 'United States',
        capital: 'Washington',
        largestCity: 'New York',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'Louisiana',
                capital: 'Baton Rouge',
                largestCity: 'New Orleans',
                area: 134264,
            },
            {
                name: 'California',
                capital: 'Sacramento',
                largestCity: 'Los Angeles',
                area: 423970,
            },
            {
                name: 'Nevada',
                capital: 'Carson City',
                largestCity: 'Las Vegas',
                area: 286382,
            },
        ],
    },
    {
        country: 'Guatemala',
        capital: 'Guatemala City',
        largestCity: 'Guatemala City',
        subdivisionName: 'department',
        subdivisions: [
            {
                name: 'Huehuetenango',
                capital: 'Huehuetenango',
                largestCity: 'Huehuetenango',
                area: 7403,
            },
            {
                name: 'Izabal',
                capital: 'Puerto Barrios',
                largestCity: 'Puerto Barrios',
                area: 9038,
            },
            {
                name: 'El Progreso',
                capital: 'Guastatoya',
                largestCity: 'Guastatoya',
                area: 1922,
            },
        ],
    },
    {
        country: 'Taiwan',
        capital: 'Taipei',
        largestCity: 'Taipei City',
        subdivisionName: 'department',
        subdivisions: [
            {
                name: 'abcde',
                capital: 'edcba',
                largestCity: 'asdf',
                area: 6000,
            },
            {
                name: 'abcdf',
                capital: 'dfgfgfg',
                largestCity: 'sdfdfdf',
                area: 9038,
            },
            {
                name: 'asdf',
                capital: 'fgddsa',
                largestCity: 'qwer',
                area: 1922,
            },
        ],
    },
    {
        country: 'Japan',
        capital: 'Tokyo',
        largestCity: 'Tokyo City',
        subdivisionName: 'department',
        subdivisions: [
            {
                name: 'abcde',
                capital: 'edcba',
                largestCity: 'asdf',
                area: 6000,
            },
            {
                name: 'abcdf',
                capital: 'dfgfgfg',
                largestCity: 'sdfdfdf',
                area: 9038,
            },
            {
                name: 'asdf',
                capital: 'fgddsa',
                largestCity: 'qwer',
                area: 1922,
            },
        ],
    },
]

document.addEventListener('DOMContentLoaded', () => {
    const mainElement = document.querySelector('main');
    GEOGRAPHY_LIST.forEach(country => {
        const section = document.createElement('section');
        const header = document.createElement('h2');
        header.textContent = `${country.country}: ${country.capital}, ${country.largestCity}`;
        section.appendChild(header);

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const headerRow = `<tr><th>${country.subdivisionName}</th><th>Capital</th><th>Largest City</th><th>Area</th></tr>`;
        thead.innerHTML = headerRow;
        table.appendChild(thead);

        country.subdivisions.forEach(sub => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${sub.name}</td><td>${sub.capital}</td><td>${sub.largestCity}</td><td>${sub.area}</td>`;
            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        section.appendChild(table);
        mainElement.appendChild(section);
    });
});