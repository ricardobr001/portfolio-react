import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { FaUser, FaVolumeUp, FaPortrait } from 'react-icons/fa'
import { Container, Page, Select } from './styles'

import { header } from '../../i18n/Languages'

class Header extends Component {
  constructor() {
    super()

    this.state = {
      i18n: ''
    }
  }

  componentDidMount() {
    const i18n = localStorage.getItem('i18n')

    if (i18n) {
      this.setState({ i18n })
    } else {
      this.setState({ i18n: 'pt-br' })
    }
  }

  handleLanguage(lang) {
    const { dispatch } = this.props
    localStorage.setItem('i18n', lang)

    dispatch({
      type: '@lang/SAVE_LANG',
      lang
    })
  }

  render() {
    const { i18n } = this.state
    const { phrases } = this.props

    return (
      <Container>
        <ul>
          <li>
            <Page to="/about">
              <div>
                <FaUser size={22} />
                <strong>{phrases.about}</strong>
              </div>
            </Page>
          </li>
          <li>
            <Page to="/listening">
              <div>
                <FaVolumeUp size={22} />
                <strong>{phrases.listening}</strong>
              </div>
            </Page>
          </li>
          <li>
            <Page to="/cv">
              <div>
                <FaPortrait size={22} />
                <strong>{phrases.cv}</strong>
              </div>
            </Page>
          </li>
        </ul>
        <Select onChange={e => this.handleLanguage(e.target.value)}>
          <option value="pt-br" selected={i18n === 'pt-br'}>
            pt-br
          </option>
          <option value="en" selected={i18n === 'en'}>
            en
          </option>
        </Select>
      </Container>
    )
  }
}

Header.propTypes = {
  phrases: PropTypes.shape({
    cv: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    listening: PropTypes.string.isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = () => ({
  phrases: header()
})

export default connect(mapStateToProps)(Header)
