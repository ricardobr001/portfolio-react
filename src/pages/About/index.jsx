import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { link } from './links'

import Link from '../../components/Link'

import { Container } from './styles'
import { about } from '../../i18n/Languages'
import me from '../../assets/me.jpeg'

function About({ phrases }) {
  return (
    <Container>
      <div>
        <div>
          <p>{phrases.greetings}</p>
          <p>{phrases.about_1}</p>
          <p>
            {phrases.about_2} (
            <Link
              href={link.playlists[0].href}
              title={link.playlists[0].title}
            />{' '}
            {phrases.and}{' '}
            <Link
              href={link.playlists[1].href}
              title={link.playlists[1].title}
            />
            ) {phrases.about_3}
          </p>
          <p>{phrases.programming}</p>
        </div>
        <img src={me} alt="me" />
      </div>
    </Container>
  )
}

About.propTypes = {
  phrases: PropTypes.shape({
    greetings: PropTypes.string.isRequired,
    about_1: PropTypes.string.isRequired,
    about_2: PropTypes.string.isRequired,
    and: PropTypes.string.isRequired,
    about_3: PropTypes.string.isRequired,
    programming: PropTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = () => ({
  phrases: about()
})

export default connect(mapStateToProps)(About)
