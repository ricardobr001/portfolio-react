import React, { Component } from 'react'
import { connect } from 'react-redux'

import { FaUser, FaVolumeUp, FaPortrait } from 'react-icons/fa'
import { Container, Page, Select } from './styles'

import { header } from '../../i18n/Languages'

class Header extends Component {
  constructor() {
    super()

    this.state = {
      i18n: '',
      phrases: header()
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

const mapStateToProps = state => ({
  i18n: state.language.i18n,
  phrases: header()
})

export default connect(mapStateToProps)(Header)
