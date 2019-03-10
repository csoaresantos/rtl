import ShowService from '../ShowService';

export function getEpisode(id) {

    const service = new ShowService({apiUrl: `http://api.tvmaze.com/episodes/${id}`});
    const request = service.request();

    return {
        type: 'EPISODE_DETAIL_FETCHED',
        payload: request
    }
}