import axios from 'axios';

export default class ShowService {

    constructor(option) {
        this.apiUrl = option.apiUrl;
    }
 
    request(url = null) {
        return axios.get(this.apiUrl || url);
    }
}