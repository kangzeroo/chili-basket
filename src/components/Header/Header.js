import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { message } from 'antd'
import './Header.css'
import COMPANY from '../../data/company.json'

class Header extends Component {

  nothingMessage() {
    console.log('DOES NOTHING')
    message.info('This does nothing 😂')
  }

  render() {
    return (
      <div id="Header">
        <div id="left">
          <a href={COMPANY.company_website} target="_blank"><img id="logo" alt="logo" src={COMPANY.company_logo_url} /></a>
          <span className="header_item" onClick={() => this.nothingMessage()}>Plans</span>
          <span className="header_item" onClick={() => this.nothingMessage()}>Benefits</span>
          <span className="header_item" onClick={() => this.nothingMessage()}>Integrations</span>
          <span className="header_item" onClick={() => this.nothingMessage()}>Pricing</span>
        </div>
        <div id="right">
          <div id='alerts-icon' className="header_item"><i className='ion-ios-bell' /></div>
          <div id='account-dropdown' className="header_item">
            <img src='https://occ-0-3059-1722.1.nflxso.net/art/0a23d/bd81473c570e4f6898dae0375550d809c230a23d.png' />
            <i className='ion-android-arrow-dropdown' />
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
}

export default Header;
