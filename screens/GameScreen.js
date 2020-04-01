import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = props => {
  const [currenGuess, setCurrenGuess] = useState(
    generateRandomBetween(1, 100, 22)
  );
  const [round, setRound] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  console.log("round", round);
  useEffect(() => {
    if (currenGuess === props.userChoide) {
      props.gameOver(round);
    }
  });
  const submitHandler = input => {
    switch (input) {
      case "lower":
        if (currenGuess < props.userChoide) {
          console.log("Lower correct!");
          currentLow.current = currenGuess;
          setCurrenGuess(curr =>
            generateRandomBetween(currentLow.current, currentHigh.current, curr)
          );
        }

        break;
      case "greater":
        if (currenGuess > props.userChoide) {
          console.log("geater correct!");
          currentHigh.current = currenGuess;
          setCurrenGuess(curr =>
            generateRandomBetween(currentLow.current, currentHigh.current, curr)
          );
        }
        break;
      default:
        console.log("Opps...Incorrect!");
        Alert.alert("Don't lie me!", "You know that this is wrong...!", [
          {
            text: "Sorry!",
            style: "cancel"
          }
        ]);

        break;
    }
    setRound(curr => ++curr);
  };
  return (
    <View style={styles.screen}>
      <Text>Opponent ' Guess</Text>
      <NumberContainer>{currenGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={submitHandler.bind(this, "lower")} />
        <Button title="GREATER" onPress={submitHandler.bind(this, "greater")} />
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
    paddingVertical: 20
  }
});
