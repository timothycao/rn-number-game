import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import Start from './components/screens/Start';
import Game from './components/screens/Game';
import GameOver from './components/screens/GameOver';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessCount, setGuessCount] = useState(0);
  const [loadedData, setLoadedData] = useState(false);

  if (!loadedData) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setLoadedData(true)} onError={(err) => console.log(err)} />;
  }

  const newGameHandler = () => {
    setUserNumber(null);
    setGuessCount(1);
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = count => {
    setGuessCount(count);
  };

  let content = <Start onStartGame={startGameHandler} />;

  if (userNumber && guessCount <= 1) {
    content = <Game userNumber={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessCount > 1) {
    content = <GameOver guessCount={guessCount} userNumber={userNumber} onNewGame={newGameHandler} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
