import PropTypes from 'prop-types'
import React from 'react'
import uniteLogo from '../images/unite-logo.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={uniteLogo} alt="" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>UNITE Youth Gathering 2021</h1>
        <p>
          <strong>July 28 - 30th</strong>
          <br />
          Visalia Convention Center
        </p>
        {/* <div class="video-container">
          <iframe src="https://www.youtube.com/embed/BAz-F5DKD_4"></iframe>
        </div> */}
      </div>
    </div>
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
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
