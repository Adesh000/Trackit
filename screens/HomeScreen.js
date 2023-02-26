import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import CustomModal from "../components/CustomModal";
import { Entypo } from "@expo/vector-icons";
import InputField from "../components/InputField";
import SwitchSelector from "react-native-switch-selector";
import TransactionBox from "../components/TransactionBox";

const transactionArray = [];

const HomeScreen = ({ navigation }) => {
  const [visibility, setVisibility] = useState(false);

  const [amountData, setAmountData] = useState({
    type: "Income",
    amount: "",
    description: "",
    date: "",
  });

  const { type, amount, description, date } = amountData;

  // Updates the data
  const handleDataChange = (value, fieldName) => {
    setAmountData({ ...amountData, [fieldName]: value });
  };

  // Submits the changed Data
  const submitChanges = () => {
    transactionArray.push(amountData);
    console.log(transactionArray);
    setAmountData({
      type: "Income",
      amount: "",
      description: "",
      date: "",
    });
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <FontAwesome5
          name="user-circle"
          size={30}
          color="#fff"
          onPress={() => navigation.navigate("Profile")}
        />
      ),
    });
  }, [navigation]);

  const handleVisibility = () => {
    setVisibility(!visibility);
  };

  const data = transactionArray;
  console.log(data);

  return (
    <SafeAreaView style={styles.Container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TransactionBox description={item.description} amount={item.amount} />
        )}
        ListHeaderComponent={() => (
          <View
            style={{
              backgroundColor: "#fff",
              width: Dimensions.get("screen").width,
            }}
          >
            <View style={styles.displayContainer}>
              <View style={styles.balanceBox}>
                <Text style={styles.bText}>Balance</Text>
                <Text style={styles.nText}>$3000</Text>
              </View>
              <View style={styles.vLine}></View>
              <View styles={styles.rightBox}>
                <View style={styles.incomeContainer}>
                  <Text style={styles.bText}>Income</Text>
                  <Text style={[styles.nText, { color: "#00B152" }]}>
                    $7329
                  </Text>
                </View>
                <View style={styles.expenseContainer}>
                  <Text style={[styles.nText, { color: "#D10000" }]}>
                    $4329
                  </Text>
                  <Text style={styles.bText}>Expense</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />

      {/* <CustomModal visibility={visibility}/> */}

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
                {/* <TouchableOpacity
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
                    {
                      borderTopRightRadius: 10,
                      borderBottomRightRadius: 10,
                      backgroundColor: "#e5e5e5",
                    },
                  ]}
                >
                  <Text style={{}}>Expense</Text>
                </TouchableOpacity> */}
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

      <TouchableOpacity style={styles.buttonBox} onPress={handleVisibility}>
        <Entypo name="plus" size={24} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#E5E5E5",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  displayContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 20,
    // backgroundColor: "#fff",
    borderColor: "#E5E5E5",
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
  },
  balanceBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  incomeContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 5,
  },
  expenseContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 5,
  },
  vLine: {
    width: 2,
    height: 150,
    backgroundColor: "#E5E5E5",
  },
  rightBox: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bText: {
    fontSize: 15,
  },
  nText: {
    color: "#02BEE8",
    fontSize: 35,
  },
  buttonBox: {
    backgroundColor: "#F9C201",
    width: 50,
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
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
    marginBottom: 50,
  },
  btn: {
    backgroundColor: "#F9C201",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  inputContainer: {
    borderColor: "#e5e5e5",
    borderWidth: 2,
    marginVertical: 10,
    width: "100%",
    padding: 5,
    borderRadius: 10,
  },
});
