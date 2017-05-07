/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import Main  from './App/Components/Main'
 import {
          Text,
          NavigatorIOS,
          TouchableHighlight,
          AppRegistry,
          StyleSheet,
          TextInput,
          ActivityIndicatorIOS
        } from 'react-native';


let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
});

export default class AwesomeProject extends Component {
  render() {
   return (
     <NavigatorIOS
       initialRoute={{ title: 'Github Notaker', component: Main}}
       style={styles.container}
     />
   );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
