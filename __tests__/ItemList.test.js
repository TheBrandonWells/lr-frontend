import ItemList from '../src/components/Items/ItemList';
import {deleteItem, updateItem} from '../src/actions/itemActions'
import React from 'react';
import { mount } from 'enzyme';

describe('<ItemList> Component', () => {
  const exampleItems = [
    { grade: 55, gradeLetter: "F", id: 0, name: 'Clemens Romaguera',  picture: "https://s3.amazonaws.com/uifaces/faces/twitter/chatyrko/128.jpg"},
    { grade: 91, gradeLetter: "A", id: 1, name: 'Ressie Funk',  picture: "https://s3.amazonaws.com/uifaces/faces/twitter/amandabuzard/128.jpg"}
  ];
  const dispatch = function(){}
  const wrapper = mount(
    <ItemList items={exampleItems} deleteItem={deleteItem} updateItem={updateItem} dispatch={dispatch} />
  );
  it('should render 1 UL', () => {
    expect(wrapper.find('ul').length).toBe(1);
  });
  it('should render 2 list items', () => {
    expect(wrapper.find('li').length).toBe(2);
  });
});
