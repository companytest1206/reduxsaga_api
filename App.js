import React, {Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import store from './src/store';
import MainPage from './src/components/MainPage';
import SubScreen from './src/components/SubScreen';

const MainIndex = () => (
  <Router hideNavBar= "true">
    <Scene key="root">
      <Scene key="mainPage" component={MainPage} title="" initial={true} />
      <Scene key="subscreen" component={SubScreen} title="PageTwo" />
    </Scene>
  </Router>
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainIndex />
      </Provider>
    );
  }
}
