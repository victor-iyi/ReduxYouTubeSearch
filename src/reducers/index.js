import { combineReducers } from 'redux';
// Reducers
import Videos from './videos'
import CurrentVideo from './current-video'

const rootReducer = combineReducers({
  videos: Videos,
  currentVideo: CurrentVideo
});

export default rootReducer;
