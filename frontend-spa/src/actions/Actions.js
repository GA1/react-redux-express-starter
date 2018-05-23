export function setMessageFromBackend(message) {
  return {
    type: "SET_MESSAGE_RECEIVED_FROM_BACKEND",
    payload: {
      message: message,
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
