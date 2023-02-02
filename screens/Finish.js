import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import Card from "../components/Card";
import Color from "../helper/Color";
// two different images shown based on finishLater prop
const FinishScreen = (props) => {
  var imageURL = "";
  var yourDigit = props.phone[props.phone.length - 1];
  imageURL = `https://picsum.photos/id/${yourDigit}/${styles.image.width}/${styles.image.height}`;

  return (
    <View>
      <Card style={styles.card}>
        {props.finishLater ? (
          <>
            <Text style={styles.message}>Sorry to see you go... </Text>
            <Text style={styles.message}>Please come back later.</Text>
            <Image
              style={styles.image}
              source={require("../assets/unamusedFace.png")}
            />
          </>
        ) : (
          <>
            <Text style={styles.message}>Thank you for signing up ^_^ </Text>
            <Text style={styles.message2}>
              Here is the picture shown based on the last digit of your input
              phone number
            </Text>
            {/* picture shown based on last digit of input number */}
            <Image style={styles.image} source={{ uri: imageURL }} />
          </>
        )}
        <View style={styles.buttonContainer}>
          <Button title="Start Again" onPress={props.onReset} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    fontSize: 18,
    marginVertical: 10,
    color: Color.text,
    textAlign: "center",
  },
  message2: {
    fontSize: 16,
    marginVertical: 10,
    color: Color.text,
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
});

export default FinishScreen;
