import r, { initialState } from '../reducers/reducer'
import {
  setMessageFromBackend,
  startLoadingMessageFromBackend,
  stopLoadingMessageFromBackend,
} from '../actions/actions'
import { getMessage, isCallingBackend, wasLastCallSuccessful } from '../selectors/selectors'

describe('reducer', () => {
  const createFullState = (state) => ({
    mainReducer: state,
  })
  test("when it's not calling backend", () => {
    const state = initialState()
    const result = createFullState(state)

    expect(isCallingBackend(result)).toEqual(false)
    expect(getMessage(result)).toEqual(null)
  })

  it("when it's calling backend", () => {
    const state = r(initialState(), startLoadingMessageFromBackend())
    const result = createFullState(state)

    expect(isCallingBackend(result)).toEqual(true)
    expect(getMessage(result)).toEqual(null)
  })

  it('when call to backend was successful', () => {
    const message = 'message'
    const state1 = r(initialState(), startLoadingMessageFromBackend())
    const state2 = r(state1, setMessageFromBackend(message))
    const result = createFullState(state2)

    expect(isCallingBackend(result)).toEqual(false)
    expect(getMessage(result)).toEqual(message)
    expect(wasLastCallSuccessful(result)).toEqual(true)
  })

  it('when call to backend was unsuccessful', () => {
    const state1 = r(initialState(), startLoadingMessageFromBackend())
    const state2 = r(state1, stopLoadingMessageFromBackend())
    const result = createFullState(state2)

    expect(isCallingBackend(result)).toEqual(false)
    expect(getMessage(result)).toEqual(null)
    expect(wasLastCallSuccessful(result)).toEqual(false)
  })
})
