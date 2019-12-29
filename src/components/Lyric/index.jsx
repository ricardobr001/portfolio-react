import React from 'react'
import propTypes from 'prop-types'

import { Container } from './styles'

export default function Lyric({ lyric }) {
  return (
    <Container>
      {lyric.split('\n').map(l => (l === '' ? <p>&nbsp;</p> : <p>{l}</p>))}
    </Container>
  )
}

Lyric.propTypes = {
  lyric: propTypes.string.isRequired
}
