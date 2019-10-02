import produce from 'immer'
// import * as Phrases from '../../../i18n/Languages'

export default function language(state = {}, action) {
  switch (action.type) {
    case '@lang/SAVE_LANG':
      return produce(state, draft => {
        const { lang } = action

        draft.i18n = lang
      })
    default:
      return state
  }
}
