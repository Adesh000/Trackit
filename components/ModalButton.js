import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';

const ModalButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonBox} onPress={onPress}>
      <Entypo name="plus" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

export default ModalButton;

const styles = StyleSheet.create({
  buttonBox: {
    backgroundColor: "#F9C201",
    width: 50,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: "center"
  },
});
