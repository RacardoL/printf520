const defaultState = {
  a: 'hello world'
}


export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.a = action.value
    return newState
  }

  return state
}
