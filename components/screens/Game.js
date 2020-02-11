import React, {useState, useRef, useEffect} from 'react';
import { View, Text, Button, StyleSheet, Alert, FlatList } from 'react-native';

import Card from '../Card';
import Number from '../Number';
import DefaultStyles from '../../constants/styles';

const generatRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclude) {
    return generatRandomBetween(min, max, exclude);
  } else {
    return random;
  }
};

const renderListItem = (listLength, itemData) => (
  <Card style={styles.listItem}>
    <Text style={DefaultStyles.body}>#{listLength - itemData.index}</Text>
    <Text style={DefaultStyles.body}>{itemData.item}</Text>
  </Card>
);

const Game = props => {
  const initialGuess = generatRandomBetween(1, 100, props.userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userNumber, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = direction => {
    if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)) {
      Alert.alert('Hint', 'Wrong direction!', [{text: 'Okay', style: 'cancel'}]);
      return;
    } else if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else if (direction === 'higher') {
      currentLow.current = currentGuess + 1;
    }
    const nextGuess = generatRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextGuess);
    setPastGuesses(curPastGuesses => [nextGuess.toString(), ...curPastGuesses]);
  }

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.subTitle}>Game</Text>
      <Card style={styles.container}>
        <Text style={DefaultStyles.body}>Computer Guess</Text>
        <Number>{currentGuess}</Number>
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} /></View>
          <View style={styles.button}><Button title="HIGHER" onPress={nextGuessHandler.bind(this, 'higher')} /></View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={item => item}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
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
    alignItems: 'center',
    marginBottom: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 100
  },
  listContainer: {
    flex: 1,
    width: '80%'
  },
  list: {
    flexGrow: 1,
    justifyContent: 'flex-end'
  },
  listItem: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 5
  }
});

export default Game;
