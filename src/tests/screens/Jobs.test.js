import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Jobs } from '../../screens/Jobs'
Enzyme.configure({ adapter: new Adapter() })

const mockReduxState = {
  firebase: {
    database: {
      jobs: [{ data: { title: 'Job 1' } }]
    }
  }
}

const fns = {
  dispatch: jest.fn()
}

const rerender = (props, additionalProps) =>
  shallow(<Jobs {...props} {...additionalProps} />)

let scope

describe('<Jobs />', () => {
  beforeEach(() => {
    scope = Object.assign({}, mockReduxState, fns)
  })

  it('Should render the <Jobs />.', () => {
    const wrapper = rerender(scope)
    expect(wrapper).toMatchSnapshot()
  })
})
