import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { H4, Button } from 'nachos-ui'

import MatchPage from './pages/MatchPage.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dialogue}>
          <MatchPage />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: 'grey',

    alignItems: 'stretch',
    justifyContent: 'center',
  },
  dialogue: {
    borderRadius: 10,
    flex: 1
  }
});
