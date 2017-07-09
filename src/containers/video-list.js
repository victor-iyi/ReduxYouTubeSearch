import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// custom imports
import VideoListItem from '../components/video-list-item'
import { videoSelected } from '../actions'

class VideoList extends Component {

	videoList() {
		if ( !this.props.videos )
			return ( <div> No videos to display </div> )
		
		return this.props.videos.map( video => {
			return <VideoListItem key={video.etag} initialVideo={this.props.videos[0]} video={video} videoSelected={this.props.videoSelected} />
		})
	}

	render() {
		return (
			<ul className="col-md-5">
				{this.videoList()}
			</ul>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		videos: state.videos
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		videoSelected: videoSelected
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList)