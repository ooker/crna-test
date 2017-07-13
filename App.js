import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Stopwatch } from './src/components/Stopwatch.js';


class ScreenHome extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('Timer')}
          title="OPEN TIMER"
        />
      </View>
    );
  }
}
class ScreenTimer extends React.Component {
  static navigationOptions = {
    title: 'Timer',
  };
  render() {
    const { navigate } = this.props.navigation;
    const stopwatch = <Stopwatch />
    return (
      <View style={styles.container}>
        { stopwatch }
        {/*<Button
          onPress={() => navigate('Home')}
          title="BACK"
        />*/}
      </View>
    );
  }
}

const AppNavigator = StackNavigator({
  Home: { screen: ScreenHome },
  Timer: { screen: ScreenTimer },
});


export default class App extends React.Component {
  render() {
    //const stopwatch = <Stopwatch />
    return (
      <View style={styles.container} >
        <View style={{height:24,width:"100%",backgroundColor:"#777"}}></View>
        <AppNavigator style={{ width:300 }}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
