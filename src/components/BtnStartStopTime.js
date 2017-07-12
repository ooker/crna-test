import React from 'react';
import { View, Button, Alert } from 'react-native';

export class BtnStartStopTime extends React.Component {
  _onPressHandler (){
    Alert.alert("Button pressed!");
  }

  render(){
    return (
      <View>
        <Button title="START" onPress={this._onPressHandler} />
      </View>
    )
  }
}

export default BtnStartStopTime;
