import axios from 'axios';

const API_EPISODES_URL = 'http://api.tvmaze.com/shows/6771/episodes';

export function getEpisodes() {
    const request = axios.get(API_EPISODES_URL);
    return {
        type: 'SHOW_LIST_EPISODE_FETCHED',
        payload: request
    }
}

export function getEpisode(id) {
    const request = axios.get(`http://api.tvmaze.com/episodes/${id}`);

    return {
        type: 'EPISODE_DETAIL_FETCHED',
        payload: request
    }
}