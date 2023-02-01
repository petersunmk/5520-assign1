import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import Card from "../components/Card";
import Color from "../helper/Color";

const FinishScreen = (props) => {
  var imageURL = "";
  var lastPhoneDigit = props.phone[props.phone.length - 1];
  imageURL = `https://picsum.photos/id/${lastPhoneDigit}/${styles.image.width}/${styles.image.height}`;

  return (
    <Card>
      <View style={styles.container}>
        {props.finishLater ? (
          <Text style={styles.message}>
            Sorry to see you go, please come back later.
          </Text>
        ) : (
          <>
            <Text style={styles.message}>
              Thank you for signing up, here is the picture shown based on your
              last digit phone No.
            </Text>
            <Image style={styles.image} source={{ uri: imageURL }} />
            {/* source={require("./image.png")}  */}
          </>
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
  image: {
    width: 200,
    height: 200,
  },
});

export default FinishScreen;
