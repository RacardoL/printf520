// eslint-disable-next-line import/named
import { GET_DETAIL_LIST } from './acitonTypes'


const defaultState = {
  a: 'hello world'
}


export default (state = defaultState, action) => {
  if (action.type === GET_DETAIL_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.a = action.value
    return newState
  }

  return state
}
