import _ from 'lodash'
import YTSearch from 'youtube-api-search'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// action creators
import { searchTermChanged, videoChanged } from '../actions'

class SearchBar extends Component {

	search() {
		YTSearch({ 
			key: this.props.API_KEY, 
			term: this.props.searchTerm 
		}, (videos) => {
			this.props.videoChanged(videos)
		})
	}

	onSearch(value) {
		this.props.searchTermChanged(value)
		// const videoSearch = _.debounce(this.search(), 300)
		// videoSearch()
	}

	render() {
		return (
			<div className="search-bar">
				<input type="text" placeholder="Enter a search term" value={this.props.searchTerm} onChange={ event => this.onSearch(event.target.value) } />
				<div>
					<p>
						{ this.props.searchTerm ? `Searching for: ${this.props.searchTerm}` : '' }
					</p>
				</div>
			</div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		searchTerm: state.searchTerm
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		searchTermChanged: searchTermChanged,
		videoChanged: videoChanged
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)