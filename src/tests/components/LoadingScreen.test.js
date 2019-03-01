import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { LoadingScreen } from '../../components/LoadingScreen'
Enzyme.configure({ adapter: new Adapter() })

const mockReduxState = {}

const fns = {}

const rerender = (props, additionalProps) =>
  shallow(<LoadingScreen {...props} {...additionalProps} />)

let scope

describe('<LoadingScreen />', () => {
  beforeEach(() => {
    scope = Object.assign({}, mockReduxState, fns)
  })

  it('Should render the <LoadingScreen />.', () => {
    const wrapper = rerender(scope)
    expect(wrapper).toMatchSnapshot()
  })
})
