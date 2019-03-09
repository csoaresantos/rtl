const INITIAL_STATE = { info: { name: "teste name", image: { medium: 'src img' }, summary: 'summary' } };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'SHOW_FETCHED':
            return Object.assign({}, state, { info : action.payload.data  });
        
        default:
            return state;
    }
}