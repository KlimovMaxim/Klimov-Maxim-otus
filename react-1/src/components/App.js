import React from 'react';
import * as reducers from '../store/reducers';
import { createStore, combineReducers, applyMiddleware , compose} from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers(reducers), /* preloadedState, */ composeEnhancers(
    applyMiddleware(ReduxThunk)
  ));


export default class App extends React.Component {
  render(){
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}
}
