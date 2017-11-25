// ScoreSelectorHorizontal.js
// Yuan Wang

import React from 'react';
import {  ScrollView,
          StyleSheet, 
          Text,
          TouchableWithoutFeedback,
          View,
          TouchableHighlight,
          TouchableOpacity } from 'react-native';

import { H1, H2, H3, H4, Button } from 'nachos-ui'
import autobind from 'autobind-decorator'
import { PrimaryColor, Black, White } from '../global/Colors.js'

let __ITEM_HEIGHT__ = 40

export default class ScoreSelectorHorizontal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: []
    }
	}
  
  @autobind
  select(key) {
    this.state.selected.push(key)
    if (this.state.selected.length > 2) {
      this.state.selected.shift()
    }
    this.setState({selected: this.state.selected})
  }

  render() {
    var score_options = []
    for (var i = 0; i < this.props.values.length; i++) {
      var val = this.props.values[i]
      score_options.push(<SelectorItem key={i} value={val} selected={this.state.selected} select={this.select}/>)
    }


    return(
      <View style={styles.container}>
        <ScrollView 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.content_container}
          style={styles.scroll}
          keyboardShouldPersistTaps={'never'}
          keyboardDismissMode={'on-drag'} 
          horizontal={true}
        > 
          {score_options}
        </ScrollView>
      </View>
    )
  }
}

class SelectorItem extends React.Component {
  constructor(props) {
    super(props)
  }

  @autobind
  onPress() {
    this.props.select(this.props.value)
    this.setState({clicks: 1})
  }

  render() {
    return(
      <TouchableOpacity style={styles.item_container}>
        <TouchableOpacity 
          onPress={this.onPress}
          style={[styles.item_circle, {backgroundColor: this.props.selected.includes(this.props.value) ?  PrimaryColor(0.5) : White(0) }]}>
          <Text style={styles.value}>{this.props.value}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }
}

ScoreSelectorHorizontal.defaultProps = {
  values: Array.apply(null, {length: 22}).map(Number.call, Number)
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: __ITEM_HEIGHT__,
  },
  value: {
    color: Black(0.5)
  },
  item_circle: {
    flex: 0,
    height: __ITEM_HEIGHT__,
    width: __ITEM_HEIGHT__,
    borderRadius: __ITEM_HEIGHT__ / 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 2,
    borderColor: Black(0.5)
  },
  item_container: {
    flex: 0,
    height: __ITEM_HEIGHT__,
    width: __ITEM_HEIGHT__ + 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    backgroundColor: PrimaryColor(0.0),
  },
  content_container: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})