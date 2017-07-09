export default (state='Artificial intelligence', action) => {
	switch( action.type ) {
		case 'SEARCH_TERM_CHANGED':
			return action.payload
		default:
			return state
	}
}