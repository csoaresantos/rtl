import axios from 'axios';
import API_URL from './config';

export default class ShowService {

    constructor(option) {
        this.apiUrl = option.apiUrl;
    }
 
    request(url = null) {
        return axios.get(this.apiUrl || url);
    }
}