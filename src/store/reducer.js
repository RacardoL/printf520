import { ASYNC_LIST, GET_TYPE } from './acitonTypes'

const defaultState = {
  list: [],
  type: []
}


export default (state = defaultState, action) => {
  if (action.type === ASYNC_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.value
    return newState
  }

  if (action.type === GET_TYPE) {
    console.log('reducer', action)
    const newState = JSON.parse(JSON.stringify(state))
    newState.type = action.value
    return newState
  }

  return state
}
