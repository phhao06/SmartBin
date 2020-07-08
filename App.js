import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer} from 'react-navigation';
import AppNavigator from './AppNavigator.js';
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

const AppContainer =  createAppContainer(AppNavigator);

export default class App extends React.Component {
  
  render(){
      return (
            <AppContainer />
      );
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent : 'stretch',
    paddingRight: 16,
    paddingLeft: 16,
  },
});
