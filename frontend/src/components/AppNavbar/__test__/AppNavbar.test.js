import React from 'react';
import { shallow } from 'enzyme';

import AppNavbar from '..';

describe('<AppNavbar />', () => {
  it('Renders AppNavbar', () => {
    const wrapper = shallow(<AppNavbar />);
    expect(wrapper.find('withRouter(MenuOptions)')).toHaveLength(1);
  });
  it('Renders a `.appNavBar"`', () => {
    const wrapper = shallow(<AppNavbar />);
    expect(wrapper.find('.appNavBar')).toHaveLength(1);
  });
});