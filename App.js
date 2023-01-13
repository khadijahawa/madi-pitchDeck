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
// import styles from "./src/screens/Styles";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            // headerStyle: {
            //   justifyContent: "center",
            //   alignItems: "center",
            //   alignSelf: "center",
            // },
            // // headerTintColor: "#fff",
            // headerTitleStyle: {
            //   fontWeight: "bold",
            //   alignSelf: "center",

            //   justifyContent: "center",
            //   alignItems: "center",
            // },
          }}
        />
        <Stack.Screen name="Care" component={Care} />
        <Stack.Screen name="Repair" component={Repair} />
        <Stack.Screen name="Resale" component={Resale} />
        <Stack.Screen name="Origin Story" component={OriginStory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
