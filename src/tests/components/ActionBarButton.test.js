import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ActionBarButton } from '../../components/ActionBarButton'
import { User } from 'grommet-icons'
Enzyme.configure({ adapter: new Adapter() })

const mockReduxState = {
  app: {
    currentScreen: 'jobs'
  }
}

const fns = {
  dispatch: jest.fn()
}

const rerender = (props, additionalProps) =>
  shallow(<ActionBarButton {...props} {...additionalProps} />)

let scope

describe('<ActionBarButton />', () => {
  beforeEach(() => {
    scope = Object.assign({}, mockReduxState, fns)
  })

  it('Should render the <ActionBarButton /> for the "jobs" screen.', () => {
    const wrapper = rerender(scope, { icon: User, screen: 'jobs' })
    expect(wrapper).toMatchSnapshot()
  })

  it('Should call dispatch() on button click.', () => {
    const wrapper = rerender(scope, { icon: User, screen: 'jobs' })
    wrapper
      .dive()
      .find('FocusableComponent')
      .simulate('click', {})
    expect(fns.dispatch).toHaveBeenCalled()
  })
})
