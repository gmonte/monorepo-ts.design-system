import { shallow } from 'enzyme'

import Button from './index'

describe('Button', () => {
  const spyOnClick = jest.fn()

  const wrapper = shallow(
    <Button
      id="button-test"
      onClick={ spyOnClick }
    >
      content of button
    </Button>
  )

  it('has children as content', () => {
    wrapper.find('#button-test').simulate('click')
    expect(wrapper.find('#button-test').text()).toEqual('content of button')
  })

  it('was clicked one time', () => {
    wrapper.find('#button-test').simulate('click')
    expect(spyOnClick).toBeCalledTimes(1)
  })
})
