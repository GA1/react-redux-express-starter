import r from '../reducers/HskReducer'
import {
  setMessageFromBackend
} from '../actions/Actions'


describe('galleryReducer', () => {

  it('should properly set the message loaded from backend', () => {
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