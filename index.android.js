/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { AppRegistry } from 'react-native';

import App from './app/App.js'

export default class Inventory extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('Inventory', () => Inventory);
