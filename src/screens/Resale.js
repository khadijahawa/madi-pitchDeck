import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Resale = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Resale</Text>
      <Button
        title="Go to Home... again"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default Resale;
