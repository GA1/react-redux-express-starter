export function addMessageFromBackend(messages) {
  return {
    type: "ADD_MESSAGE_RECEIVED_FROM_BACKEND",
    payload: {
      messages: messages,
    },
  };
}
export function startLoadingMessageFromBackend() {
  return {
    type: "START_LOADING_MESSAGE_FROM_BACKEND",
  };
}
export function stopLoadingMessageFromBackend() {
  return {
    type: "STOP_LOADING_MESSAGE_FROM_BACKEND",
  };
}
