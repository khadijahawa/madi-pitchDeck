import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { NavigationContainer, useScrollToTop } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Care from "./src/screens/Care";
import Repair from "./src/screens/Repair";
import Resale from "./src/screens/Resale";
import OriginStory from "./src/screens/OriginStory";
import styles from "./src/screens/Styles";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        {/* <ScrollView
          contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
        > */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Care" component={Care} />
        <Stack.Screen name="Repair" component={Repair} />
        <Stack.Screen name="Resale" component={Resale} />
        <Stack.Screen name="OriginStory" component={OriginStory} />
        {/* </ScrollView> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
