
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';

import Firma from './src/components/firma'
const { height: HEIGHT } = Dimensions.get('window')


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dibujo: false,
    }
  }

  pressButton = () => {
    this.setState({
      dibujo: true
    })
  }

  render() {
    if (this.state.dibujo == true) {
      return (
        <View style={{ height: HEIGHT - 25 }}>
          <Firma />
        </View>
      );
    }

    return (
      <View>
        <Text></Text>
        <Button onPress={ this.pressButton } title="Firmar"/>
      </View>
    );
  }

}


export default App
