import { shallow } from 'enzyme'

import Title from './index'

describe('Title', () => {
  const wrapper = shallow(
    <Title id="title-test">
      content of title
    </Title>
  )

  it('original children is visible', () => {
    expect(wrapper.find('#title-test').text()).toEqual('content of title')
  })
})
