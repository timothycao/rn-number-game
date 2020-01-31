import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Card from '../Card';
import Input from '../Input';
import Colors from '../../constants/colors';

const Start = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>New Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Your Number</Text>
        <Input style={styles.input} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title="Reset" onPress={() => {}} color={Colors.secondary} /></View>
          <View style={styles.button}><Button title="Confirm" onPress={() => {}} color={Colors.primary} /></View>
        </View>
      </Card>
    </View>
  );
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
  inputContainer: {
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
  input: {
    width: 50
  },
  button: {
    width: 100
  }
});

export default Start;
