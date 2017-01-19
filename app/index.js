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
import MultiLineInput from '../app/components/MultiLineInput';


export default class DesignTesting extends Component {
  render() {
    let pic = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
};
    return (
      <View style={styles.container}>
        <Image style={styles.image}
          source={pic}/>
        <Text style={styles.title}>
          I.R.I.S
        </Text>
        <SingleLineInput
          placeholder="Enter Text"
        />
        <MultiLineInput
          placeholder="Multiline text input"
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
    backgroundColor: '#e1e5ed',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 5,
  //  justifyContent: 'flex-start',
  },
   scrollView: {
     backgroundColor: '#6A85B1',
     height: 300,
   },
});

AppRegistry.registerComponent('DesignTesting', () => DesignTesting);
