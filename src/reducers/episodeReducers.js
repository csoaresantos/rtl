const INITIAL_STATE = [{}];

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'SHOW_LIST_EPISODE_FETCHED':
            return Object.assign({}, state, { episode : action.payload.data  });

        case 'EPISODE_DETAIL_FETCHED':
            return Object.assign({}, state, { detail : action.payload.data  });
        
        default:
            return state;
    }
}