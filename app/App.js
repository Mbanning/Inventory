import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

const App = class App extends Component {

  render() {
    const {
      containerStyle,
      textStyle,
    } = styles;

    return (
      <View style={containerStyle}>
        <Text style={textStyle}>
          App
        </Text>
      </View>
    );
  }
};

const styles = {
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textStyle: {
    fontSize: 32,
    color: '#00FF00',
  },
};

export default App;