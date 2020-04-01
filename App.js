import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};
export default function App() {
  const [userNumber, setUserNumber] = useState(undefined);
  const [round, setRound] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={error => console.log(error)}
      />
    );
  }

  const handlerUserNumber = num => {
    setUserNumber(num);
  };
  const rePlayHandler = () => {
    console.log("Pay agein---");
    setRound(-1);
    setUserNumber(null);
  };
  let content = <StartGameScreen handlerNumber={handlerUserNumber} />;
  const gameOverHandler = _round => {
    setRound(_round);
    console.log("_round", _round);
  };

  if (userNumber && round <= 0) {
    // <GameScreen userChoide={userNumber} gameOver={gameOverHandler} />;
    content = <GameScreen userChoide={userNumber} gameOver={gameOverHandler} />;
  } else if (round > 0) {
    content = <GameOverScreen replay={rePlayHandler} round={round} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
