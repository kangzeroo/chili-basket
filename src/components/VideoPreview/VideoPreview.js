import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './VideoPreview.css'
import COMPANY from '../../data/company.json'

class VideoPreview extends Component {
  render() {
    return (
      <div id="VideoPreview">
        <div className="preview_left">
          <div className="preview_playlist">{COMPANY.company_shortname} {this.props.playlist}</div>
          <div className="preview_datePublished">Published {this.props.video.datePublished}</div>

          <div className="preview_title"><a href={this.props.video.url} target="_blank">{this.props.video.title}</a></div>
          <div className="preview_duration">{Math.floor(this.props.video.duration/60)} Minutes {this.props.video.duration % 60} Seconds</div>
          <div className="preview_description" dangerouslySetInnerHTML={{ __html: this.props.video.description }}></div>
          <div className="stats_bar">
            <div className="preview_stat"><i className="ion-eye" /> &nbsp; {this.props.video.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
            <div className="preview_stat"><i className="ion-thumbsup" /> &nbsp; {this.props.video.likeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
            <div className="preview_stat"><i className="ion-thumbsdown" /> &nbsp; {this.props.video.dislikeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
            <div className="preview_stat"><i className="ion-android-chat" /> &nbsp; {this.props.video.commentCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
          </div>
        </div>
        <div className="preview_right">
          <div className="preview_close"><i className="ion-close-round" onClick={() => this.props.closePreview()} fontSize="1.5rem" fontWeight="bold" /></div>
          <div className="video_preview_clip">
            <iframe
              width="100%"
              height="100%"
              src={`${this.props.video.embedURL}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    )
  }
}

VideoPreview.propTypes = {
  title: PropTypes.string.isRequired,
  playlist: PropTypes.string.isRequired,
  closePreview: PropTypes.func.isRequired,
}

export default VideoPreview
