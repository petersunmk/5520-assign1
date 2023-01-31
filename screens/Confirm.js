import React from "react";
import { StyleSheet, View, Text, Modal, Button } from "react-native";

import Color from "../helper/Color";
import Card from "../components/Card";

const ConfirmScreen = (props) => {
  return (
    <Modal animationType="slide">
      <View style={styles.screen}>
        <Card>
          <Text style={styles.text}>Please confirm your input</Text>
          <Text>Email: {props.email}</Text>
          <Text>Phone: {props.phone}</Text>
          <View style={styles.buttons}>
            <Button title="Back to Start" onPress={props.onBackToStart} />
            <Button title="Confirm" onPress={props.onConfirm} />
            <Button title="Finish Later" onPress={props.onFinishLater} />
          </View>
        </Card>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.secondary,
  },
  buttons: {
    flexDirection: "column",
    justifyContent: "center",
    width: "70%",
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: Color.primary,
  },
});

export default ConfirmScreen;
