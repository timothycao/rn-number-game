import React, {useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Card from '../Card';
import Number from '../Number';

const generatRandomBetween = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;
  return random;
};

const Game = props => {
  const [currentGuess, setCurrentGuess] = useState(generatRandomBetween(1, 100))

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Game</Text>
      <Card style={styles.container}>
        <Text>Computer Guess</Text>
        <Number>{currentGuess}</Number>
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title="LOWER" onPress={() => {}} /></View>
          <View style={styles.button}><Button title="HIGHER" onPress={() => {}} /></View>
        </View>
      </Card>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  container: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 100
  }
});

export default Game;
