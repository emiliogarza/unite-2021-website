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
          <strong>These hotels rates / blocks are not open yet. You may begin making reservations on May 17th.</strong>
          </p>
          <p>
          <strong>Marriott (HQ)</strong><br />
            300 South Court St.<br />
            Visalia, CA 93291<br />
            559.636.1111<br />
            Room Rate: $169.00<br />
            Cutoff Date: 7/1/21
            </p>
            <p>
            <strong>Comfort Suites</strong><br />
            210 E. Acequia Ave.<br />
            Visalia, CA 93291<br />
            559.738.1700<br />
            Room Rate: $179.00<br />
            Cutoff Date: 7/15/21<br />
            No cancelations after 7/1/21<br />
            </p>
            <p>
            <strong>Wyndham</strong><br />
            9000 W Airport Dr.<br />
            Visalia, CA 93277<br />
            559.651.5000<br />
            Room Rate: $124.00<br />
            Cutoff Date: 7/1/21
            </p>
            <p>
            <strong>Residence Inn</strong><br />
            205 North Plaza Dr.<br />
            Visalia, CA 93291<br />
            559.205.1515<br />
            Room Rate: $164.00<br />
            Cutoff Date: 7/6/21
            </p>
            <p>
            <strong>LampLiter Inn</strong><br />
            3300 W. Mineral King Ave.<br />
            Visalia, CA 93291<br />
            559.732.4511<br />
            Room Rate: $104.00<br />
            Cutoff Date: 7/14/21
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
            Event Registration will open <strong>at noon May 24th</strong>, see our Event-Brite to register<br />
            <strong><a href="https://www.eventbrite.com/e/unite-combined-youth-gathering-2021-tickets-156005987107" target="_blank">Buy Eventbrite Registration</a></strong>
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
