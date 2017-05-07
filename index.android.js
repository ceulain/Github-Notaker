/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import Main from './App/Components/Main'
 import { Text, Navigator, TouchableHighlight, AppRegistry, View } from 'react-native';

 export default class AwesomeProject extends Component {
   render() {
     return (
         <Text> Testing router </Text>
     );
   }
 }


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
