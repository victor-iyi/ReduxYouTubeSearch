import { combineReducers } from 'redux';
// Reducers
import Videos from './videos'
import CurrentVideo from './current-video'
import SearchTerm from './search-term'

const rootReducer = combineReducers({
  videos: Videos,
  currentVideo: CurrentVideo,
  searchTerm: SearchTerm
});

export default rootReducer;
