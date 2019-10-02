import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { FaUser, FaVolumeUp, FaPortrait } from 'react-icons/fa'
import { Container, Page, Select } from './styles'

import { header } from '../../i18n/Languages'

class Header extends Component {
  handleLanguage(lang) {
    const { dispatch } = this.props
    localStorage.setItem('i18n', lang)

    dispatch({
      type: '@lang/SAVE_LANG',
      lang
    })
  }

  render() {
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
          <option value="pt-br">pt-br</option>
          <option value="en">en</option>
        </Select>
      </Container>
    )
  }
}

Header.propTypes = {
  phrases: PropTypes.shape({
    cv: PropTypes.string,
    about: PropTypes.string,
    listening: PropTypes.string
  }).isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = () => ({
  phrases: header()
})

export default connect(mapStateToProps)(Header)
