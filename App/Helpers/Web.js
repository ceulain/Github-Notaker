'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
        View,
        WebView,
        StyleSheet
      } from 'react-native';

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column'
  }
});

export default class Web extends Component {
  render () {
    return (
      <View style={styles.container}>
        <WebView source={{uri: this.props.url}} />
      </View>
    );
  }
}

Web.propTypes = {
  url: PropTypes.string.isRequired
};
