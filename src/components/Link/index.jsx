import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

export default function Link({ href, title }) {
  return <Container href={href}>{title}</Container>
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
