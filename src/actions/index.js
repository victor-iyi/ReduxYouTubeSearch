export function videoSelected(video) {
	return {
		type: 'VIDEO_SELECTED',
		payload: video
	}
}

export function videoChanged(vdieos) {
	return {
		type: 'VIDEO_CHANGED',
		payload: videos
	}
}