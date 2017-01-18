'use strict';
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
  Image,
  View,
  TextInput,
  ScrollView,
} from 'react-native'
import SingleLineInput from '../app/components/SingleLineInput';


export default class DesignTesting extends Component {
  render() {
    let pic = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
};
    return (
      <View style={styles.container}>
        <ScrollView>
        automaticallyAdjustContentInsets={false}
        onScroll={() => { console.log('onScroll!'); }}
        scrollEventThrottle={200} style={styles.scrollView}>
        </ScrollView>
        <SingleLineInput
        placeholder="password"
         secureTextEntry
         borderTop
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   scrollView: {
     backgroundColor: '#6A85B1',
     height: 300,
   },
});

AppRegistry.registerComponent('DesignTesting', () => DesignTesting);
