import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import MainPage from './src/components/MainPage';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  }
}
