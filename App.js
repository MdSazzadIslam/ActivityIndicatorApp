/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Platform,
  Dimensions,
  Text,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textInput}>Activity Indicator Example</Text>
      <View style={styles.indicator}>
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{
            left: Platform.OS === 'ios' ? 1.3 : 0,
            top: Platform.os === 'ios' ? 1 : 0,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    elevation: 2,
    height,
    width,
  },
  textInput: {
    padding: 50,
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0000ff',
  },

  indicator: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
});

export default App;
