import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SignInButtons } from '../../components/SignInButtons'
Enzyme.configure({ adapter: new Adapter() })

const mockReduxState = {}

const fns = {}

const rerender = (props, additionalProps) =>
  shallow(<SignInButtons {...props} {...additionalProps} />)

let scope

describe('<SignInButtons />', () => {
  beforeEach(() => {
    scope = Object.assign({}, mockReduxState, fns)
  })

  it('Should render the <SignInButtons />.', () => {
    const wrapper = rerender(scope)
    expect(wrapper).toMatchSnapshot()
  })
})
