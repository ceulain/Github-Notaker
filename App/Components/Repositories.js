'use strict';

import React, { Component} from 'react';
import Badge from './Badge';
import Separator from '../Helpers/Separator';
import PropTypes from 'prop-types';
import Web from '../Helpers/Web';
import {
          ScrollView,
          StyleSheet,
          Text,
          TouchableHighlight,
          View
        } from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

export default class Repositories extends Component {
  constructor (props) {
    super(props);
  }
  
  openPage = (url) => {
    this.props.navigator.push({
      component: Web,
      title: 'Web View',
      passProps: {url}
    });
  }

  render () {
    let repos = this.props.repos;
    let list = repos.map((item, index) => {
      let desc = repos[index].description ? <Text style={styles.description}> {repos[index].description} </Text> : <View />;
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={() => this.openPage(repos[index].html_url)}
              underlayColor='transparent'>
              <Text style={styles.name}>{repos[index].name}</Text>
            </TouchableHighlight>
            <Text style={styles.stars}> Stars: {repos[index].stargazers_count} </Text>
            {desc}
          </View>
          <Separator />
        </View>
      );
    });
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo} />
        {list}
      </ScrollView>
    );
  }
}

Repositories.propTypes = {
  userInfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired

};
