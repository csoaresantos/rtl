import { combineReducers } from 'redux';
import ShowReducer from "./showReducer";
import EpisodeReducer from "./episodeReducers";
import DetailReducer from "./detailReduce";

const rootReducer = combineReducers({
    show: ShowReducer,
    list: EpisodeReducer,
    detail: DetailReducer
})

export default rootReducer;