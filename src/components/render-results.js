import { renderResultsPerPage } from "./render-result-per-page.js";
import { ICON } from '../data/constant.js';
import { renderPhotoError } from "./render-photo-error.js";

/**
 * Document me!
 *
 * @returns
 */
export const renderResults = () => {
    const outputContainer = document.getElementById('output')
    let resultContainer = document.getElementById('result-container');
    if (!resultContainer) {
        resultContainer = document.createElement('div');
        resultContainer.id = 'result-container';
        outputContainer.appendChild(resultContainer);
    } else {
        resultContainer.innerHTML = '';
    }

    let currentResult = renderResultsPerPage()

    currentResult.forEach(character => {
        const container = document.createElement('div')
        container.classList.add('character-card')
        resultContainer.appendChild(container)

        //photo
        const imgEl = document.createElement('img')
        imgEl.classList.add('character-img')
        imgEl.onerror = () => renderPhotoError(imgEl)
        imgEl.src = character.imageUrl
        container.appendChild(imgEl)
        const infoContainer = document.createElement('div')
        infoContainer.classList.add('character-info')
        const ulEl = document.createElement('ul')

        let characterInfo = {
            'Name': character.name,
            'Films': character.films,
            'TV Shows': character.tvShows,
            'Video Games': character.videoGames,
            'Short Films': character.shortFilms,
            'Park Attractions': character.parkAttractions,
            'Allies': character.allies,
            'Enemies': character.enemies
        }

        for (const key in characterInfo) {
            if (key === 'Name') {
                const titleEl = document.createElement('h3')
                titleEl.innerText = `${characterInfo[key]}`
                infoContainer.appendChild(titleEl)
            } else if (characterInfo[key] && characterInfo[key].length !== 0) {
                const liEl = document.createElement('li')
                liEl.innerHTML = `<span>${ICON[key]} ${key}:</span> ${characterInfo[key].join(', ')}`
                ulEl.appendChild(liEl)
            }
        }
        infoContainer.appendChild(ulEl)
        container.appendChild(infoContainer)
    })

}




