import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ActionBar } from '../../components/ActionBar'
Enzyme.configure({ adapter: new Adapter() })

const mockReduxState = {
  app: {
    isLoading: false
  }
}

const fns = {
  dispatch: jest.fn()
}

const rerender = props => shallow(<ActionBar {...props} />)

let scope

describe('<ActionBar />', () => {
  beforeEach(() => {
    scope = Object.assign({}, mockReduxState, fns)
  })

  it('Should render the <ActionBar />.', () => {
    const wrapper = rerender(scope)
    expect(wrapper).toMatchSnapshot()
  })
})
