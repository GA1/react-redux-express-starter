import r from '../reducers/HskReducer'
import {
  addCharactersReceivedFromBackend
} from '../actions/Actions'

var dummyCharacter = {
  'simplifiedCharacter': '的',
  'hskLevel': 1,
  'pinyin': 'de',
}


describe('galleryReducer', () => {

  it('should properly add characters from the first page', () => {
    expect(r({
          characters: [],
          isLoading: true,
        }, addCharactersReceivedFromBackend([dummyCharacter])
    )).toEqual({
          characters: [dummyCharacter],
          isLoading: false,
        }
    )
  })


})