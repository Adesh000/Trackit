import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import InputField from "./InputField";

const CustomModal = ({ visibility }) => {
  const [modalVisibility, setModalVisibility] = useState(visibility);

  //function to change the state of visibility
  const handleVisibility = () => {
    setModalVisibility(!modalVisibility);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibility}
        onRequestClose={() => {
          setModalVisibility(!modalVisibility);
        }}
      >
        <View style={{ backgroundColor: "rgba(0,0,0,0.5)", flex: 1 }}>
          <View style={styles.mainContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                margin: 20,
              }}
            >
              <Text style={{ flex: 1, textAlign: "center", fontSize: 18 }}>
                Add Income/Expenses{" "}
              </Text>
              <Pressable onPress={handleVisibility}>
                <Entypo name="cross" size={30} color="black" />
              </Pressable>
            </View>
            <View style={styles.formContainer}>
              <View style={styles.btnContainer}>
                <TouchableOpacity
                  style={[
                    styles.btn,
                    { borderTopLeftRadius: 10, borderBottomLeftRadius: 10 },
                  ]}
                >
                  <Text style={{ color: "#fff" }}>Income</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.btn,
                    { borderTopRightRadius: 10, borderBottomRightRadius: 10 },
                  ]}
                >
                  <Text style={{ color: "#fff" }}>Expense</Text>
                </TouchableOpacity>
              </View>
              <InputField placeholder="Amount" />
              <InputField placeholder="Description" />
              <InputField placeholder="Date" />
              <Pressable>
                <Text style={{ color: "#F9C201", fontSize: 20 }}>Save</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
  formContainer: {
    margin: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  btn: {
    backgroundColor: "#F9C201",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
