import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SettingsOptionProfile } from '../../components/SettingsOptionProfile'
Enzyme.configure({ adapter: new Adapter() })

const mockReduxState = {
  app: {},
  firebase: {
    user: {
      displayName: 'Test DisplayName',
      email: 'fake@email.com',
      photoURL: 'fakeURL'
    }
  }
}

const fns = {
  dispatch: jest.fn()
}

const rerender = (props, additionalProps) =>
  shallow(<SettingsOptionProfile {...props} {...additionalProps} />)

let scope

describe('<SettingsOptionProfile />', () => {
  beforeEach(() => {
    scope = Object.assign({}, mockReduxState, fns)
  })

  it('Should render the <SettingsOptionProfile />.', () => {
    const wrapper = rerender(scope)
    expect(wrapper).toMatchSnapshot()
  })
})
