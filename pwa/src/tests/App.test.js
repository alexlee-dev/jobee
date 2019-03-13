import React from 'react'
import '../firebase/init'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { App } from '../App'
Enzyme.configure({ adapter: new Adapter() })

const mockReduxState = {
  app: { currentScreen: null, isLoading: true },
  firebase: {
    database: { jobs: [] },
    hasCheckedForUser: false,
    user: { displayName: null, email: null, photoURL: null }
  }
}

const fns = {
  dispatch: jest.fn()
}

const rerender = (props, additionalProps) =>
  shallow(<App {...props} {...additionalProps} />)

let scope

describe('<App />', () => {
  beforeEach(() => {
    scope = Object.assign({}, mockReduxState, fns)
  })

  it('Should render the <App />.', () => {
    const wrapper = rerender(scope)
    expect(wrapper).toMatchSnapshot()
  })

  it('Should render the <App /> when it is done loading.', () => {
    const wrapper = rerender(scope, {
      app: { currentScreen: 'today', isLoading: false }
    })
    expect(wrapper).toMatchSnapshot()
  })

  it('Should render the <App /> when it is done loading, and there is a user displayName.', () => {
    const wrapper = rerender(scope, {
      app: { currentScreen: 'today', isLoading: false },
      firebase: {
        database: { jobs: [] },
        hasCheckedForUser: false,
        user: { displayName: 'Alex', email: null, photoURL: null }
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
