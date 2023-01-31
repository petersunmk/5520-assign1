import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Color from "../helper/Color";
import Card from "../components/Card";

const ConfirmScreen = (props) => {
  return (
    <View style={styles.container}>
      <Card title="Confirm Details" />
      <Text style={styles.text}>
        Are you sure you want to proceed with the following details:
      </Text>
      <Text style={styles.text}>{props.enteredText}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Confirm"
          color={Color.primary}
          onPress={props.onConfirm}
        />
        <Button title="Cancel" color={Color.danger} onPress={props.onCancel} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});

export default ConfirmScreen;
