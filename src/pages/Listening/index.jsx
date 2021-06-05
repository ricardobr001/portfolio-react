import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

import CountUp from 'react-countup'
import { FaRedoAlt } from 'react-icons/fa'
import MusicLoading from '../../components/MusicLoading'

import {
  listening as langListening,
  listeningLoading
} from '../../i18n/Languages'
import api from '../../services/api'
import notFoundBand from '../../assets/img/rockbandnotfound.png'

import { Container, Row, HvrBox, Buttonn, DivButtons, Master, LyricButton, LyricNotFound } from './styles'

class Listening extends Component {
  constructor() {
    super()

    this.state = {
      songTitle: '',
      artist: '',
      songImage: '',
      listening: false,
      lyric: '',
      lastTotalScrobble: 0,
      totalScrobble: 0,
      showLyric: false,
      reloading: false,
      loading: true,
      artists: []
    }

    this.handleReloadLyric = this.handleReloadLyric.bind(this)
  }

  async componentDidMount() {
    const [resLastSong, resTopArtists] = await Promise.all([
      api.get('/v2/lastSong'),
      api.get('/lastTopArtists')
    ])

    const {
      name,
      image,
      artist,
      totalScrobble,
      url,
      listening
    } = resLastSong.data
    const artists = this.treatArtistsResponse(resTopArtists.data)

    this.setState({
      songTitle: name,
      songImage: image,
      artist,
      totalScrobble,
      listening,
      url,
      artists,
      loading: false
    })
  }

  treatArtistsResponse = artists => {
    return artists.reduce((acc, curr) => {
      const obj = curr

      if (obj.image === 'assets/img/rockbandnotfound.png') {
        obj.image = notFoundBand
      }

      return [...acc, curr]
    }, [])
  }

  async handleReloadLyric() {
    let { totalScrobble } = this.state
    this.setState({ reloading: true, lastTotalScrobble: totalScrobble })

    const res = await api.get('/v2/lastSong')
    totalScrobble = res.data.totalScrobble
    const { name, image, artist, url, listening } = res.data

    this.setState({
      songTitle: name,
      songImage: image,
      artist,
      totalScrobble,
      listening,
      url,
      reloading: false
    })
  }

  render() {
    const {
      songTitle,
      artist,
      songImage,
      lastTotalScrobble,
      totalScrobble,
      listening,
      url,
      artists,
      showLyric,
      reloading,
      loading
    } = this.state
    const { phrases, loadingPhrases } = this.props

    return (
      <Master showLyric={showLyric}>
        {loading ? (
          <MusicLoading phrases={loadingPhrases} />
        ) : (
          <Container>
            <Row>
              <div>
                <div>
                  {listening ? <h1>{phrases.now}</h1> : <h1>{phrases.last}</h1>}
                  <p>
                    <b>{songTitle}</b> - <b>{artist}</b>
                  </p>
                  <img src={songImage} alt={songTitle} />
                  <DivButtons>
                    {url === '404 NOT FOUND\n¯\\_(ツ)_/¯' ?
                      <LyricNotFound>{phrases.lyric}</LyricNotFound> :
                      <LyricButton
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        type="button"
                      >
                        {phrases.lyric}
                      </LyricButton>
                    }
                    <Buttonn
                      reloading={reloading}
                      type="button"
                      onClick={this.handleReloadLyric}
                    >
                      <FaRedoAlt size={15} />
                    </Buttonn>
                  </DivButtons>
                </div>
              </div>
              <div>
                <div>
                  <p>{phrases.total}</p>
                  <CountUp
                    start={lastTotalScrobble}
                    end={totalScrobble}
                    separator="."
                    duration={4}
                  />
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
          </Container>
        )}
      </Master>
    )
  }
}

Listening.propTypes = {
  phrases: propTypes.shape({
    now: propTypes.string.isRequired,
    last: propTypes.string.isRequired,
    total: propTypes.string.isRequired,
    artists: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
    close: propTypes.string.isRequired
  }).isRequired,
  loadingPhrases: propTypes.shape({
    loading: propTypes.string.isRequired,
    joke: propTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = () => ({
  phrases: langListening(),
  loadingPhrases: listeningLoading()
})

export default connect(mapStateToProps)(Listening)
