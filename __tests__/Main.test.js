import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Main from '../src/components/Main';

const mockStore = configureStore([]);
const store = mockStore({});
const wrapper = shallow(<Provider store={store}>
    <Main />
</Provider>);

describe('Main Component', () => {
  it('renders without exploding', () => {
      expect(wrapper.text()).toBe('<Connect(Main) />');
  });
});
