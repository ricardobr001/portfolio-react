import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

import { listening } from '../../i18n/Languages'
import api from '../../services/api'
import { Container } from './styles'

class Listening extends Component {
  constructor() {
    super()

    this.state = {
      songTitle: '',
      artist: '',
      songImage: '',
      lyric: '',
      totalScrobble: 0,
      artists: []
    }
  }

  async componentDidMount() {
    const [resLastSong, resTopArtists] = await Promise.all([
      api.get('/lastSong'),
      api.get('/lastTopArtists')
    ])

    const { name, image, artist, totalScrobble, lyric } = resLastSong.data
    const artists = resTopArtists.data

    this.setState({
      songTitle: name,
      songImage: image,
      artist,
      totalScrobble,
      lyric,
      artists
    })
  }

  render() {
    const { songTitle, artist, songImage, totalScrobble, artists } = this.state
    const { phrases } = this.props

    return (
      <Container>
        <div>
          <p>
            <h1>{phrases.now}</h1>
            <p>
              <b>{songTitle}</b> - <b>{artist}</b>
            </p>
            <img src={songImage} alt={songTitle} />
          </p>
        </div>
        <div>
          <div>
            <p>{phrases.total}</p>
            <h1>{totalScrobble}</h1>
          </div>
        </div>
        <div>
          <div>
            <h1>{phrases.artists}</h1>
            {artists.map(a => (
              <img src={a.image} alt="a.mbid" />
            ))}
          </div>
        </div>
      </Container>
    )
  }
}

Listening.propTypes = {
  phrases: propTypes.shape({
    now: propTypes.string.isRequired,
    total: propTypes.string.isRequired,
    artists: propTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = () => ({
  phrases: listening()
})

export default connect(mapStateToProps)(Listening)
