import {createStore, compose,applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import {devTools, persistState} from 'redux-devtools';
import {Provider} from 'react-redux';
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';
import React, {Component} from 'react';
import reducer from '../reducers/index.js';
import FriendsListContainer from './FriendsListContainer.jsx';

const createFinalStore = applyMiddleware(createLogger())(compose(
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore));

const store = createFinalStore(reducer);

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div>
            <h1>Hello World!</h1>
            <FriendsListContainer/>
          </div>
        </Provider>
        <DebugPanel top right bottom>
          <DevTools
            store={store}
            monitor={LogMonitor}
            visibleOnLoad
          />
        </DebugPanel>
      </div>
    );
  }
}
