const getMainReducer = (state) => {
  return state.mainReducer
}

export const getMessage = (state) => {
  return getMainReducer(state).message
}

export const isCallingBackend = (state) => {
  return getMainReducer(state).isCallingBackend
}

export const wasBackendCalledSuccessful = (state) => {
  return !isCallingBackend(state) && getMessage(state)
}
