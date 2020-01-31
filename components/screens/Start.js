import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Start = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>New Game</Text>
      <View style={styles.inputContainer}>
        <Text>Your Number</Text>
        <View style={styles.input}>
          <TextInput />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title="Reset" onPress={() => {}} color="#ff0080" /></View>
          <View style={styles.button}><Button title="Confirm" onPress={() => {}} color="#0080ff" /></View>
        </View>
      </View>
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
    alignItems: 'center',
    elevation: 3,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  input: {
    width: 50,
    height: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10
  },
  button: {
    width: 100
  }
});

export default Start;
