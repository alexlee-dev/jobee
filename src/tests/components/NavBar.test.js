import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { NavBar } from '../../components/NavBar'
Enzyme.configure({ adapter: new Adapter() })

const mockReduxState = {
  app: {
    currentScreen: 'jobs'
  },
  firebase: {
    user: {
      photoURL: 'fakeURL'
    }
  }
}

const fns = {
  dispatch: jest.fn()
}

const rerender = (props, additionalProps) =>
  shallow(<NavBar {...props} {...additionalProps} />)

let scope

describe('<NavBar />', () => {
  beforeEach(() => {
    scope = Object.assign({}, mockReduxState, fns)
  })

  it('Should render the <NavBar />.', () => {
    const wrapper = rerender(scope)
    expect(wrapper).toMatchSnapshot()
  })
})
