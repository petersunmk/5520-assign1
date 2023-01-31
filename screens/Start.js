// import React from "react";
// import { View, Text, StyleSheet, Button } from "react-native";
// import Color from "../helper/Color";
// import Card from "../components/Card";

// const StartingScreen = () => {
//   return (
//     <View style={styles.screen}>
//       <Text style={styles.text}>Start Screen</Text>
//       <Card title="Sign In" />
//       <Button title="Sign Up" color={Color.primary} onPress={() => {}} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     fontSize: 18,
//   },
// });

// export default StartingScreen;
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Color from "../helper/Color";

const StartingScreen = ({
  email,
  phone,
  emailValid,
  phoneValid,
  onEmailChange,
  onPhoneChange,
  onSignup,
  handleReset,
  handleSignup,
  onEmailValidityChange,
  onPhoneValidityChange,
}) => {
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateEmail = (email) => {
    if (!email) {
      setEmailError("Email is required");
      onEmailValidityChange(false);
      return;
    }

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      onEmailValidityChange(false);
      return;
    }

    onEmailValidityChange(true);
  };

  const validatePhone = (phone) => {
    if (!phone) {
      setPhoneError("Phone number is required");
      onPhoneValidityChange(false);
      return;
    }

    if (isNaN(phone) || phone.length !== 10) {
      setPhoneError("Phone number should be 10 digits");
      onPhoneValidityChange(false);
      return;
    }

    onPhoneValidityChange(true);
  };

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={onEmailChange}
          onBlur={() => validateEmail(email)}
        />
        {!emailValid && <Text style={styles.errorText}>{emailError}</Text>}
      </View>
      <View>
        <Text style={styles.text}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={onPhoneChange}
          onBlur={() => validatePhone(phone)}
        />
        {!phoneValid && <Text style={styles.errorText}>{phoneError}</Text>}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Reset" onPress={handleReset} />
        <Button
          title="Sign up"
          onPress={
            (handleSignup,
            () => {
              validateEmail(email), validatePhone(phone);
            })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 300,
    maxWidth: "80%",
    padding: 1,
  },
  text: {
    color: Color.primary,
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    padding: 2,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 5,
  },
  errorText: {
    fontSize: 12,
    color: "red",
    marginBottom: 1,
  },
});

export default StartingScreen;
