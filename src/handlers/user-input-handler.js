import { disneyService } from '../api-calls/disney-service.js';
import { filteredState, state } from '../data/state.js'
import { renderError } from '../components/render-error.js';
import { renderPagination } from '../components/render-pagination.js';
import { renderResults } from '../components/render-results.js';
import { renderSortSelector } from '../components/render-sort-selector.js'
import { renderFilter } from '../components/render-filter.js';


export const userInputHandler = async (event) => {
    const output = document.getElementById('output')
    output.innerHTML = ''
    const userInput = event.target.parentNode.children[0].value;

    if (userInput === '') {
        renderError('Input field empty!')
        return
    }

    try {
        const infoPromise = await disneyService(userInput);
        // console.log('user', userInput)
        // console.log('info:', infoPromise)

        if (infoPromise.length === 0) {
            renderError('No results found!');
            return;
        }

        state.length = 0;
        filteredState.length = 0;

        if (infoPromise.length > 1) {
            state.push(...infoPromise);

        } else {
            state.push(infoPromise);
        }
        filteredState.push(...state);
        console.log('state:', state)
        console.log('filter state:', filteredState)


        renderSortSelector()
        renderFilter()
        renderResults()
        renderPagination()

    } catch (err) {
        console.error(err);
        renderError(err.message);
    }
};

