import _ from 'lodash'
import YTSearch from 'youtube-api-search'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// custom imports
import { videoListsChanged, searchTermChanged, videoSelected } from '../actions'

class SearchBar extends Component {

	constructor(props) {
		super(props)
		this.props.videoSelected(this.props.videos[0])
	}
  // performs YouTube API Search
	search() {
		YTSearch({ key: this.props.API_KEY, term: this.props.searchTerm }, videos => {
			this.props.videoListsChanged(videos)
		})
	}

	onSearch(value) {
		this.props.searchTermChanged(value)
		// const videoSearch = _.debounce(() => { this.search() }, 300)
		// videoSearch()
	}

	render() {
		return (
			<div className="search-bar">
				<input 
					type="text" placeholder="Search for videos" 
					value={this.props.searchTerm}
					onChange={ (event) => this.onSearch(event.target.value) } />
				<div>
					{ this.props.searchTerm ? `Searching for: ${this.props.searchTerm}` : '' }
				</div>
			</div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		searchTerm: state.searchTerm,
		videos: state.videos,
		API_KEY: state.API_KEY
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		searchTermChanged: searchTermChanged,
		videoListsChanged: videoListsChanged,
		videoSelected: videoSelected
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
