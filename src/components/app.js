import React, { Component } from 'react'
// custom imports
import SearchBar from '../containers/search-bar'
import VideoList from '../containers/video-list'

export default class App extends Component {

	render() {
		return (
			<div>
				<h1> YouTube Search </h1>
				<SearchBar />
				<VideoList />
			</div>
		)
	}

}
