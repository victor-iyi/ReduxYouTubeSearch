import React, { Component } from 'react'

export default class VideoListItem extends Component {

	constructor(props) {
		super(props)
		this.props.videoSelected(this.props.initialVideo)
	}

	render() {
		const key = this.props.video.key
		const title = this.props.video.title
		const description = this.props.video.description
		return (
			<li className="list-group-item" onClick={() => this.props.videoSelected(this.props.video)}>
				<div className="video-list media">
					<h5 className="media-heading">{key}.{title}</h5>
				</div>
				<div className="media-body">
					<p>{description}</p>
				</div>
			</li>
		)
		// const title = this.props.video.snippet.title
		// const thumbnail = this.props.video.snippet.thumbnails.default.url
		// return (
		// 	<li className="list-group-item">
		// 		<div className="video-list media">
		// 			<div className="media-left">
		// 				<img src={thumbnail} className="media-object" />
		// 			</div>
		// 		</div>
		// 		<div className="media-body">
		// 			<div className="media-heading">{title}</div>
		// 		</div>
		// 	</li>
		// )
	}

}