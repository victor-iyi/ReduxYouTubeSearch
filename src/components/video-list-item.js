import React, {Component} from 'react'

export default class VideoListItem extends Component {

	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<li key={this.props.video.etag}
					onClick={ () => this.props.onVideoSelected(this.props.video) }
					className="list-group-item">
				<div className="video-list media">
					<div className="media-left">
						<img src={imageURL} className="media-object"/>
					</div>
				</div>
				<div className="media-body">
					<div className="media-heading">{videoTitle}</div>
				</div>
			</li>
		)
	}

}