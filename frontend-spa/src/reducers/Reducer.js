
const reducer = (state = {
  message: null,
  isCallingBackend: true,
}, action) => {

  let payload = action.payload

  switch (action.type) {
    case "SET_MESSAGE_RECEIVED_FROM_BACKEND":
      state = {
        ...state,
        message: payload.message,
        isCallingBackend: false
      };
      break;

    case "START_LOADING_MESSAGE_FROM_BACKEND":
      state = {
        ...state,
        isCallingBackend: true
      };
      break;

    case "STOP_LOADING_MESSAGE_FROM_BACKEND":
      state = {
        ...state,
        isCallingBackend: false
      };
      break;

    default:
      break;
  }
  return state;
};

export default reducer;