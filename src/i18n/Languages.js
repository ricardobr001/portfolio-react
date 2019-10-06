import {
  header as enHeader,
  footer as enFooter,
  main as enMain,
  about as enAbout
} from './en'
import {
  header as ptHeader,
  footer as ptFooter,
  main as ptMain,
  about as ptAbout
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
