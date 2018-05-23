import r from '../reducers/HskReducer'
import {
  addMessageFromBackend
} from '../actions/Actions'

var message = {
  'message': 'hello world',
}


describe('galleryReducer', () => {

  it('should properly add messages from the first page', () => {
    expect(r({
          messages: [],
          isLoading: true,
        }, addMessageFromBackend([message])
    )).toEqual({
          messages: [message],
          isLoading: false,
        }
    )
  })


})