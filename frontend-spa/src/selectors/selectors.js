const getMainReducer = (state) => {
  return state.mainReducer
}

export const getMessage = (state) => {
  return getMainReducer(state).message
}

export const isCallingBackend = (state) => {
  return getMainReducer(state).isCallingBackend
}

export const wasLastCallSuccessful = (state) => {
  return getMainReducer(state).lastCallWasSuccessful
}
