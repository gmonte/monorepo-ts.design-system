import { shallow } from 'enzyme'

import Subtitle from './index'

describe('Subtitle', () => {
  const wrapper = shallow(
    <Subtitle id="subtitle-test">
      content of subtitle
    </Subtitle>
  )

  it('original children is visible', () => {
    expect(wrapper.find('#subtitle-test').text()).toEqual('content of subtitle')
  })
})
