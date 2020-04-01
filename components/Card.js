import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = props => {
  return (
    <View style={{ ...styles.screen, ...props.style }}>{props.children}</View>
  );
};

export default Card;
const styles = StyleSheet.create({
  screen: {
    width: "100%",
    paddingVertical: 10,
    marginVertical: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    borderRadius: 5
  }
});
