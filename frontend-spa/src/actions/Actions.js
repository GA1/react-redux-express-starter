export function addMessagesFromBackend(messages) {
  return {
    type: "ADD_MESSAGE_RECEIVED_FROM_BACKEND",
    payload: {
      messages: messages,
    },
  };
}
export function startLoadingMessagesFromBackend() {
  return {
    type: "START_LOADING_MESSAGES_FROM_BACKEND",
  };
}
export function stopLoadingMessagesFromBackend() {
  return {
    type: "STOP_LOADING_MESSAGES_FROM_BACKEND",
  };
}
