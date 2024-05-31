import { filteredState, state } from "../data/state.js";

export const filterCharacters = (filters) => {
    let filterResult = [];
    if (filters.includes('all')) {
        filterResult = state;
    } else {
        filterResult = state.filter(character => {
            for (let filter of filters) {
                if (character[filter].length === 0) {
                    return false;
                }
            }
            return true;
        });
    }
    filteredState.length = 0;
    filteredState.push(...filterResult);
    console.log(filteredState)
};

