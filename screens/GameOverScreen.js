import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Game is over !</Text>
      <Text>Round number:{props.round}</Text>
      <Button title="Play Again" onPress={props.replay} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  }
});
