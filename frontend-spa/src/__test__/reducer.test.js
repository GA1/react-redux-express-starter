import r from '../reducers/reducer'
import {
  setMessageFromBackend,
  startLoadingMessageFromBackend,
  stopLoadingMessageFromBackend,
} from '../actions/actions'

describe('reducer', () => {
  it('should properly set the message loaded from backend', () => {
    expect(
      r(
        {
          message: null,
          isCallingBackend: true,
        },
        setMessageFromBackend('hello world')
      )
    ).toEqual({
      message: 'hello world',
      isCallingBackend: false,
    })
  })

  it('should properly start loading the message from backend', () => {
    expect(
      r(
        {
          message: null,
          isCallingBackend: false,
        },
        startLoadingMessageFromBackend()
      )
    ).toEqual({
      message: null,
      isCallingBackend: true,
    })
  })

  it('should properly stop loading the message from backend', () => {
    expect(
      r(
        {
          message: null,
          isCallingBackend: true,
        },
        stopLoadingMessageFromBackend()
      )
    ).toEqual({
      message: null,
      isCallingBackend: false,
    })
  })
})
