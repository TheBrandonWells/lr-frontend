import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ItemForm from '../src/components/ItemForm/ItemForm';

const mockStore = configureStore([]);
const store = mockStore({});
const wrapper = shallow(<Provider store={store}>
    <ItemForm />
</Provider>);

describe('Item Form Component', () => {
  it('renders without exploding', () => {
      expect(wrapper.text()).toBe('<ReduxForm />');
  });
});
