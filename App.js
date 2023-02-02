import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

import Color from "./helper/Color";

import StartingScreen from "./screens/Start";
import ConfirmScreen from "./screens/Confirm";
import FinishScreen from "./screens/Finish";
import Header from "./components/Header";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const appName = "Welcome to Sign Up App";
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [showFinish, setShowFinish] = useState(false);
  const [finishLater, setFinishLater] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [visible, setVisible] = useState(false);
  // main function to handle the signup
  const handleSignup = () => {
    if (!emailValid || !phoneValid) {
      return;
    }
    setShowConfirm(true);
    setVisible(true);
  };
  // function to handle the email change
  const handleBackToStart = () => {
    setShowConfirm(false);
    setShowFinish(false);
    setVisible(false);
  };
  // function to go to confirm screen
  const handleConfirm = () => {
    setShowConfirm(false);
    setShowFinish(true);
    setVisible(false);
  };
  //function to go to finish screen
  const handleFinishLater = () => {
    setShowConfirm(false);
    setShowFinish(true);
    setFinishLater(true);
    setVisible(false);
  };
  //"Reset" and "start again" button  with all the info erased
  const handleReset = () => {
    setEmail("");
    setPhone("");
    setShowConfirm(false);
    setShowFinish(false);
    setFinishLater(false);
    setEmailValid(false);
    setPhoneValid(false);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[Color.primary, "transparent"]}
        style={styles.background}
      />

      <Header appName={appName} />

      {/* conditionally render the screens 
      email and phone value and their status are passed to the screens */}
      {showConfirm ? (
        <ConfirmScreen
          email={email}
          phone={phone}
          onBackToStart={handleBackToStart}
          onConfirm={handleConfirm}
          visible={visible}
          onFinishLater={handleFinishLater}
        />
      ) : showFinish ? (
        <FinishScreen
          email={email}
          phone={phone}
          finishLater={finishLater}
          onReset={handleReset}
        />
      ) : (
        <StartingScreen
          email={email}
          phone={phone}
          emailValid={emailValid}
          phoneValid={phoneValid}
          onEmailChange={setEmail}
          onPhoneChange={setPhone}
          onSignup={handleSignup}
          onReset={handleReset}
          onEmailValidityChange={setEmailValid}
          onPhoneValidityChange={setPhoneValid}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
