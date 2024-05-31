import { filteredState } from "../data/state.js";

export const sortAlphabet = (sortBy) => {
    filteredState.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        const idA = a._id;
        const idB = b._id;

        if (sortBy === 'sort') {
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        } else if (sortBy === 'reverse') {
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }
            return 0;
        } else {
            return idA - idB;
        }
    })

}
