import React, { Component } from 'react';
import { API } from '../Utils/api';
import Dashboard from './Dashboard';
import {
        Text,
        View,
        TextInput,
        StyleSheet,
        TouchableHighlight,
        ActivityIndicator,
        Image
      } from 'react-native';

let style = StyleSheet.create({

  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },

  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },

  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    textAlign: 'center',
    borderColor: 'white',
    borderRadius: 0,
    color: 'white',
    borderRadius: 10
  },

  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },

  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 0,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 10
  }
});

export default class Main extends Component {

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

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }

  handleSubmit = () => {
    this.setState({
      isLoading: true
    });
    API.getBio(this.state.username)
      .then((res) => {
        console.log(res);
        if (res.message === 'Not Found') {
          this.setState({
            error: 'User not found',
            isLoading: false
          })
        } else {
          this.props.navigator.push({
            title: res.name || "Select an Option",
            component: Dashboard,
            passProps: {userInfo: res}
          });
          this.setState({
            isLoading: false,
            error: false,
            username: ''
          });
        }
      })
  }

  handleChange = (username) => {
    this.setState({
      username
    })
  }

  render() {
    let showErr = (
      this.state.error ? <Text> {this.state.error} </Text> : <View></View>
    );
    return (
      <View style={style.mainContainer}>
        <Text style={style.title}>Search for Github User</Text>
        <TextInput
          style={style.searchInput}
          value={this.state.username}
          onChangeText={this.handleChange} />
        <TouchableHighlight
          style={style.button}
          onPress={this.handleSubmit}
          underlayColor="white">
            <Text style={style.buttonText}>SEARCH</Text>
        </TouchableHighlight>
        <ActivityIndicator
          animating={this.state.isLoading}
          color="#111"
          size="large"></ActivityIndicator>
        {showErr}
      </View>
    )
  }
}
