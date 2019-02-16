import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './PlaylistCarousel.css'
import PLAYLISTS from '../../data/playlists.json'
import VideoPreview from '../VideoPreview/VideoPreview'

class PlaylistCarousel extends Component {

  constructor() {
    super()
    this.state = {
      preview_video: null,
    }
  }

  componentWillUpdate(prevProps, prevState) {
    if (prevProps.current_playlist !== this.props.playlist.title && this.state.preview_video) {
      document.getElementById(this.state.preview_video.videoId).style.border = '0px solid white'
    }
  }

  mouseOver(video) {
    // if (this.state.preview_video) {
    //   this.setState({
    //     preview_video: video,
    //   })
    // }
  }

  togglePreview(video) {
    if (this.state.preview_video) {
      document.getElementById(this.state.preview_video.videoId).style.border = '0px solid white'
    }
    document.getElementById(video.videoId).style.border = '4px solid white'
    this.props.changeCurrentPlaylist(this.props.playlist.title)
    this.setState({
      preview_video: video,
    }, () => document.getElementById('VideoPreview').scrollIntoView({ behavior: 'smooth', block: 'center' }))
  }

  renderPreview() {
    return (
      <div id="video_preview_container">
        <VideoPreview video={this.state.preview_video} playlist={this.props.playlist.title} closePreview={() => this.removeTileBorder()} />
      </div>
    )
  }

  removeTileBorder() {
    document.getElementById(this.state.preview_video.videoId).style.border = '0px solid white'
    this.setState({
      preview_video: null,
    })
  }

  scrollHorizontal(direction, id) {
    console.log(`Scroll ${direction}`)
    console.log(document.getElementById(id))
    if (direction === 'left') {
      document.getElementById(id).scrollLeft -= 500
    } else if (direction === 'right') {
      document.getElementById(id).scrollLeft += 500
    }
  }

  render() {
    const filtered_videos = this.props.playlist.videos.filter((vid) => {
      return vid.title.toLowerCase().indexOf(this.props.search_string.toLowerCase()) > -1
    })
    if (filtered_videos.length > 0) {
      return (
        <div id="PlaylistCarousel">
          <span className="playlist_title">{this.props.playlist.title} <span className="playlist_title_minor"> &nbsp; • {this.props.playlist.videos.length} Videos</span></span>
          <div id={`playlist_row_inner_${this.props.playlist.title}`} className="playlist_row">
            <div className="playlist_row_inner">
              {
                filtered_videos.map((video) => {
                  return (
                    <div id={video.videoId} onClick={() => this.togglePreview(video)} onMouseOver={() => this.mouseOver(video)} key={video.videoId} className='tile'>
                      <img className='tile_image' src={video.thumbnailUrl} />
                      <span className='tile_details'>
                        <div className="play_video_icon"><i className="ion-play" /></div>
                        {video.title}
                        <div className="more_info_icon"><i className="ion-chevron-down" /></div>
                      </span>
                      <span className='tile_title'>
                        {video.title}
                      </span>
                    </div>
                  )
                })
              }
            </div>
            <div className="playlist_scroll_left" onClick={() => this.scrollHorizontal('left', `playlist_row_inner_${this.props.playlist.title}`)}><i className="ion-chevron-left" /></div>
            <div className="playlist_scroll_right" onClick={() => this.scrollHorizontal('right', `playlist_row_inner_${this.props.playlist.title}`)}><i className="ion-chevron-right" /></div>
          </div>
          {
            this.state.preview_video && this.props.current_playlist === this.props.playlist.title
            ?
            this.renderPreview()
            :
            null
          }
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

PlaylistCarousel.propTypes = {
  playlist: PropTypes.object.isRequired,
  current_playlist: PropTypes.object.isRequired,
  search_string: PropTypes.string.isRequired,
  changeCurrentPlaylist: PropTypes.func.isRequired,
}

export default PlaylistCarousel
