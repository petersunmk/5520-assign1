import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Card from "../components/Card";
import Color from "../helper/Color";

const FinishScreen = (props) => {
  return (
    <Card>
      <View style={styles.container}>
        {props.finishLater ? (
          <Text style={styles.message}>
            Sorry to see you go, please come back later.
          </Text>
        ) : (
          <Text style={styles.message}>
            Thank you for signing up, here is the picture shown based on your
            last digit phone No.
          </Text>
        )}
        <View style={styles.buttonContainer}>
          <Button
            title="Start Over"
            color={Color.primary}
            onPress={props.onReset}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.secondary,
  },
  message: {
    fontSize: 18,
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default FinishScreen;
