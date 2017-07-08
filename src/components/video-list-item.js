import React, {Component} from 'react'

export default class VideoListItem extends Component {

	constructor(props) {
		super(props)
	}
	
	render() {
		const thumbnail = this.props.video.snippet.thumbnails.default.imageURL
		const title = this.props.video.snippet.title
		return (
			<li key={this.props.video.etag}
					onClick={ () => this.props.onVideoSelected(this.props.video) }
					className="list-group-item">
				<div className="video-list media">
					<div className="media-left">
						<img src={thumbnail} className="media-object"/>
					</div>
				</div>
				<div className="media-body">
					<div className="media-heading">{title}</div>
				</div>
			</li>
		)
	}

}