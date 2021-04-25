import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; WDYouth | Socal Youth <a href="https://wdyouth.org" target="_blank">WDYouth.org</a> | <a href="https://www.socalyouth.org/" target="_blank">socalyouth.org</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
