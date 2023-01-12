import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Care = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Care</Text>
      <Button
        title="Go to Home... again"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default Care;
