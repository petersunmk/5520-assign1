import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import TextLabel from "../components/Text";
import Color from "../helper/Color";
import Card from "../components/Card";

const FinishScreen = ({ onRestart }) => (
  <View style={styles.container}>
    <Text style={styles.title}>All done!</Text>
    <Card>
      <TextLabel>Your information has been successfully submitted.</TextLabel>
      <Button title="Restart" onPress={onRestart} color={Color.primary} />
    </Card>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default FinishScreen;
