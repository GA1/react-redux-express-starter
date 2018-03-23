export function addCharactersReceivedFromBackend(characters) {
  return {
    type: "ADD_CHARACTERS_RECEIVED_FROM_BACKEND",
    payload: {
      characters: characters,
    },
  };
}
export function startLoadingCharactersFromBackend() {
  return {
    type: "START_LOADING_CHARACTERS_FROM_BACKEND",
  };
}
export function stopLoadingCharactersFromBackend() {
  return {
    type: "STOP_LOADING_CHARACTERS_FROM_BACKEND",
  };
}
