import { render, fireEvent, getByTestId } from '@testing-library/react';
import React from 'react';
import QuestionDetail from '../components/QuestionDetailPage';
import configureStore from 'redux-mock-store';
import { exampleState } from './exampleState';
import middleware from '../middleware';
import reducer from '../reducers';
import { Provider } from 'react-redux';
import { handleQuestionAnswered } from '../actions/shared';
import Router from 'react-router-dom';

const mockState = exampleState;
const mockStore = configureStore([]);
const store = mockStore(mockState);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('QuestionDetailPage', () => {
  it('will match the snapshot when example state is passed', () => {
    jest
      .spyOn(Router, 'useParams')
      .mockReturnValue({ id: 'vthrdm985a262al8qx3do' });

    var component = render(
      <Provider store={store}>
        <QuestionDetail />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it('matches the snapshot when no data is passed', () => {
    jest
      .spyOn(Router, 'useParams')
      .mockReturnValue({ id: 'vthrdm985a262al8qx3do' });

    var component = render(
      <Provider store={store}>
        <QuestionDetail />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });

  it('matches the snapshot when part of the data is missing', () => {
    jest
      .spyOn(Router, 'useParams')
      .mockReturnValue({ id: 'vthrdm985a262al8qx3do' });

    mockState.employees = {};

    var component = render(
      <Provider store={mockStore(mockState)}>
        <QuestionDetail />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });

  it('Dispatches event when optionOne selected', () => {
    store.dispatch = jest.fn();
    jest
      .spyOn(Router, 'useParams')
      .mockReturnValue({ id: 'vthrdm985a262al8qx3do' });

    var component = render(
      <Provider store={store}>
        <QuestionDetail />
      </Provider>
    );

    var voteOptionOneBtn = component.getByTestId('voteOptionOne');
    fireEvent.click(voteOptionOneBtn);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  // it("Dispatches event when optionTwo selected", () => {
  //   store.dispatch = jest.fn();
  //   var component = render(<Question store={store} />);
  //   var voteOptionTwoBtn = component.getByTestId("voteOptionTwo");

  //   fireEvent.click(voteOptionTwoBtn);

  //   expect(store.dispatch).toHaveBeenCalledTimes(1);
  // });
});
