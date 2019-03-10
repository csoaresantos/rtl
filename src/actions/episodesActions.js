import ShowService from '../ShowService';

const API_EPISODES_URL = 'http://api.tvmaze.com/shows/6771/episodes';

export function getEpisodes() {
    const service = new ShowService({apiUrl: API_EPISODES_URL});
    const request = service.request();

    return {
        type: 'SHOW_LIST_EPISODE_FETCHED',
        payload: request
    }
}

export function getEpisode(id) {
    const service = new ShowService({apiUrl: `http://api.tvmaze.com/episodes/${id}`});
    const request = service.request();

    return {
        type: 'EPISODE_DETAIL_FETCHED',
        payload: request
    }
}