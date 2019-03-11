import React from 'react';
import { shallow } from '../enzyme';

import Detail from '../components/DetailHTML';

describe('Detail test', () => {
    it('render a item', () => {
        const data = {
            "name": "The Stayover",
            "runtime": 11,
            "image": {
                "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/53/132627.jpg",
            },
            "summary": "<p>Blossom and Buttercup suffer a candy hangover, and they must retrace their steps to find where they left Bubbles.</p>",
        }
    
        const wrapper = shallow(<Detail image={data.image} name={data.name} summary={data.summary} runtime={data.runtime} />);

        expect(wrapper.find('col-md-4')).toBeDefined();
    });
});