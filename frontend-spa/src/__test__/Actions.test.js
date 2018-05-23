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

})