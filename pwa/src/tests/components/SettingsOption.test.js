import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SettingsOption } from '../../components/SettingsOption'
import { User } from 'grommet-icons'
Enzyme.configure({ adapter: new Adapter() })

const mockReduxState = {}

const fns = {
  handleClick: jest.fn()
}

const rerender = (props, additionalProps) =>
  shallow(<SettingsOption {...props} {...additionalProps} />)

let scope

describe('<SettingsOption />', () => {
  beforeEach(() => {
    scope = Object.assign({}, mockReduxState, fns)
  })

  it('Should render the <SettingsOption />.', () => {
    const wrapper = rerender(scope, { icon: User, label: 'Label' })
    expect(wrapper).toMatchSnapshot()
  })

  it('Should render the <SettingsOption /> with a ComingSoon tag.', () => {
    const wrapper = rerender(scope, {
      comingSoon: true,
      icon: User,
      label: 'Label'
    })
    expect(wrapper).toMatchSnapshot()
  })

  it('Should render the <SettingsOption /> with a top tag.', () => {
    const wrapper = rerender(scope, {
      icon: User,
      label: 'Label',
      top: true
    })
    expect(wrapper).toMatchSnapshot()
  })
})
