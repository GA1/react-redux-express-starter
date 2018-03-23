export function addCharactersReceivedFromBackend(characters) {
  return {
    type: "ADD_CHARACTERS_RECEIVED_FROM_BACKEND",
    payload: {
      characters: characters,
    },
  };
}
