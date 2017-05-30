import Item from '../src/components/Items/Item';
import { deleteItem, updateItem } from '../src/actions/itemActions'
import React from 'react';
import { mount } from 'enzyme';

describe('Item Component', () => {
  const exampleItem = { grade: 55, gradeLetter: "F", id: 0, name: 'Clemens Romaguera',  picture: "https://s3.amazonaws.com/uifaces/faces/twitter/chatyrko/128.jpg"};
  const wrapper = mount(
    <Item item={exampleItem} deleteItem={deleteItem} updateItem={updateItem} />
  );
  it('ItemComponent renders the grade text inside it', () => {
    const p = wrapper.find('.grade');
    expect(p.text()).toBe('F');
  });
  it('ItemComponent renders the name text inside it', () => {
    const p = wrapper.find('.cardHeader span');
    expect(p.text()).toBe('Clemens Romaguera');
  });
});
