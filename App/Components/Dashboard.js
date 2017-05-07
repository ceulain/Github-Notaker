'use strict';

import React, { Component } from 'react';
import Profile from './Profile';
import { API } from '../Utils/api';
import Repositories from './Repositories';
import Notes from './Notes';
import {
        Text,
        View,
        StyleSheet,
        TouchableHighlight,
        Image,
        NavigatorIOS
      } from 'react-native';


const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  makeBackground = (btn) => {
    let obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }

    if (btn === 0) {
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1) {
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }

    return obj;
  }

  goToProfile = () => {
    this.props.navigator.push({
      title: "Profile",
      component: Profile,
      passProps: {userInfo: this.props.userInfo}
    });
  }

  goToRepos = () => {
    API.getRepos(this.props.userInfo.login)
      .then((res) => {
        this.props.navigator.push({
          title: "Repositories",
          component: Repositories,
          passProps: {
            userInfo: this.props.userInfo,
            repos: res
          }
        });
      })
  }

  goToNotes = () => {
    API.getNotes(this.props.userInfo.login)
      .then((res) => {
        res = res || {};
        this.props.navigator.push({
          component: Notes,
          title: 'Notes',
          passProps: {
            notes: res,
            userInfo: this.props.userInfo
          }
        })
      })
  }
  render() {
     return (
       <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile}
          underlayColor="#88D4F5">
          <Text style={styles.buttonText}> View Profile </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepos}
          underlayColor="#88D4F5">
          <Text style={styles.buttonText}> View Repos </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToNotes}
          underlayColor="#88D4F5">
          <Text style={styles.buttonText}> View Notes </Text>
        </TouchableHighlight>
       </View>
     )
   }
}
