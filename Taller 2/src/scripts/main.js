import { series } from './data.js';
var seriesTable = document.getElementById('seriesTable');
showSeries(series);
function showSeries(series) {
    var seriesList = document.createElement('tbody');
    var totalSeasons = 0;
    var _loop_1 = function (serie) {
        var serieRow = document.createElement('tr');
        serieRow.innerHTML = "\n            <td class=\"series-id\">".concat(serie.getId(), "</td>\n            <td class=\"series-name\">\n                <a href=\"#\" class=\"serie-link\">").concat(serie.getName(), "</a>\n            </td>\n            <td>").concat(serie.getChannel(), "</td>\n            <td>").concat(serie.getSeasons(), "</td>\n        ");
        var linkElement = serieRow.querySelector('.serie-link');
        linkElement.addEventListener('click', function (event) {
            event.preventDefault();
            showInfoSerie(serie);
        });
        totalSeasons += serie.getSeasons();
        seriesList.appendChild(serieRow);
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
    seriesTable.appendChild(seriesList);
    var averageSeasons = Math.round(totalSeasons / series.length);
    var averageText = document.createElement('p');
    averageText.className = 'mt-3 avg-text';
    averageText.textContent = "Average number of seasons: ".concat(averageSeasons);
    seriesTable.parentElement.appendChild(averageText);
}
function showInfoSerie(serie) {
    var cardContainer = document.getElementById('cardContainer');
    var serieImage = document.getElementById('serieImage');
    var serieTitle = document.getElementById('serieTitle');
    var serieDescription = document.getElementById('serieDescription');
    var serieLink = document.getElementById('serieLink');
    serieImage.src = serie.getImage();
    serieTitle.textContent = serie.getName();
    serieDescription.textContent = serie.getDescription();
    serieLink.href = serie.getLink();
    cardContainer.style.display = 'block';
}
