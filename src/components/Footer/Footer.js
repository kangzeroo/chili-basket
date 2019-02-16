import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Footer.css'
import COMPANY from '../../data/company.json'

class Footer extends Component {
  render() {
    return (
      <div id="Footer">
        <div className="footer_left">
          <div className="footer_logo_container">
            <img className="footer_logo" src={COMPANY.company_logo_url} />
            <div className="footer_desc">{COMPANY.footer_desc}</div>
          </div>
        </div>
        <div className="footer_right">

          <div className="footer_column">
            <div className="footer_row"><i className="ion-person" fontSize="1.7rem" /> &nbsp; &nbsp; Kangze Huang (2019)</div>
            <div className="footer_row"><i className="ion-code" fontSize="1.7rem" /> &nbsp; &nbsp; Made with ReactJS</div>
          </div>

          <div className="footer_column">
            <div className="footer_row"><a href="https://medium.com/search?q=complete%20aws%20boilerplate" target="_blank"><i className="ion-cube" fontSize="1.7rem" /> &nbsp; &nbsp; Read My AWS Tutorials</a></div>
            <div className="footer_row"><a href="https://medium.com/predict/the-habitable-epoch-of-the-early-universe-1a8e18fc1bf7" target="_blank"><i className="ion-ios-book" fontSize="1.7rem" /> &nbsp; &nbsp; Read My Short Stories</a></div>
          </div>

          <div className="footer_column">
            <div className="footer_row"><a href="https://www.linkedin.com/in/kangze-huang-397724a0/" target="_blank"><i className="ion-social-linkedin" fontSize="1.7rem" /> &nbsp; &nbsp; Visit LinkedIn</a></div>
            <div className="footer_row"><a href="https://github.com/kangzeroo" target="_blank"><i className="ion-social-github" fontSize="1.7rem" /> &nbsp; &nbsp; Visit Github</a></div>
            <div className="footer_row"><a href="mailto:kangzeroo@gmail.com"><i className="ion-email" fontSize="1.7rem" /> &nbsp; &nbsp; Send Email</a></div>
          </div>

        </div>
      </div>
    );
  }
}

Footer.propTypes = {
}

export default Footer
