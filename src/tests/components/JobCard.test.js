import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { JobCard } from '../../components/JobCard'
Enzyme.configure({ adapter: new Adapter() })

const mockReduxState = {}

const fns = {}

const rerender = (props, additionalProps) =>
  shallow(<JobCard {...props} {...additionalProps} />)

let scope

describe('<JobCard />', () => {
  beforeEach(() => {
    scope = Object.assign({}, mockReduxState, fns)
  })

  it('Should render the <JobCard />.', () => {
    const wrapper = rerender(scope)
    expect(wrapper).toMatchSnapshot()
  })
})
