import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Color from "../helper/Color";

export default function Header({ appName }) {
  //console.log(appName);
  return (
    <View>
      <Text style={styles.header}>{appName} </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    color: Color.text,
    borderColor: "rebeccapurple",
    borderWidth: 2,
    padding: 5,
    fontSize: 24,
    marginTop: 30,
  },
});
