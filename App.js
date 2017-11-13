import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { H4, Button } from 'nachos-ui'

import MatchPage from './pages/MatchPage.js'

export default class App extends React.Component {
  render() {
    return (
      <MatchPage />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
