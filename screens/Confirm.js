import React from "react";
import { StyleSheet, View, Text, Modal, Button } from "react-native";

import Color from "../helper/Color";
import Card from "../components/Card";
// confirm screen is shown in modal
const ConfirmScreen = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.screen}>
        <Card style={styles.card}>
          <Text style={styles.text}> Please confirm your input： </Text>
          <Text style={styles.text2}> Email: {props.email} </Text>
          <Text style={styles.text2}> Phone:{props.phone} </Text>

          <View style={styles.buttons}>
            <Button title="Go Back" onPress={props.onBackToStart} />
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
    backgroundColor: Color.primary,
    alignItems: "center",
    flex: 1,
    fullscreen: true,
  },
  buttons: {
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    padding: 8,
  },
  text: {
    fontSize: 20,
    color: Color.text,
    marginVertical: 10,
    textAlign: "center",
  },
  text2: {
    fontSize: 16,
    color: Color.text,
    textAlign: "center",
  },
});
export default ConfirmScreen;
