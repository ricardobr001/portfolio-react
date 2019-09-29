import React, { Component } from 'react'

import { FaUser, FaVolumeUp, FaPortrait } from 'react-icons/fa'
import { Container, Page, Select } from './styles'

import { header } from '../../i18n/Languages'

export default class Header extends Component {
  constructor() {
    super()

    this.state = {
      i18n: header()
    }
  }

  handleLanguage(i18n) {
    localStorage.setItem('i18n', i18n)

    this.setState({ i18n: header() })
  }

  render() {
    const { i18n } = this.state

    return (
      <Container>
        <ul>
          <li>
            <Page to="/about">
              <div>
                <FaUser size={22} />
                <strong>{i18n.about}</strong>
              </div>
            </Page>
          </li>
          <li>
            <Page to="/listening">
              <div>
                <FaVolumeUp size={22} />
                <strong>{i18n.listening}</strong>
              </div>
            </Page>
          </li>
          <li>
            <Page to="/cv">
              <div>
                <FaPortrait size={22} />
                <strong>{i18n.cv}</strong>
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
