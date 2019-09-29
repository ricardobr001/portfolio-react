import React from 'react'

import { FaUser, FaVolumeUp, FaPortrait } from 'react-icons/fa'
import { Container, Page } from './styles'

export default function header() {
  return (
    <Container>
      <ul>
        <li>
          <Page to="/about">
            <div>
              <FaUser size={22} />
              <strong>Sobre mim</strong>
            </div>
          </Page>
        </li>
        <li>
          <Page to="/listening">
            <div>
              <FaVolumeUp size={22} />
              <strong>Ouvindo</strong>
            </div>
          </Page>
        </li>
        <li>
          <Page to="/cv">
            <div>
              <FaPortrait size={22} />
              <strong>Currículo</strong>
            </div>
          </Page>
        </li>
      </ul>
    </Container>
  )
}
