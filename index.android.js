/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './src/App';

class Rent extends Component {
  render() {
    let tracker = new GoogleAnalyticsTracker('UA-85362647-2');
    tracker.trackScreenView('Android Home');
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('rent', () => Rent);
