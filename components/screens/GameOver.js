import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import Card from '../Card';
import DefaultStyles from '../../constants/styles';

const GameOver = props => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.subTitle}>Game Over</Text>
      <Card style={styles.container}>
        <Text>Computer guessed number {props.userNumber} in {props.guessCount} tries!</Text>
        <Image source={require('../../assets/success.png')} style={styles.image} />
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
  image: {
    width: '100%',
    height: 300,
    marginVertical: 10
  },
  container: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  button: {
    width: 100
  }
});

export default GameOver;
