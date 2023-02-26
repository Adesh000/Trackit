import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";

const TransactionBox = ({ description, amount, color, type, date }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
        <View style={styles.box}>
          <Text style={styles.text}>{description}</Text>
          <Text style={[styles.text, { color: `${color}` }]}>{amount}</Text>
        </View>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => setIsVisible(!isVisible)}
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
                {type}
              </Text>
              <Pressable onPress={() => setIsVisible(!isVisible)}>
                <Entypo name="cross" size={30} color="black" />
              </Pressable>
            </View>

            <Text>{amount}</Text>
            <Text>{description}</Text>
            <Text>{date}</Text>
            <TouchableOpacity>
              <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      
      {/* modal for edit */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={visibility}
        onRequestClose={() => {
          setVisibility(!visibility);
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
                Add Income/Expenses
              </Text>
              <Pressable onPress={handleVisibility}>
                <Entypo name="cross" size={30} color="black" />
              </Pressable>
            </View>
            <View style={styles.formContainer}>
              <View style={styles.btnContainer}>
                <SwitchSelector
                  options={[
                    { label: "Income", value: "Income" },
                    { label: "Expense", value: "Expense" },
                  ]}
                  initial={0}
                  onPress={(value) => handleDataChange(value, "type")}
                  style={{ width: 200 }}
                  borderRadius={10}
                  buttonColor="#F9C201"
                  backgroundColor="#e5e5e5"
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Amount"
                  autoCapitalize={false}
                  keyboardType="number-pad"
                  value={amount}
                  onChangeText={(value) => handleDataChange(value, "amount")}
                  autoFocus={true}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Description"
                  autoCapitalize={false}
                  value={description}
                  onChangeText={(value) =>
                    handleDataChange(value, "description")
                  }
                  autoFocus={true}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Date"
                  autoCapitalize={false}
                  value={date}
                  onChangeText={(value) => handleDataChange(value, "date")}
                  autoFocus={true}
                />
              </View>

              {/* <InputField placeholder="Amount" />
              <InputField placeholder="Description" />
              <InputField placeholder="Date" /> */}
              <Pressable>
                <Text
                  style={{ color: "#F9C201", fontSize: 20 }}
                  onPress={submitChanges}
                >
                  Save
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TransactionBox;

const styles = StyleSheet.create({
  box: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 10,
    borderWidth: 2,
    borderColor: "#e5e5e5",
    marginTop: 10,
    marginRight: 20,
    borderRadius: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  mainContainer: {
    flex: 1,
    marginTop: 100,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
