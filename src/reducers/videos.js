export default function(state=null, action) {
	switch ( action.type ) {
		case 'VIDEO_LISTS_CHANGED':
			return action.payload
		default:
			return state
	}
}