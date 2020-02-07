import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Card from '../Card';
import Number from '../Number';
import DefaultStyles from '../../constants/styles';

const GameOver = props => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.subTitle}>Game Over</Text>
      <Card style={styles.container}>
        <Text>Computer guessed number {props.userNumber} in {props.guessCount} tries!</Text>
        <View style={styles.button}>
          <Button title="NEW GAME" onPress={props.onNewGame} />
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
  container: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  button: {
    width: 100,
    marginTop: 10
  }
});

export default GameOver;
