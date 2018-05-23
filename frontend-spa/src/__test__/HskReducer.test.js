import r from '../reducers/HskReducer'
import {
  setMessageFromBackend
} from '../actions/Actions'


describe('galleryReducer', () => {

  it('should properly add messages from the first page', () => {
    expect(r({
        message: "",
        isLoading: true,
      }, setMessageFromBackend("hello world")
    )).toEqual({
        message: "hello world",
        isLoading: false,
      }
    )
  })


})