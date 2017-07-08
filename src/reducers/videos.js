export default function(state=null, action) {
	// switch ( action.type ) {
	// 	case 'VIDEO_LISTS_CHANGED':
	// 		return action.payload
	// 	default:
	// 		return state
	// }
	return [
		{ key: 1, "title": "JSP", "desc": "Java Server Pages" },
		{ key: 2, "title": "XML", "desc": "Xtensible Markup Language" },
		{ key: 3, "title": "WPF", "desc": "Windows Presentation Form" },
		{ key: 4, "title": "SQL", "desc": "Structured Query Language" },
		{ key: 5, "title": "AJAX", "desc": "Asynnchronous JavaScript And XML" },
		{ key: 6, "title": "JSX", "desc": "JavaScript and XML" },
	]
}