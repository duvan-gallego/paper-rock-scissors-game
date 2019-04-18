import React from 'react';
import { shallow } from 'enzyme';

import Error404 from '..';

describe('<Error404 />', () => {
  it('Render Error404 page', () => {
    const wrapper = shallow(<Error404 />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
  it('Renders an `.global__empty_page`', () => {
    const wrapper = shallow(<Error404 />);
    expect(wrapper.find('.global__empty_page')).toHaveLength(1);
  });
  it('Test text', () => {
    const wrapper = shallow(<Error404 />);
    expect(wrapper.text()).toBe('Error 404: Page not found.');
  });
});
