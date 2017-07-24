import React, { Component } from 'react';
import { Button, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator, StackNavigator, addNavigationHelpers } from 'react-navigation';
import { Stopwatch } from './src/components/Stopwatch.js';

/* Screens for StackNavigator */
/* Home screen */
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
/* Timer screen */
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
      </View>
    );
  }
}

const StackNavi = StackNavigator({
  Home: { screen: ScreenHome },
  Timer: { screen: ScreenTimer },
});


class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Home')}
        title="Go back home"
      />
    );
  }
}

const MyApp = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: 0,
      screen: 0,
    };
    this.updateDrawer = function(v) {
      this.setState({ drawer: v, screen: this.state.screen });
    };
    this.updateScreen = function(v) {
      this.setState({ drawer: this.state.drawer, screen: v });
    };
  }
  render() {
    console.log(this.state);
    var self = this;
    return (

      <MyApp
        navigation={addNavigationHelpers({
          dispatch: function(e) {
            console.log(e);
            if (e.routeName == 'DrawerClose') {
              self.updateDrawer(0);
            }
            if (e.routeName == 'DrawerOpen') {
              self.updateDrawer(1);
            }
            if (e.routeName == 'Home') {
              self.updateScreen(0);
            }
            if (e.routeName == 'Notifications') {
              self.updateScreen(1);
            }

            return true;
          },
          state: {
            index: this.state.drawer,
            routes: [
              {
                index: this.state.screen,
                key: 'DrawerClose',
                routeName: 'DrawerClose',
                routes: [
                  {
                    key: 'Home',
                    routeName: 'Home',
                  },
                  {
                    key: 'Notifications',
                    routeName: 'Notifications',
                  },
                ],
              },
              {
                key: 'DrawerOpen',
                routeName: 'DrawerOpen',
              },
            ],
          },
        })}
      />
      
    );
  }
}



/*
export default class App extends React.Component {
  render() {
    const ooker = <DrawerExample />
    return (
      <View style={styles.container} >
        <View style={{height:24,width:"100%",backgroundColor:"#777"}}></View>
        {ooker}
        <Text>WTF?</Text>
      </View>
    );
  }
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon : {
    width : 24,
    height : 24,
  }
});
