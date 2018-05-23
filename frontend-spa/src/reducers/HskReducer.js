
const galleryReducer = (state = {
  messages: [],
  isLoading: true,
}, action) => {

  let payload = action.payload

  switch (action.type) {
    case "ADD_MESSAGE_RECEIVED_FROM_BACKEND":
      state = {
        ...state,
        messages: state.messages.concat(payload.messages),
        isLoading: false
      };
      break;

    case "START_LOADING_MESSAGE_FROM_BACKEND":
      state = {
        ...state,
        isLoading: true
      };
      break;

    case "STOP_LOADING_MESSAGE_FROM_BACKEND":
      state = {
        ...state,
        isLoading: false
      };
      break;

    default:
      break;
  }
  return state;
};

export default galleryReducer;