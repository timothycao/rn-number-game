import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GameOver = props => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <Text>Computer guessed number {props.userNumber} in {props.guessCount} tries!</Text>
      <Button title="NEW GAME" onPress={props.onNewGame} />
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default GameOver;
