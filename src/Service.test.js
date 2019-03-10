import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import ShowService from './ShowService';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('API Rest test', () => {
    let sandbox;
    
    beforeEach(() => sandbox = sinon.sandbox.create());
    afterEach(() => sandbox.restore());

    it('Should show the info show', () => {
        const mockAdaper = new MockAdapter(axios);

        const data = {
            "id": 691590,
            "url": "http://www.tvmaze.com/episodes/691590/the-powerpuff-girls-1x03-the-stayover",
            "name": "The Stayover",
            "season": 1,
            "number": 3,
            "airdate": "2016-04-05",
            "airtime": "18:00",
            "airstamp": "2016-04-05T22:00:00+00:00",
            "runtime": 11,
            "image": {
                "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/53/132627.jpg",
                "original": "http://static.tvmaze.com/uploads/images/original_untouched/53/132627.jpg"
            },
            "summary": "<p>Blossom and Buttercup suffer a candy hangover, and they must retrace their steps to find where they left Bubbles.</p>",
            "_links": {
                "self": {
                    "href": "http://api.tvmaze.com/episodes/691590"
                }
            }
        }

        mockAdaper.onGet('http://api.tvmaze.com/episodes/691590').reply('200', data);

        const service = new ShowService('http://api.tvmaze.com/episodes/691590');

        service.request()
        .then((res) => {
            expect(res.data).to.be.equal(data);
        });
    });
});