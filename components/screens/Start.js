import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../Card';
import Input from '../Input';
import Number from '../Number';
import Colors from '../../constants/colors';
import DefaultStyles from '../../constants/styles';

const Start = props => {

  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number', 'Number needs to be between 1 and 99.', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={DefaultStyles.subTitle}>New Game</Text>
        <Card style={styles.inputContainer}>
          <Text style={DefaultStyles.body}>{confirmed ? 'You selected' : 'Your Number'}</Text>
          {
            confirmed ?
            <Number style={styles.number}>{selectedNumber}</Number> :
            <Input style={styles.input} keyboardType="numeric" maxLength={2} onChangeText={numberInputHandler} value={enteredValue} />
          }
          <View style={styles.buttonContainer}>
            <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.secondary} /></View>
            <View style={styles.button}><Button title={confirmed ? "Start" : "Confirm"} onPress={confirmed ? () => props.onStartGame(selectedNumber) : confirmInputHandler} color={Colors.primary} /></View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
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
    width: 50,
    textAlign: 'center'
  },
  button: {
    width: 100
  },
  number: {
    borderColor: Colors.secondary
  }
});

export default Start;
