import PropTypes from 'prop-types'
import React from 'react'
import eventPoster from '../images/unite-flyer.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="event"
          className={`${this.props.article === 'event' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Event</h2>
          {/* <span className="image main">
            <img src={pic01} alt="" />
          </span> */}
          <p>
            Unite Youth Gathering will be the combined Youth Gathering of the WDYouth and SoCal Youth. This time of worship and powerful preaching will take place July 28th - 30th in the city of Visalia.
          </p>
          <h3>Location</h3>
          <p>
            <strong>Visalia Convention Center</strong><br />
            303 E Acequia Ave<br />
            Visalia, CA 93291
          </p>
          <h3>Schedule</h3>
          <p>Coming Soon</p>
          {/* <p><strong>Wed Night July 28th - Friday Night July 30th</strong></p>
          <p className="mb-0"><strong>Wednesday</strong></p>
          <ul>
            <li>5:30pm Registration and Doors Open</li>
            <li>7pm Pre-Service Begins</li>
            <li>7:30pm Main Service Begins</li>
          </ul>
          <p className="mb-0"><strong>Thursday</strong></p>
          <ul>
            <li>9:30am Doors Open</li>
            <li>10am Breakout Sessions Begin</li>
            <li>11am Morning Main Service Begins</li>
            <li>5:30pm Registration and Doors Open</li>
            <li>7pm Pre-Service Begins</li>
            <li>7:30pm Main Service Begins</li>
          </ul>
          <p className="mb-0"><strong>Thursday</strong></p>
          <ul>
            <li>9:30am Doors Open</li>
            <li>10am Breakout Sessions Begin</li>
            <li>11am Morning Main Service Begins</li>
            <li>5:30pm Registration and Doors Open</li>
            <li>7pm Pre-Service Begins</li>
            <li>7:30pm MTM Service Begins</li>
          </ul> */}
          <h3>Breakout Sessions</h3>
          <p>
            Breakout Session Details to come.
          </p>
          {close}
        </article>

        <article
          id="hotels"
          className={`${this.props.article === 'hotels' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Hotels</h2>
          <p>
            Hotels will open on <strong>May 17th</strong>
          </p>
          {close}
        </article>

        <article
          id="registration"
          className={`${this.props.article === 'registration' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Registration</h2>
          <p>
            Registration will open on <strong>May 24th</strong><br />
            After-Events will open on <strong>May 31st</strong>
          </p>
          {close}
        </article>

        <article
          id="after-events"
          className={`${this.props.article === 'after-events' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">After-Events</h2>
          <p>
            After-Events will open on <strong>May 31st</strong>
          </p>
          {close}
        </article>

        <article
          id="event-poster"
          className={`${this.props.article === 'event-poster' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Event Poster</h2>
          <img src={eventPoster} className="w-100" alt="UNITE Event Poster" />
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
