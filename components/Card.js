import React from "react";
import { View, StyleSheet } from "react-native";

import Color from "../helper/Color";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};
//commonnly used card style
const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.secondary,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowRadius: 6,
    padding: 20,
    width: 300,
    maxWidth: "80%",
    padding: 1,
    marginTop: 50,
  },
});

export default Card;
