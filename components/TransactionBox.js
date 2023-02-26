import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const TransactionBox = ({ description, amount }) => {
  return (
    <View style={{paddingHorizontal: 30}}>
      <View style={styles.box}>
        <Text style={styles.descriptionText}>{description}</Text>
        <Text style={styles.amountText}>{amount}</Text>
      </View>
    </View>
  );
};

export default TransactionBox;

const styles = StyleSheet.create({
  box: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "#fff",
    margin: 30
  },
  descriptionText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  amountText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
