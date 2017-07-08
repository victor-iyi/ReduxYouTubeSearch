import { combineReducers } from 'redux';
// my reducers
import SearchTerm from './search-term'
import Videos from './videos'
import APIKey from './api-key'

const rootReducer = combineReducers({
	API_KEY: APIKey,
	searchTerm: SearchTerm,
	videos: Videos
});

export default rootReducer;
