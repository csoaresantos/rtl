const INITIAL_STATE = [{}];

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'EPISODE_DETAIL_FETCHED':
            return Object.assign({}, state, { detail : action.payload.data  });
        
        default:
            return state;
    }
}