import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import Card from "../components/Card";
import color from "../constants/color";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = props => {
  const [inputNumber, setInputNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const inputHandler = inputText => {
    setInputNumber(inputText.replace(/[^0-9]/g, ""));
  };

  const resetHandler = () => {
    setInputNumber("");
    setConfirmed(false);
  };

  const confirmHandler = () => {
    const _number = parseInt(inputNumber);
    if (isNaN(_number) || _number <= 0 || _number > 99) {
      Alert.alert("Invalid number", "Number's between 1-99", [
        { text: "Okay", type: "destructive", onPress: resetHandler }
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(_number);
    setInputNumber("");
  };
  let chosedNumber;
  if (confirmed) {
    chosedNumber = (
      <Card style={{ alignItems: "center" }}>
        <Text> You'r chosed number:</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="Start Game"
          onPress={() => props.handlerNumber(selectedNumber)}
        />
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number:</Text>
          <Input
            style={{ width: "80%", textAlign: "center" }}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={inputHandler}
            value={inputNumber}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetHandler}
                color={color.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmHandler}
                color={color.primary}
              />
            </View>
          </View>
        </Card>
        {chosedNumber}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;
const styles = StyleSheet.create({
  screen: { flex: 1, padding: 10, alignItems: "center" },
  title: {
    fontSize: 20,
    fontFamily: "open-sans-bold"
  },
  inputContainer: {
    alignItems: "center",

    backgroundColor: "#eee"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20
  },
  button: {
    width: "40%",
    maxWidth: 100
  },
  mt10: {
    marginVertical: 10,
    paddingVertical: 10
  }
});
