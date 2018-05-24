import r from '../reducers/Reducer'
import {
  setMessageFromBackend, startLoadingMessageFromBackend, stopLoadingMessageFromBackend
} from '../actions/Actions'


describe('reducer', () => {

  it('should properly set the message loaded from backend', () => {
    expect(r({
        message: null,
        isLoading: true,
      }, setMessageFromBackend("hello world")
    )).toEqual({
        message: "hello world",
        isLoading: false,
      }
    )
  })

  it('should properly start loading the message from backend', () => {
    expect(r({
        message: null,
        isLoading: false,
      }, startLoadingMessageFromBackend()
    )).toEqual({
        message: null,
        isLoading: true,
      }
    )
  })

  it('should properly stop loading the message from backend', () => {
    expect(r({
        message: null,
        isLoading: true,
      }, stopLoadingMessageFromBackend()
    )).toEqual({
        message: null,
        isLoading: false,
      }
    )
  })



})