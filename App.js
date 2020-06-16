/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigation from './src/router'
const AppContainer = createAppContainer(AppNavigation)
class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}


export default AppContainer;