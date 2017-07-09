import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class VideoDetail extends Component {

	render() {
		if ( !this.props.video )
			return ( <div> Loading... </div> )
		// video available
		const key = this.props.video.key
		const title = this.props.video.title
		const description = this.props.video.description
		return (
			<div className="video-detail col-md-7">
				<div>
					<h4> Showing details for book no {key} </h4>
				</div>
				<div className="details">
					<div>{title}</div>
					<div>{description}</div>
				</div>
			</div>
		)
		/* // video available
		const videoId = this.props.video.id.videoId
		const url = `https://youtube.com/embed${videoId}`
		const title = this.props.video.snippet.title
		const description = this.props.video.snippet.description
		return (
			<div className="video-detail col-md-8">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe src={url} className="embed-responsive-item"></iframe>
				</div>
				<div className="details">
					<div>{title}</div>
					<div>{description}</div>
				</div>
			</div>
		) */
	}

}

const mapStateToProps = (state) => {
	return {
		video: state.currentVideo
	}
}

export default connect(mapStateToProps)(VideoDetail)