
const galleryReducer = (state = {
  characters: [],
  isLoading: false,
}, action) => {

  let payload = action.payload

  switch (action.type) {
    case "ADD_CHARACTERS_RECEIVED_FROM_BACKEND":
      state = {
        ...state,
        characters: state.characters.concat(payload.characters),
        isLoading: false
      };
      break;

    default:
      break;
  }
  return state;
};

export default galleryReducer;