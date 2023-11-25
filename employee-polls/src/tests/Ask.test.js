import AddNewQuestion from '../components/AddNewQuestion';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { exampleState } from './exampleState';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureStore([]);
const store = mockStore(exampleState);

describe('AddNewQuestion', () => {
  it('renders successfully', () => {
    var component = render(
      <BrowserRouter>
        <Provider store={store}>
          <AddNewQuestion />
        </Provider>
      </BrowserRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
