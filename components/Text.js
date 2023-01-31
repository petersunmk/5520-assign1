import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TextLabel = (props) => {
  return (
    <View style={styles.container}>
      <TextLabel style={styles.text}>{props.children}</TextLabel>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "#4510ff",
  },
});

export default TextLabel;
