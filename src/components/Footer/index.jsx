import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Container } from './styles'
import { footer } from '../../i18n/Languages'

import { social } from './social'

function Footer({ phrases }) {
  return (
    <Container>
      <div>
        {social.map(s => (
          <a
            key={s.link}
            href={s.link}
            title={s.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <s.icon size={34} />
          </a>
        ))}
      </div>
      <div>
        <p>
          {phrases.graduated}
          <b>
            <a
              href="https://www.sorocaba.ufscar.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              UFSCar Sorocaba
            </a>
          </b>
        </p>

        <p>
          {phrases.currently}
          <b>
            <a
              href="https://gamersclub.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gamers Club
            </a>
          </b>
        </p>
      </div>
    </Container>
  )
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
