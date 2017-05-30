import Statistics from '../src/components/Statistics/Statistics';
import React from 'react';
import { mount } from 'enzyme';


describe('<Statistics> Component', () => {
  const lowest = 4;
  const highest = 120;
  const avg = 67;

  const wrapper = mount(
    <Statistics lowest={lowest} highest={highest} avg={avg} />
  );

  it('should render 3 list items', () => {
    expect(wrapper.find('li').length).toBe(3);
  });
  it('should render 4 on the lowest p tag', () => {
    const p = wrapper.find('p').at(0);
    expect(p.text()).toBe('4');
  });
  it('should render 120 on the highest p tag', () => {
    const p = wrapper.find('p').at(1);
    expect(p.text()).toBe('120');
  });
  it('should render 67 on the avg p tag', () => {
    const p = wrapper.find('p').at(2);
    expect(p.text()).toBe('67');
  });
  it('props.lowest should equal 4', () => {
    expect(wrapper.prop('lowest')).toBe(4);
  });
  it('props.avg should equal 4', () => {
    expect(wrapper.prop('avg')).toBe(67);
  });
});
