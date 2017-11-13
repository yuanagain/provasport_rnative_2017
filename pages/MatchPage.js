import React from 'react';
import {  Picker,
          StyleSheet, 
          Text, 
          View } from 'react-native';

import { H4, Button } from 'nachos-ui'
// import ScrollPicker from 'react-native-picker-scrollview';

export default class MatchPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      langauge: 'java',
      score_1: 0,
      score_2: 0
    }
    this.scores_options = []
    for (var i = 1; i <= 21; i++) {
      this.scores_options.push(<Picker.Item label={String(i)} value={i} key={i} />)
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          style={styles.picker}
          selectedValue={this.state.score_1}
          onValueChange={(itemValue, itemIndex) => this.setState({score_1: itemValue})}>
          <Picker.Item label={'0'} value={0}/>
          {this.scores_options}
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={this.state.score_2}
          onValueChange={(itemValue, itemIndex) => this.setState({score_2: itemValue})}>
          <Picker.Item label={'0'} value={0}/>
          {this.scores_options}
        </Picker>
      </View>
    );
  }
  someOtherFunc(){
    this.sp.scrollToIndex(2);   // select 'c'
    let selectedValue = this.sp.getSelected();  // returns 'c'
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  picker: {
    flex: 1,
    width: 200
  }
});
