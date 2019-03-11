import React from 'react';
import { shallow } from '../enzyme';

import ListItem from '../components/ListItemHTML';

describe('List item test', () => {
    it('render a item', () => {
        const data = {
            "link": "fake",
            "name": "The Stayover",
            "runtime": 11,
            "image": {
                "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/53/132627.jpg",
            },
            "summary": "<p>Blossom and Buttercup suffer a candy hangover, and they must retrace their steps to find where they left Bubbles.</p>",
        }
    
        const wrapper = shallow(<ListItem image={data.image} name={data.name} summary={data.summary} runtime={data.runtime} link={data.link} />);

        expect(wrapper.find('card mb-4 shadow-sm')).toBeDefined();
    });
});