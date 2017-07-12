import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Stopwatch } from './src/components/Stopwatch.js';

export default class App extends React.Component {
  render() {
    const stopwatch = <Stopwatch />
    return (
      <View style={styles.container} >
        { stopwatch }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
