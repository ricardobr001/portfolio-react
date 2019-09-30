import React, { Component } from 'react'

import { Container } from './styles'
import { footer } from '../../i18n/Languages'

import { social } from './social'

export default class Footer extends Component {
  constructor() {
    super()

    this.state = {
      i18n: footer()
    }
  }

  render() {
    const { i18n } = this.state

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
            {i18n.graduated}
            <b>
              <a href="https://www.sorocaba.ufscar.br" target="_blank">
                UFSCar Sorocaba
              </a>
            </b>
          </p>

          <p>
            {i18n.currently}
            <b>
              <a href="https://gamersclub.com.br/" target="_blank">
                Gamers Club
              </a>
            </b>
          </p>
        </div>
      </Container>
    )
  }
}
