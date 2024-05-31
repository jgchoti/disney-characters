import { ORIGIN } from '../../config.js';

export const disneyService = async (searchTerm) => {
    console.log(searchTerm)
    let URL = `${ORIGIN}name=${searchTerm}`

    console.log(URL)

    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
    }

    const result = await response.json();
    return result.data
};
