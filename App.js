import React from 'react';
import { Button, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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



/* DrawerNavi screens */
/*
class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return (
      <View style={{borderWidth:3,borderColor:'red', width:200,height:200}}>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
          />
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  };

  render() {
    return (
      <View style={{borderWidth:3,borderColor:'red', width:200,height:200}}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
          />
      </View>
    );
  }
}
const DrawerNavi = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});
*/

const MyNavScreen = ({ navigation, banner }) => (
  <View style={{backgroundColor:"yellow"}}>

    <Text>TEKST{banner}</Text>
    <View style={{flexDirection:"row"}}>
    <Button
      onPress={() => navigation.navigate('DrawerOpen')}
      title="Open drawer"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </View>
  </View>
);

const InboxScreen = ({ navigation }) => (
  <MyNavScreen banner={'Inbox Screen'} navigation={navigation} />
);
InboxScreen.navigationOptions = {
  drawerLabel: 'Inbox',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons
      name="move-to-inbox"
      size={24}
      style={{ color: tintColor }}
    />
  ),
};

const DraftsScreen = ({ navigation }) => (
  <MyNavScreen banner={'Drafts Screen'} navigation={navigation} />
);
DraftsScreen.navigationOptions = {
  drawerLabel: 'Drafts',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
  ),
};



/*const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});*/

const DrawerExample = DrawerNavigator(
  {
    Inbox: {
      path: '/',
      screen: InboxScreen,
    },
    Drafts: {
      path: '/sent',
      screen: DraftsScreen,
    },
  },
  {
    initialRouteName: 'Drafts',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

/* <View style={styles.container} >
  <View style={{height:24,width:"100%",backgroundColor:"#777"}}></View>
  {ooker}
  <Text>WTF?</Text>
</View> */

export default class App extends React.Component {
  render() {

    return (
      <View>
        <View style={{height:24,width:"100%",backgroundColor:"#777"}}></View>
        <DrawerExample />
      </View>
    );
  }
}

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
