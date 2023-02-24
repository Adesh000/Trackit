import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import ModalButton from "../components/ModalButton";
import { Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import CustomModal from "../components/CustomModal";

const HomeScreen = ({ navigation }) => {
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

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
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
                <Text style={[styles.nText, { color: "#00B152" }]}>$7329</Text>
              </View>
              <View style={styles.expenseContainer}>
                <Text style={[styles.nText, { color: "#D10000" }]}>$4329</Text>
                <Text style={styles.bText}>Expense</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <CustomModal />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#E5E5E5",
    flex: 1,
    alignItems: "center",
  },
  displayContainer: {
    flex: 1,
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
});
