// ScoreSelector.js
// Yuan Wang

import React from 'react';
import {  Keyboard,
          ScrollView,
          StyleSheet, 
          Text,
          Picker,
          TouchableWithoutFeedback,
          View,
          TouchableHighlight,
          TouchableOpacity } from 'react-native';

import { H1, H2, H3, H4, Button } from 'nachos-ui'
import autobind from 'autobind-decorator'
import Collapsible from 'react-native-collapsible';
import { PrimaryColor, Black, White } from '../global/Colors.js'

export default class ScoreSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score_1: 12,
      score_2: 12,
      collapsed: true
    }

    this.scores_options = []
    for (var i = 0; i < this.props.values.length; i++) {
      var val = this.props.values[i]
      this.scores_options.push(<Picker.Item label={String(val)} value={val} key={i} />)
    }
	}

  @autobind
  activate() {
    Keyboard.dismiss()
    this.setState({collapsed: !this.state.collapsed})
  }

  render() {

    return(
      <TouchableOpacity onPress={this.activate} style={styles.container}>
        <Collapsible 
          style={{
            backgroundColor: PrimaryColor(0.0),
            flex: 0,
          }}
          collapsed={this.state.collapsed}
          collapsedHeight={40}
          duration={220}
          align={'top'}> 

          <View onPress={this.activate} style={styles.scores}>
            <View style={styles.picker_col}>
              <H3>
                {this.state.score_1}
              </H3>
              <Picker
                style={styles.picker}
                selectedValue={this.state.score_1}
                onValueChange={(itemValue, itemIndex) => this.setState({score_1: itemValue})}>
                {this.scores_options}
              </Picker>
            </View>
            <View style={styles.picker_col}>
              <H3>
                {this.state.score_2}
              </H3>
              <Picker
                style={styles.picker}
                selectedValue={this.state.score_2}
                onValueChange={(itemValue, itemIndex) => this.setState({score_2: itemValue})}>
                {this.scores_options}
              </Picker>
            </View>
          </View>
        </Collapsible>
      </TouchableOpacity>
    )
  }
}

ScoreSelector.defaultProps = {
  values: Array.apply(null, {length: 22}).map(Number.call, Number)
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  picker: {
    flex: 1,
    width: 120,
    marginTop: 30,
    justifyContent: 'center',
  },
  scores: {
    flexDirection: 'row',
    flex: 0,
    height: 200,
    borderWidth: 1,
    justifyContent: 'space-between'
  },
  picker_col: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
})