import PropTypes from 'prop-types'
import React from 'react'
import uniteLogo from '../images/unite-logo.png'
import wdyouthLogo from '../images/wdyouth-logo.png'
import socalLogo from '../images/socal-logo.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={uniteLogo} alt="" />
    </div>
    <div className="content">
      <div className="inner">

        <h1>UNITE Youth Gathering</h1>
        <p className="mb-0">
          <strong>Thank you for your support of Unite 2021.</strong>
        </p>
        <p>
          Follow our websites <a href="https://linktr.ee/socalyouth" taget="_blank" rel="noreferrer">SoCal Youth</a> and <a href="https://linktr.ee/wdyouth" taget="_blank" rel="noreferrer">WDYouth</a> to stay up to date on events in the future.
        </p>
        <img src={wdyouthLogo} className="header-logos header-logos__wdyouth" alt="WDYouth Logo" />
        <img src={socalLogo} className="header-logos" alt="Socal Logo" />
        {/* <div class="video-container">
          <iframe src="https://www.youtube.com/embed/BAz-F5DKD_4"></iframe>
        </div> */}
      </div>
    </div>
    {/*
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('event')
            }}
          >
            Event
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('hotels')
            }}
          >
            Hotels
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('registration')
            }}
          >
            Registration
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('after-events')
            }}
          >
            After Events
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('event-poster')
            }}
          >
            Event Poster
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('playlists')
            }}
          >
            Playlists
          </button>
        </li>
      </ul>
    </nav>
     */}
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
