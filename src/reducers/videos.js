/**
 * Video reducer containing the list of videos
 * This list changes when videoChanged is called
 */

// the redux way 
// export default (state=null, action) => { 	
// 	switch (action.type) { 		
// 		case 'VIDEO_CHANGED':
// 			return action.payload
// 		default:
// 			return state
// 	}
// } 
// for offline testing purpose only
export default (state=null, action) => {
	switch(action.type) {
		case 'VIDEO_CHANGED':
			return action.payload
	}
	return [
		{
			key: 1,
			title: "Artificial intelligence",
			etag: "df82nv9x",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus illum qui nul la?"
		}, {
			key: 2,
			title: "MIT Reasearch Labs | A.I.",
			etag: "av92l49a",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus illum qui nul la?"
		}, {
			key: 3,
			title: "Geoffery Hinton | t-SNE",
			etag: "goal49ad",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus illum qui nul la?"
		}, {
			key: 4,
			title: "t-Stochastic Distributed Neighbor Embedding",
			etag: "9falv4ls",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus illum qui nul la?"
		}, {
			key: 5,
			title: "Restricted Boltzman Machine",
			etag: "v9ao4lsv",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus illum qui nul la?"
		}
	]
}