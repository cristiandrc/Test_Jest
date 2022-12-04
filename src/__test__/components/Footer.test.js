import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer/>', () => {
  const footer = mount(<Footer />);

  test('Component Render Footer', () => {
    expect(footer.length).toEqual(1);
  });

  test('H1 Render', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
