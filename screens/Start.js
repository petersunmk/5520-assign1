import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Color from "../helper/Color";
import Card from "../components/Card";

const StartingScreen = ({
  email,
  phone,
  emailValid,
  phoneValid,
  onEmailChange,
  onPhoneChange,
  onSignup,
  onReset,
  onEmailValidityChange,
  onPhoneValidityChange,
}) => {
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  //email validation function and error message
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
    setEmailError("");
  };
  //phone validation function and error message
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
    setPhoneError("");
  };

  useEffect(() => {
    if (emailValid && phoneValid) {
      onSignup();
      onEmailValidityChange(false);
      onPhoneValidityChange(false);
    }
  }, [emailValid, phoneValid]);

  return (
    <Card style={styles.card}>
      <View>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={onEmailChange}
        />
        {!emailValid && <Text style={styles.errorText}>{emailError}</Text>}
      </View>
      <View>
        <Text style={styles.text}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={onPhoneChange}
        />
        {!phoneValid && <Text style={styles.errorText}>{phoneError}</Text>}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Reset"
          onPress={() => {
            setEmailError("");
            setPhoneError("");
            onReset();
          }}
        />
        <Button
          title="Sign up"
          onPress={() => {
            validateEmail(email);
            validatePhone(phone);
          }}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: Color.text,
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    padding: 2,
    marginBottom: 5,
    textAlign: "center",
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
