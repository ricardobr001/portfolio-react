import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

export default function MusicLoading({ phrases }) {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="equilizer"
        viewBox="0 0 128 128"
      >
        <g>
          <title>Audio Equilizer</title>
          <rect className="bar" transform="translate(0,0)" y="15" />
          <rect className="bar" transform="translate(25,0)" y="15" />
          <rect className="bar" transform="translate(50,0)" y="15" />
          <rect className="bar" transform="translate(75,0)" y="15" />
          <rect className="bar" transform="translate(100,0)" y="15" />
        </g>
      </svg>
      <h1>{phrases.loading}</h1>
      <p>{phrases.joke}</p>
    </Container>
  )
}

MusicLoading.propTypes = {
  phrases: PropTypes.shape({
    loading: PropTypes.string.isRequired,
    joke: PropTypes.string.isRequired
  }).isRequired
}
