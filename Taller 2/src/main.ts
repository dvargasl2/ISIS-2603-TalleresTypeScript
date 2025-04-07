import { series } from './data.js';

let seriesTable: HTMLElement = document.getElementById('seriesTable')!;

showSeries(series);

function showSeries(series: any[]): void {
    let seriesList: HTMLElement = document.createElement('tbody');
    let totalSeasons = 0;

    for(let serie of series) {
        let serieRow: HTMLElement = document.createElement('tr');
        serieRow.innerHTML = `
            <td class="series-id">${serie.getId()}</td>
            <td class="series-name">
                <a href="#" class="serie-link">${serie.getName()}</a>
            </td>
            <td>${serie.getChannel()}</td>
            <td>${serie.getSeasons()}</td>
        `;

        const linkElement = serieRow.querySelector('.serie-link') as HTMLAnchorElement;
        linkElement.addEventListener('click', (event) => {
            event.preventDefault();
            showInfoSerie(serie);
        });
        totalSeasons += serie.getSeasons();
        seriesList.appendChild(serieRow);
    }

    seriesTable.appendChild(seriesList); 
    const averageSeasons = Math.round(totalSeasons / series.length);
    let averageText: HTMLElement = document.createElement('p');
    averageText.className = 'mt-3 avg-text';
    averageText.textContent = `Average number of seasons: ${averageSeasons}`;
    seriesTable.parentElement!.appendChild(averageText);
}

function showInfoSerie(serie: any): void {
    let cardContainer: HTMLElement = document.getElementById('cardContainer')!;
    let serieImage: HTMLImageElement = document.getElementById('serieImage') as HTMLImageElement;
    let serieTitle: HTMLElement = document.getElementById('serieTitle')!;
    let serieDescription: HTMLElement = document.getElementById('serieDescription')!;
    let serieLink: HTMLAnchorElement = document.getElementById('serieLink') as HTMLAnchorElement;

    serieImage.src = serie.getImage();
    serieTitle.textContent = serie.getName();
    serieDescription.textContent = serie.getDescription();
    serieLink.href = serie.getLink();

    cardContainer.style.display = 'block';
}