export const initialState = () => ({
  message: null,
  isCallingBackend: false,
  lastCallWasSuccessful: false,
})

const reducer = (state = initialState(), action) => {
  let payload = action.payload

  switch (action.type) {
    case 'START_LOADING_MESSAGE_FROM_BACKEND':
      state = {
        ...state,
        isCallingBackend: true,
        lastCallWasSuccessful: false,
      }
      break
    case 'SET_MESSAGE_RECEIVED_FROM_BACKEND':
      state = {
        ...state,
        message: payload.message,
        isCallingBackend: false,
        lastCallWasSuccessful: true,
      }
      break
    case 'STOP_LOADING_MESSAGE_FROM_BACKEND':
      state = {
        ...state,
        isCallingBackend: false,
        lastCallWasSuccessful: false,
      }
      break

    default:
      break
  }
  return state
}

export default reducer
