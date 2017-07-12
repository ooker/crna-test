import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

/* Numerical display */
var Display = React.createClass({
  render : function() {
    return(
      <View>
        <Text style={styles.display}>{ this.props.timeToDisplay }</Text>
      </View>
    )
  }
});

/* Button that starts/stops the timer */
var BtnStartStopTime = React.createClass( {
  getInitialState : function(){
    return {
      timeIsRunning : false
    }
  },
  render : function(){
    return (
      <View style={styles.buttonContainer}>
        <Button title="START / STOP" onPress={this.props.pressHandler} />
      </View>
    )
  }
});

BtnStartStopTime.propTypes = {
  pressHandler: React.PropTypes.func,
};


//export class Stopwatch extends React.Component {
var Stopwatch = React.createClass({
  getInitialState: function(){
    return {
      timeIsRunning: false,
      startTime: 0,
      nowTime: 0,
      timeToDisplay : "0:00:00"
    }
  },

  render : function(){
    let display = <Display timeToDisplay={this.state.timeToDisplay} />
    let btnStartStopTime = <BtnStartStopTime pressHandler={this.btnPressHandler.bind(this)} />

    return (
      <View style={styles.stopwatch}>
        { display }
        { btnStartStopTime }
      </View>
    )
  },

  btnPressHandler : function(){
    //Alert.alert("OKEI SIIS");
    if(this.state.timeIsRunning == false) {
      this.state.timeIsRunning = true;
    } else {
      this.state.timeIsRunning = false;
    }

    this.setState({
      timeToDisplay : "0:30:19"
    });

  }
});
export class Stopwatch;

/* Styles for stopwatch component */
const styles = StyleSheet.create({
  stopwatch : {
    alignItems: 'center'
  },
  display : {
    fontSize: 42
  },
  buttonContainer : {
    marginTop: 10
  }
});
