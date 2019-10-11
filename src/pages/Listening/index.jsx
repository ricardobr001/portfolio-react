import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

import Lyric from '../../components/Lyric'

import { listening as langListening } from '../../i18n/Languages'
import api from '../../services/api'
import { Container, Row, HvrBox, Buttonn } from './styles'

class Listening extends Component {
  constructor() {
    super()

    this.state = {
      songTitle: '',
      artist: '',
      songImage: '',
      listening: false,
      lyric: '',
      totalScrobble: 0,
      showLyric: false,
      artists: []
    }

    this.handleShowLyric = this.handleShowLyric.bind(this)
  }

  async componentDidMount() {
    const [resLastSong, resTopArtists] = await Promise.all([
      api.get('/lastSong'),
      api.get('/lastTopArtists')
    ])

    const {
      name,
      image,
      artist,
      totalScrobble,
      lyric,
      listening
    } = resLastSong.data
    const artists = resTopArtists.data

    this.setState({
      songTitle: name,
      songImage: image,
      artist,
      totalScrobble,
      listening,
      lyric,
      artists
    })
  }

  handleShowLyric = () => {
    const { showLyric } = this.state

    this.setState({ showLyric: !showLyric })
  }

  render() {
    const {
      songTitle,
      artist,
      songImage,
      totalScrobble,
      listening,
      lyric,
      artists,
      showLyric
    } = this.state
    const { phrases } = this.props

    return (
      <Container>
        <Row>
          <div>
            <div>
              {listening ? <h1>{phrases.now}</h1> : <h1>{phrases.last}</h1>}
              <p>
                <b>{songTitle}</b> - <b>{artist}</b>
              </p>
              <img src={songImage} alt={songTitle} />
              <Buttonn type="button" onClick={this.handleShowLyric}>
                {phrases.lyric}
              </Buttonn>
            </div>
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
                <HvrBox>
                  <img src={a.image} alt="a.mbid" />
                  <div>
                    <p>{a.name}</p>
                    <p>{a.playcount}</p>
                  </div>
                </HvrBox>
              ))}
            </div>
          </div>
        </Row>
        <CSSTransition
          in={showLyric}
          timeout={200}
          classNames="display"
          unmountOnExit
          appear
          enter
          exit
        >
          <Lyric lyric={lyric} />
        </CSSTransition>
        {showLyric && (
          <Buttonn type="button" onClick={this.handleShowLyric}>
            {phrases.close}
          </Buttonn>
        )}
      </Container>
    )
  }
}

Listening.propTypes = {
  phrases: propTypes.shape({
    now: propTypes.string.isRequired,
    last: propTypes.string.isRequired,
    total: propTypes.string.isRequired,
    artists: propTypes.string.isRequired,
    lyric: propTypes.string.isRequired,
    close: propTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = () => ({
  phrases: langListening()
})

export default connect(mapStateToProps)(Listening)
