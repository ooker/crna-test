import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

/* Numerical display */
class Display extends React.Component {
  render() {
    return(
      <View>
        <Text style={styles.display}>{ this.props.timeToDisplay }</Text>
      </View>
    )
  }
}
/* Button that starts/stops the timer */
class BtnStartStopTime extends React.Component {
  constructor() {
    super();
    this.state = {timeIsRunning: false};
  }
  render(){
    return (
      <View style={styles.buttonContainer}>
        <Button title="START / STOP" onPress={this.props.pressHandler} />
      </View>
    )
  }
}
BtnStartStopTime.propTypes = {
  pressHandler: React.PropTypes.func,
};



export class Stopwatch extends React.Component {
  constructor() {
    super();
    let startTime = 0;
    let watchInterval;

    this.state = {
      timeIsRunning: false,
      timeToDisplay : "0:00:00",
      timeTotal : 0
    };
  }

  render(){
    const display = <Display timeToDisplay={this.state.timeToDisplay} />
    const btnStartStopTime = <BtnStartStopTime pressHandler={this.btnPressHandler.bind(this)} />

    return (
      <View style={styles.stopwatch}>
        { display }
        { btnStartStopTime }
        <Text style={{marginTop:10}}> {this.state.timeIsRunning ? "COUNTING" : "PAUSED"} </Text>
      </View>
    )
  }

  btnPressHandler(){
    this.state.timeIsRunning ? this._stopWatch() : this._startWatch();
  }

  _startWatch() {
    this.setState({
      timeIsRunning : true
    });

    this.startTime = Date.now();

    this.watchInterval = setInterval(
      () => {
        var timeNow = Date.now();
        var timeDifference = timeNow - this.startTime;
        this.setState({
          timeToDisplay : this._getTime(this.state.timeTotal+timeDifference)
        });
      }, 300
    );
  }
  _stopWatch(){
    clearInterval(this.watchInterval);

    let timeNow = Date.now();
    let timeDifference = timeNow - this.startTime;
    this.setState({
      timeToDisplay : this._getTime(this.state.timeTotal+timeDifference)
    });
    this.setState({
      timeIsRunning : false,
      timeTotal : this.state.timeTotal + timeDifference
    });
  }

  _getTime(ms){
    let time = new Date(ms);
    let hours = time.getUTCHours();
    hours < 10 ? hours = "0"+hours : hours;
    let minutes = time.getUTCMinutes();
    minutes < 10 ? minutes = "0"+minutes : minutes;
    let seconds = time.getUTCSeconds();
    seconds < 10 ? seconds = "0"+seconds : seconds;
    return hours + ":" + minutes + ":" + seconds;
  }
}



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
