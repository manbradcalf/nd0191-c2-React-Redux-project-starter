import React from 'react';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';
import { createRoot } from 'react-dom/client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const store = createStore(reducer, middleware);
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  // give Provider the store so they can stick it on context
  // everything inside Provider has access to store now
  <Provider store={store}>
    <App dispatch={store.dispatch} />
  </Provider>
);
