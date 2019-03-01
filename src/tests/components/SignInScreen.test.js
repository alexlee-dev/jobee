import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SignInScreen } from '../../components/SignInScreen'
Enzyme.configure({ adapter: new Adapter() })

const mockReduxState = {}

const fns = {}

const rerender = (props, additionalProps) =>
  shallow(<SignInScreen {...props} {...additionalProps} />)

let scope

describe('<SignInScreen />', () => {
  beforeEach(() => {
    scope = Object.assign({}, mockReduxState, fns)
  })

  it('Should render the <SignInScreen />.', () => {
    const wrapper = rerender(scope)
    expect(wrapper).toMatchSnapshot()
  })
})
