import {
  header as enHeader,
  footer as enFooter,
  main as enMain,
  about as enAbout,
  timeline as enTimeline,
  listening as enListening,
  listeningLoading as enListeningLoading
} from './en'
import {
  header as ptHeader,
  footer as ptFooter,
  main as ptMain,
  about as ptAbout,
  timeline as ptTimeline,
  listening as ptListening,
  listeningLoading as ptListeningLoading
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
