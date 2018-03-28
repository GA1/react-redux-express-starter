import r from '../reducers/HskReducer'
import {
  addMessagesFromBackend
} from '../actions/Actions'

var message = {
  'message': 'hello world',
}


describe('galleryReducer', () => {

  it('should properly add messages from the first page', () => {
    expect(r({
          messages: [],
          isLoading: true,
        }, addMessagesFromBackend([message])
    )).toEqual({
          messages: [message],
          isLoading: false,
        }
    )
  })


})