import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const OriginStory = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Origin Story</Text>
      <Button
        title="Go to Home... again"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default OriginStory;
