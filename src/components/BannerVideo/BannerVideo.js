import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './BannerVideo.css'
import COMPANY from '../../data/company.json'

class BannerVideo extends Component {
  render() {
    return (
      <div id="BannerVideo">
        <div id="main_video">
          {/*<iframe
            width="100%"
            height="100%"
            src={`${'https://www.youtube.com/embed/34LGPIXvU5M'}?autoplay=1&disablekb=1&showinfo=0&controls=0&autohide=1&modestbranding=1`}
            frameBorder="0"
            allow="autoplay;"
            allowFullScreen={false}>
          </iframe>*/}
          {/*<img id="landing_gif" src={COMPANY.banner_gif} />*/}
          {/*<div id="main_video_overlay"></div>*/}
          <div className='gradient_animator'></div>
          <div id="landing_slogan">
            <div id="landing_slogan_title">{COMPANY.banner_title}</div>
            <div id="landing_slogan_subtitle">{COMPANY.banner_subtitle}</div>
          </div>
        </div>
        {/*<div id="main_video_gradient"></div>*/}
      </div>
    )
  }
}

BannerVideo.propTypes = {
}

export default BannerVideo
