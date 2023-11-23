import AddNewQuestion from '../components/AddNewQuestion';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { exampleState } from './exampleState';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const store = mockStore(exampleState);

describe('AddNewQuestion', () => {
  it('renders successfully', () => {
    var component = render(
      <Provider store={store}>
        <AddNewQuestion/>
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
