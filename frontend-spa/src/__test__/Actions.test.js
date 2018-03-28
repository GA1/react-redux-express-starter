import * as actions from '../actions/Actions'

var message = {
  'message': 'hello world',
}

describe('actions', () => {
  it('should create an action to add characters loaded from backend', () => {
    const expectedAction = {
      type: "ADD_MESSAGE_RECEIVED_FROM_BACKEND",
      payload: {
        messages: [message]
      }
    }
    expect(actions.addMessagesFromBackend([message])).toEqual(expectedAction)
  })

})