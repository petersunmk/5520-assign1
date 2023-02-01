import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

import Color from "./helper/Color";
import Card from "./components/Card";
import StartingScreen from "./screens/Start";
import ConfirmScreen from "./screens/Confirm";
import FinishScreen from "./screens/Finish";
import Header from "./components/Header";

export default function App() {
  const appName = "Welcome to Sign Up App";
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [showFinish, setShowFinish] = useState(false);
  const [finishLater, setFinishLater] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);

  const handleSignup = () => {
    if (!emailValid || !phoneValid) {
      return;
    }
    setShowConfirm(true);
  };

  const handleBackToStart = () => {
    setShowConfirm(false);
    setShowFinish(false);
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    setShowFinish(true);
  };

  const handleFinishLater = () => {
    setShowConfirm(false);
    setShowFinish(true);
    setFinishLater(true);
  };

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
    <SafeAreaView style={styles.container}>
      <Header appName={appName} />
      {showConfirm ? (
        <ConfirmScreen
          email={email}
          phone={phone}
          onBackToStart={handleBackToStart}
          onConfirm={handleConfirm}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.secondary,
    alignItems: "center",
    // justifyContent: "center",
  },
});
