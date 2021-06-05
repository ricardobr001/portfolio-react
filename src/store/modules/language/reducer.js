import produce from 'immer'

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
