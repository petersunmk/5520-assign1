import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const Input = ({ textUpdateFunction, modalIsVisible, onCancel }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (!modalIsVisible) {
      setText("");
    }
  }, [modalIsVisible]);

  return (
    <Modal visible={modalIsVisible}>
      <View style={styles.container}>
        <TextInput style={styles.input} value={text} onChangeText={setText} />

        <View style={styles.buttonContainer}>
          <Button
            title="Reset"
            color="red"
            onPress={() => {
              textUpdateFunction(text);
              setText("");
            }}
            style={styles.button}
          />
          <Button title="Sign Up" onPress={onCancel} style={styles.button} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderBottomColor: "rebeccapurple",
    borderBottomWidth: 2,
    width: "80%",
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 10,
  },
  button: {
    width: "40%",
    color: "red",
  },
});

export default Input;
