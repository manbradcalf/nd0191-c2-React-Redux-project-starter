import Leaderboard from '../components/Leaderboard';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { exampleState } from './exampleState';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const store = mockStore(exampleState);

describe('Leaderboard', () => {
  it('renders successfully', () => {
    var component = render(
      <Provider store={store}>
        <Leaderboard />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
