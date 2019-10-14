import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { cvLang } from '../../i18n/Languages'
import cvPt from '../../assets/docs/cv-pt.pdf'
import cvEn from '../../assets/docs/cv-en.pdf'

import { Container } from './styles'

function CV({ lang }) {
  return (
    <Container>
      <div>
        {lang === 'pt-br' && (
          <embed src={cvPt} width="100%" height="1000" type="application/pdf" />
        )}
        {lang === 'en' && (
          <embed src={cvEn} width="100%" height="1000" type="application/pdf" />
        )}
      </div>
    </Container>
  )
}

CV.propTypes = {
  lang: PropTypes.string.isRequired
}

const mapStateToProps = () => ({
  lang: cvLang()
})

export default connect(mapStateToProps)(CV)
