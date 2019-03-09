import axios from 'axios';

const API_SHOW_URL = 'http://api.tvmaze.com/shows/6771';

export function getShow() {
    const request = axios.get(API_SHOW_URL);
    return {
        type: 'SHOW_FETCHED',
        payload: request
    }
}
