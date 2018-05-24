import * as actions from '../actions/Actions'

var message = 'hello world'

describe('actions', () => {
  it('should create an action to set the message received from backend', () => {
    const expectedAction = {
      type: "SET_MESSAGE_RECEIVED_FROM_BACKEND",
      payload: {
        message: message
      }
    }
    expect(actions.setMessageFromBackend(message)).toEqual(expectedAction)
  })

  it('should create an action to start loading the message from backend', () => {
    const expectedAction = {
      type: "START_LOADING_MESSAGE_FROM_BACKEND",
    }
    expect(actions.startLoadingMessageFromBackend(message)).toEqual(expectedAction)
  })

  it('should create an action to stop loading the message from backend', () => {
    const expectedAction = {
      type: "STOP_LOADING_MESSAGE_FROM_BACKEND",
    }
    expect(actions.stopLoadingMessageFromBackend(message)).toEqual(expectedAction)
  })

})