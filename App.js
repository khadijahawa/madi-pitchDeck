import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Care from "./src/screens/Care";
import Repair from "./src/screens/Repair";
import Resale from "./src/screens/Resale";
import OriginStory from "./src/screens/OriginStory";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{ title: "Welcome" }}
        />
        {/* <Stack.Screen name="Care" component={Care} />
        <Stack.Screen name="Repair" component={Repair} />
        <Stack.Screen name="Resale" component={Resale} />
        <Stack.Screen name="OriginStory" component={OriginStory} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
