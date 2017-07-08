// when the user types into the search bar
export function searchTermChanged(searchTerm) {
	return {
		type: 'SEARCH_TERM_CHANGED',
		payload: searchTerm
	}
}

// when a new list of videos is returned
export function videoListsChanged(videos) {
	return {
		type: 'VIDEO_LISTS_CHANGED',
		payload: videos
	}
}
