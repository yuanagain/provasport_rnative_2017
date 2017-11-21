import React from 'react';
import {  Picker,
          StyleSheet, 
          View,
          TouchableHighlight } from 'react-native';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';

import { H1, H2, H3, H4, Button } from 'nachos-ui'
import autobind from 'autobind-decorator'
import Collapsible from 'react-native-collapsible';

import { PrimaryColor, Black, White } from '../global/Colors.js'
// import ScrollPicker from 'react-native-picker-scrollview';

export default class MatchPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      langauge: 'java',
      score_1: 0,
      score_2: 0,
      collapsed: true
    }
    this.scores_options = []
    for (var i = 1; i <= 21; i++) {
      this.scores_options.push(<Picker.Item label={String(i)} value={i} key={i} />)
    }
  }

  componentDidMount() {

  }

  @autobind
  toggleCollapse() {
    this.setState({collapsed: !this.state.collapsed})
  }

  render() {


    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <H1 style={{marginHorizontal: 10, color: PrimaryColor(0.8)}}>
            {"Match on 11/17/2017"}
          </H1>
          
        </View>

        <View style={styles.body}>
          <View style={styles.panel}>
            <H1>Icon 1</H1>
            <View style={styles.hdivider}/>
            <H1>Icon 2</H1>
            <View style={styles.hdivider}/>
            <H1>Icon 3</H1>
          </View>
        </View>

        <Collapsible 
            style={{
              backgroundColor: PrimaryColor(0.0),
              flex: 0,
              borderRadius: 1,
            }}
            collapsed={this.state.collapsed}
            collapsedHeight={50}
            duration={220}
            align={'top'}>

          <View style={styles.scores}>
            <View style={styles.picker_col}>
              <H3>
                {"Team 1"}
              </H3>
              <Picker
                style={styles.picker}
                selectedValue={this.state.score_1}
                onValueChange={(itemValue, itemIndex) => this.setState({score_1: itemValue})}>
                <Picker.Item label={'0'} value={0}/>
                {this.scores_options}
              </Picker>
            </View>
              <View style={styles.divider}>
                <H1>{"-"}</H1>
              </View>
            <View style={styles.picker_col}>
              <H3>
                {"Team 2"}
              </H3>
              <Picker
                style={styles.picker}
                selectedValue={this.state.score_2}
                onValueChange={(itemValue, itemIndex) => this.setState({score_2: itemValue})}>
                <Picker.Item label={'0'} value={0}/>
                {this.scores_options}
              </Picker>
            </View>
          </View>
        </Collapsible>
        <View style={styles.footer} >
          <TouchableHighlight 
            style={styles.submit_button}
            underlayColor={'rgba(0,0,0,0.4)'}
            onPress={this.toggleCollapse}>
            <View/>
          </TouchableHighlight>
        </View>
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
    borderRadius: 10,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  body: {
    flex: 0,
    height: 100,
    backgroundColor: Black(0.1),
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  panel: {
    flex: 0,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 0,
    borderWidth: 1,
  },
  picker: {
    flex: 1,
    width: 120,
    justifyContent: 'center',
  },
  scores: {
    flexDirection: 'row',
    flex: 0,
    borderWidth: 1,
    height: 200,
    justifyContent: 'space-between'
  },
  submit_button: {
    flex: 0, 
    height: 60, 
    backgroundColor: PrimaryColor(0.8)
  },
  header: {
    flex: 0,

    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  hdivider: {
    backgroundColor: PrimaryColor(0.5),
    width: 1,
    height: 40,
    flex: 0
  },
  picker_col: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  divider: {
    flex: 0,
    width: 20,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  h3: {
    color: 'rgba(0,0,0,0.5)'
  }
});
