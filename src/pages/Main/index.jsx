import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Container } from './styles'
import { main } from '../../i18n/Languages'

function Main({ phrases }) {
  return (
    <Container>
      <div>
        <h1>Ricardo Mendes</h1>
        <h4>{phrases.subtitle}</h4>
        <h3>Welcome =)</h3>
      </div>
    </Container>
  )
}

Main.propTypes = {
  phrases: PropTypes.shape({
    subtitle: PropTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = () => ({
  phrases: main()
})

export default connect(mapStateToProps)(Main)
