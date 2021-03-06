import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import ReactApexChart from 'react-apexcharts'
import moment from 'moment'
import ptMoment from 'moment/locale/pt-br'
import enMoment from 'moment/locale/en-gb'

import MusicLoading from '../../components/MusicLoading'

import api from '../../services/api'
import {
  graphic as graphicLang,
  locale,
  graphicLoading
} from '../../i18n/Languages'

import { Container } from './styles'
import { generateGraphicOptions } from './graphicOptions'

class Graphic extends Component {
  constructor(props) {
    super(props)

    const { graphicTitle, xaxisTitle, yaxisTitle } = props.phrases

    this.state = {
      options: generateGraphicOptions(graphicTitle, xaxisTitle, yaxisTitle),
      series: [],
      loading: true
    }
  }

  async componentDidMount() {
    const { loading } = this.state
    const res = await api.get('/graphicInfo/20')
    const { series } = res.data

    if (locale() === 'pt-br') {
      moment.locale('pt-br', ptMoment)
    } else {
      moment.locale('en', enMoment)
    }

    this.setState({ series, loading: !loading })
  }

  componentDidUpdate(prevProps) {
    const { phrases } = this.props

    if (prevProps.phrases !== phrases) {
      if (locale() === 'pt-br') {
        moment.locale('pt-br', ptMoment)
      } else {
        moment.locale('en', enMoment)
      }

      const { graphicTitle, xaxisTitle, yaxisTitle } = phrases

      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        options: generateGraphicOptions(graphicTitle, xaxisTitle, yaxisTitle)
      })
    }
  }

  render() {
    const { options, series, loading } = this.state
    const { loadingPhrases } = this.props

    return (
      <Container>
        {loading ? (
          <MusicLoading phrases={loadingPhrases} />
        ) : (
          <ReactApexChart
            options={options}
            series={series}
            type="line"
            width="1280"
          />
        )}
      </Container>
    )
  }
}

Graphic.propTypes = {
  phrases: propTypes.shape({
    xaxisTitle: propTypes.string.isRequired,
    yaxisTitle: propTypes.string.isRequired,
    graphicTitle: propTypes.string.isRequired
  }).isRequired,
  loadingPhrases: propTypes.shape({
    loading: propTypes.string.isRequired,
    joke: propTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = () => ({
  phrases: graphicLang(),
  loadingPhrases: graphicLoading()
})

export default connect(mapStateToProps)(Graphic)
