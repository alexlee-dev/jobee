import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Settings } from '../../screens/Settings'
Enzyme.configure({ adapter: new Adapter() })

const mockReduxState = {}

const fns = {}

const rerender = (props, additionalProps) =>
  shallow(<Settings {...props} {...additionalProps} />)

let scope

describe('<Settings />', () => {
  beforeEach(() => {
    scope = Object.assign({}, mockReduxState, fns)
  })

  it('Should render the <Settings />.', () => {
    const wrapper = rerender(scope)
    expect(wrapper).toMatchSnapshot()
  })
})
