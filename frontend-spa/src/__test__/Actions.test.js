import * as actions from '../actions/Actions'

var dummyCharacter = {
  'simplifiedCharacter': '的',
  'hskLevel': 1,
  'pinyin': 'de',
}

describe('actions', () => {
  it('should create an action to add characters loaded from backend', () => {
    const expectedAction = {
      type: "ADD_CHARACTERS_RECEIVED_FROM_BACKEND",
      payload: {
        characters: [dummyCharacter]
      }
    }
    expect(actions.addCharactersReceivedFromBackend([dummyCharacter])).toEqual(expectedAction)
  })

})