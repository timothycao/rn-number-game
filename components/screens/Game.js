import React, {useState, useRef} from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

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
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuessHandler = direction => {
    if ((direction === 'lower' && currentGuess < props.userNumber) || (direction === 'higher' && currentGuess > props.userNumber)) {
      Alert.alert('Hint', 'Wrong direction!', [{text: 'Okay', style: 'cancel'}]);
      return;
    } else if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else if (direction === 'higher') {
      currentLow.current = currentGuess;
    }
    const nextGuess = generatRandomBetween(currentLow.current, currentHigh.current);
    setCurrentGuess(nextGuess);
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Game</Text>
      <Card style={styles.container}>
        <Text>Computer Guess</Text>
        <Number>{currentGuess}</Number>
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} /></View>
          <View style={styles.button}><Button title="HIGHER" onPress={nextGuessHandler.bind(this, 'higher')} /></View>
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
