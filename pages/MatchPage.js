// MatchPage.js
// Yuan Wang

import React from 'react';
import {  Image,
          Keyboard,
          Picker,
          StyleSheet, 
          Text,
          TouchableWithoutFeedback,
          View,
          TouchableHighlight,
          TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
// import MultiSlider from 'react-native-multi-slider'
import { H1, H2, H3, H4, Button } from 'nachos-ui'
import autobind from 'autobind-decorator'
import { Chip, Selectize } from 'react-native-material-selectize'

import ScoreSelector from '../components/ScoreSelector.js'
import { PrimaryColor, Black, White } from '../global/Colors.js'
import { __FILLER_EMAILS__ } from '../global/Filler.js'
// import ScrollPicker from 'react-native-picker-scrollview';

export default class MatchPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected_date: null,
      selected_location: null,
      selected_sport: 'Soccer',

      sliderOneChanging: false,
      sliderOneValue: [5],
    }
  }

  @autobind
  toggleCollapse() {
    this.setState({collapsed: !this.state.collapsed})
  }

  pressOutside() {
    console.log("Pressed outside")
    Keyboard.dismiss()
  }

  render() {


    return (
      <TouchableWithoutFeedback onPress={this.pressOutside}>
        <View 
          onPress={this.pressOutside}
          style={styles.container}>
          <View style={styles.header}>
            <H1 style={{marginHorizontal: 10, color: PrimaryColor(0.8)}}>
              {"Match on 11/17/2017"}
            </H1>
            
          </View>

          <View style={styles.body}>
            <View style={styles.panel}>
              <TouchableOpacity
                style={styles.iconBox}
                onPress={() => {this.setState({selected_date: (this.state.selected_date != null) ? null : "Date" }) } }>
                <MaterialCommunityIcons 
                  name="calendar-clock" 
                  size={34} 
                  color={(this.state.selected_date != null) ? PrimaryColor(0.9) : Black(0.5)} />
              </TouchableOpacity>
              <View style={styles.hdivider}/>
              <TouchableOpacity
                onPress={() => this.setState({selected_location: (this.state.selected_location != null) ? null : "Date" }) }
                style={[styles.iconBox]} >
                <Entypo 
                name="location" 
                size={34} 
                color={(this.state.selected_location != null) ? PrimaryColor(0.9) : Black(0.5)} />
              </TouchableOpacity>
              <View style={styles.hdivider}/>
              <TouchableOpacity
                style={styles.iconBox}
                onPress={() => this.setState({selected_sport: (this.state.selected_sport != null) ? null : "Date" }) }>
                <Ionicons 
                name="ios-football" 
                size={34} 
                color={(this.state.selected_sport != null) ? PrimaryColor(0.9) : Black(0.5)} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: -10}}>
            <View style={styles.selectize_col}>
              <Selectize 
                label={"Team 1"}
                items={__FILLER_EMAILS__}
                renderRow={renderRow}
                returnKeyType='done'
                blurOnSubmit={true}
                tintColor={PrimaryColor(0.5)}
                listStyle={{backgroundColor: White(0), flex: 0}}
                renderChip={renderChip}
                onSubmitEditing={Keyboard.dismiss}
                textInputProps={{
                  placeholder: 'Select Players',
                  blurOnSubmit: true
                }}/>
            </View>
            <View style={styles.selectize_col}>
              <Selectize 
                label={"Team 1"}
                items={__FILLER_EMAILS__}
                renderRow={renderRow}
                tintColor={PrimaryColor(0.5)}
                listStyle={{backgroundColor: White(0), flex: 0}}
                renderChip={renderChip}
                textInputProps={{
                  placeholder: 'Select Players',
                  blurOnSubmit: true
                }}/>
            </View>
          </View>

          <ScoreSelector />


          

          

          
          <View style={styles.footer} >
            <TouchableHighlight 
              style={styles.submit_button}
              underlayColor={'rgba(0,0,0,0.4)'}
              onPress={this.toggleCollapse}>
              <View/>
            </TouchableHighlight>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  someOtherFunc(){
    this.sp.scrollToIndex(2);   // select 'c'
    let selectedValue = this.sp.getSelected();  // returns 'c'
  }
}

function renderRow(id, onPress, item, style) {
  return(
    <TouchableOpacity
      activeOpacity={0.6}
      key={id}
      onPress={onPress}
      style={[style, 
              {flexDirection: 'row', backgroundColor: 'white', alignItems: 'center'}]}>
    <Image  
      style={{height: 30, width: 30, borderRadius: 15, margin: 5}} 
      source={{uri: 'https://www.organicheadshots.com/images/headshot04-thumb.jpg'}}/>
    <Text 
      numberOfLines={1}
      ellipsizeMode={'tail'}
      style={{ color: Black(0.7), backgroundColor: White(0), width: "70%"}}>
      {item.email}
    </Text>
  </TouchableOpacity>
  )
}

function renderChip(id, onClose, item, style, iconStyle) {
  // return(
  //   <Chip
  //     key={id}
  //     iconStyle={iconStyle}
  //     onClose={onClose}
  //     text={item.email}
  //     style={style}/>
  // )

  return (
    <View 
      style={{backgroundColor: PrimaryColor(0.5), 
              height: 30, 
              borderRadius: 15,
              margin: 2,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
      key={id}
      >
       <Image  
        style={{height: 20, width: 20, borderRadius: 10, margin: 6}} 
        source={{uri: 'https://www.organicheadshots.com/images/headshot04-thumb.jpg'}}/>

      <Text 
        style={{maxWidth: '70%'}}
        numberOfLines={1}
        ellipsizeMode={'tail'}>
        {item.email}
      </Text>

      <TouchableOpacity
        onPress={onClose}
        style={{height: 20, width: 20, borderRadius: 10, margin: 6, backgroundColor: White(1)}}>
        <Entypo name="cross" size={20} color={Black(0.5)} style={{backgroundColor: White(0)}}/>
      </TouchableOpacity>
    </View>


  )
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
    backgroundColor: Black(0.5),
    width: 1,
    height: 40,
    flex: 0
  },
  h3: {
    color: 'rgba(0,0,0,0.5)'
  },
  selectize_col: {
    flex: 1, 
    flexDirection: 'column', 
    margin: 5
  },
  iconBox: {
    flex: 1,
    flexDirection: 'column',
    borderColor: Black(0.5),
    alignItems: 'center'
  }
});
