import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import AppReducer from './reducer';
import AppNavigator from './AppNavigator';

class App extends Component {

  store = createStore(AppReducer, applyMiddleware(ReduxThunk));
  render() {
    return (
        <Provider store={this.store}>
          <AppNavigator />
        </Provider>
    )
  }
}

export default App;
