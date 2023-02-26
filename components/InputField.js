import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const InputField = ({ placeholder }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        autoCapitalize={false}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: "#e5e5e5",
    borderWidth: 2,
    marginVertical: 10,
    width: "100%",
    padding: 5,
    borderRadius: 10,
  },
});
