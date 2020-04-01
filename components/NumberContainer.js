import React from "react";
import { StyleSheet, Text, View } from "react-native";
import color from "../constants/color";

const NumberContainer = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  screen: {
    width: "30%",
    borderWidth: 2,
    borderColor: color.accent,
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  number: {
    color: color.accent,
    fontSize: 20
  }
});
