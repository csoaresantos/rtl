import axios from 'axios';

const API_EPISODES_URL = 'http://api.tvmaze.com/shows/6771/episodes';

export function getEpisode(id) {
    const request = axios.get(`http://api.tvmaze.com/episodes/${id}`);

    return {
        type: 'EPISODE_DETAIL_FETCHED',
        payload: request
    }
}