// import { StatusBar } from "expo-status-bar";
// import { useState } from "react";
// import {
//   Button,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from "react-native";
// import Header from "./components/Header";
// import Input from "./components/Input";
// import Color from "./helper/Color";
// import Card from "./components/Card";
// import StartingScreen from "./screens/Start";
// import ConfirmScreen from "./screens/Confirm";
// import FinishScreen from "./screens/Finish";

// export default App = () => {
//   const name = "Sign Up";
//   const [enteredText, setEnteredText] = useState("");

//   const [modalVisible, setModalVisible] = useState(true);
//   function onTextEnter(changedText) {
//     setEnteredText(changedText);
//   }
//   function onCancel() {
//     setModalVisible(false);
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar style="auto" />
//       <View style={styles.topContainer}>
//         <Header appName={name} />
//       </View>

//       <StartingScreen />
//       {/* <ConfirmScreen />
//       <FinishScreen />

//       <View style={styles.inputContainer}>
//         <Input
//           modalIsVisible={modalVisible}
//           textUpdateFunction={onTextEnter}
//           onCancel={onCancel}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your email"
//           value={enteredText}
//           onChangeText={(text) => setEnteredText(text)}
//         />
//         <Button title="Submit" onPress={() => {}} />
//       </View>

//       <View style={styles.cardContainer}>
//         <Card title="Sign In" />
//         <Card title="Sign Up" />
//       </View>

//       <View style={styles.bottomContainer}>
//         <Text style={styles.text}>{enteredText}</Text>
//       </View> */}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "stretch",
//     justifyContent: "center",
//   },

//   topContainer: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   inputContainer: {
//     flex: 2,
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   input: {
//     borderWidth: 1,
//     borderColor: "#4510ff",
//     padding: 10,
//     width: "80%",
//     marginBottom: 10,
//   },

//   cardContainer: {
//     flex: 3,
//     alignItems: "center",
//     justifyContent: "space-around",
//   },

//   bottomContainer: {
//     flex: 4,
//     backgroundColor: "#dcd",
//   },

//   text: {
//     fontSize: 18,
//     color: Color.primary,
//   },
// });
import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

import Color from "./helper/Color";
import Card from "./components/Card";
import StartingScreen from "./screens/Start";
import ConfirmScreen from "./screens/Confirm";
import FinishScreen from "./screens/Finish";

export default function App() {
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
    setEmail(" ");
    setPhone(" ");
    setShowConfirm(false);
    setShowFinish(false);
    setFinishLater(false);
    setEmailValid(false);
    setPhoneValid(false);
  };

  return (
    <SafeAreaView style={styles.container}>
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
    justifyContent: "center",
  },
});
