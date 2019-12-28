import {
  header as enHeader,
  footer as enFooter,
  main as enMain,
  about as enAbout,
  timeline as enTimeline,
  listening as enListening,
  listeningLoading as enListeningLoading,
  graphic as enGraphic,
  graphicLoading as enGraphicLoading
} from './en'
import {
  header as ptHeader,
  footer as ptFooter,
  main as ptMain,
  about as ptAbout,
  timeline as ptTimeline,
  listening as ptListening,
  listeningLoading as ptListeningLoading,
  graphic as ptGraphic,
  graphicLoading as ptGraphicLoading
} from './pt-br'

const DEFAULT = 'pt-br'

export function header() {
  let i18n = localStorage.getItem('i18n')
  i18n = i18n || DEFAULT
  return i18n === DEFAULT ? ptHeader : enHeader
}

export function footer() {
  let i18n = localStorage.getItem('i18n')
  i18n = i18n || DEFAULT
  return i18n === DEFAULT ? ptFooter : enFooter
}

export function main() {
  let i18n = localStorage.getItem('i18n')
  i18n = i18n || DEFAULT
  return i18n === DEFAULT ? ptMain : enMain
}

export function about() {
  let i18n = localStorage.getItem('i18n')
  i18n = i18n || DEFAULT
  return i18n === DEFAULT ? ptAbout : enAbout
}

export function timeline() {
  let i18n = localStorage.getItem('i18n')
  i18n = i18n || DEFAULT
  return i18n === DEFAULT ? ptTimeline : enTimeline
}

export function listening() {
  let i18n = localStorage.getItem('i18n')
  i18n = i18n || DEFAULT
  return i18n === DEFAULT ? ptListening : enListening
}

export function listeningLoading() {
  let i18n = localStorage.getItem('i18n')
  i18n = i18n || DEFAULT
  return i18n === DEFAULT ? ptListeningLoading : enListeningLoading
}

export function cvLang() {
  const i18n = localStorage.getItem('i18n')
  return i18n || DEFAULT
}

export function graphic() {
  let i18n = localStorage.getItem('i18n')
  i18n = i18n || DEFAULT
  return i18n === DEFAULT ? ptGraphic : enGraphic
}

export function locale() {
  const i18n = localStorage.getItem('i18n')
  return i18n || DEFAULT
}

export function graphicLoading() {
  let i18n = localStorage.getItem('i18n')
  i18n = i18n || DEFAULT
  return i18n === DEFAULT ? ptGraphicLoading : enGraphicLoading
}
