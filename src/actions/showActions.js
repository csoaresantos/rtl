import ShowService from '../ShowService';

const API_SHOW_URL = 'http://api.tvmaze.com/shows/6771';

export function getShow() {
    const service = new ShowService({apiUrl: API_SHOW_URL});
    const request = service.request();

    return {
        type: 'SHOW_FETCHED',
        payload: request
    }
}
