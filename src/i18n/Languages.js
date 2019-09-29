import { header as enHeader } from './en'
import { header as ptHeader } from './pt-br'

const DEFAULT = 'pt-br'

export function header() {
  let i18n = localStorage.getItem('i18n')
  i18n = i18n || DEFAULT
  return i18n === DEFAULT ? ptHeader : enHeader
}
