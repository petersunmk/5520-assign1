import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Color from "../helper/Color";

const Card = (props) => {
  return <View style={[styles.card, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.secondary,
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    width: 300,
    maxWidth: "80%",
    padding: 1,
    marginTop: 45,
  },
});

export default Card;
