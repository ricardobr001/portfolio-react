import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

import CountUp from 'react-countup'
import { FaRedoAlt } from 'react-icons/fa'
import Lyric from '../../components/Lyric'
import MusicLoading from '../../components/MusicLoading'

import { listening as langListening } from '../../i18n/Languages'
import api from '../../services/api'
import notFoundBand from '../../assets/img/rockbandnotfound.png'

import { Container, Row, HvrBox, Buttonn, DivButtons, Master } from './styles'

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

    this.handleShowLyric = this.handleShowLyric.bind(this)
    this.handleReloadLyric = this.handleReloadLyric.bind(this)
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
    const artists = this.treatArtistsResponse(resTopArtists.data)

    this.setState({
      songTitle: name,
      songImage: image,
      artist,
      totalScrobble,
      listening,
      lyric,
      artists,
      loading: false
    })
  }

  handleShowLyric = () => {
    const { showLyric } = this.state

    this.setState({ showLyric: !showLyric })
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

    const res = await api.get('/lastSong')
    totalScrobble = res.data.totalScrobble
    const { name, image, artist, lyric, listening } = res.data

    this.setState({
      songTitle: name,
      songImage: image,
      artist,
      totalScrobble,
      listening,
      lyric,
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
      lyric,
      artists,
      showLyric,
      reloading,
      loading
    } = this.state
    const { phrases } = this.props

    return (
      <Master showLyric={showLyric}>
        {loading ? (
          <MusicLoading />
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
                    <Buttonn type="button" onClick={this.handleShowLyric}>
                      {phrases.lyric}
                    </Buttonn>
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
    lyric: propTypes.string.isRequired,
    close: propTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = () => ({
  phrases: langListening()
})

export default connect(mapStateToProps)(Listening)
