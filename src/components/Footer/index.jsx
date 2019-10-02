import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Container } from './styles'
import { footer } from '../../i18n/Languages'

import { social } from './social'

class Footer extends Component {
  render() {
    const { phrases } = this.props

    return (
      <Container>
        <div>
          {social.map(s => (
            <a href={s.link} title={s.title} target="_blank">
              <s.icon size={34} />
            </a>
          ))}
        </div>
        <div>
          <p>
            {phrases.graduated}
            <b>
              <a href="https://www.sorocaba.ufscar.br" target="_blank">
                UFSCar Sorocaba
              </a>
            </b>
          </p>

          <p>
            {phrases.currently}
            <b>
              <a href="https://gamersclub.com.br/" target="_blank">
                Gamers Club
              </a>
            </b>
          </p>
          <select onChange={e => this.handleLanguage(e.target.value)}>
            <option value="pt-br">pt-br</option>
            <option value="en">en</option>
          </select>
        </div>
      </Container>
    )
  }
}

Footer.propTypes = {
  phrases: PropTypes.shape({
    graduated: PropTypes.string.isRequired,
    currently: PropTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = () => ({
  phrases: footer()
})

export default connect(mapStateToProps)(Footer)
