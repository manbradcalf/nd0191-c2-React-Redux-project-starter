import Question from '../components/Question';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { exampleState } from './exampleState';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
const mockStore = configureStore([]);
const store = mockStore(exampleState);

describe('Question', () => {
  it('renders successfully', () => {
    var component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Question question={exampleState.questions.xj352vofupe1dqz9emx13r} />
        </BrowserRouter>
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
