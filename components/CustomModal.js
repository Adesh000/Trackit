import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ModalButton from "./ModalButton";
import { Entypo } from "@expo/vector-icons";

const CustomModal = () => {
  const [modalVisibility, setModalVisibility] = useState(false);

  //function to change the state of visibility
  const handleVisibility = () => {
    setModalVisibility(!modalVisibility);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setModalVisibility(!modalVisibility);
        }}
        visible={modalVisibility}
      >
        <View style={{ backgroundColor: "rgba(0,0,0,0.5)", flex: 1 }}>
          <View style={styles.mainContainer}>
            <View>
              <Text>Add Income/Expenses </Text>
              <Entypo name="cross" size={24} color="black" />
            </View>
            <View>
              <View>
                <TouchableOpacity>
                  <Text>Income</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text>Expense</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <ModalButton onPress={handleVisibility} />
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 100,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
