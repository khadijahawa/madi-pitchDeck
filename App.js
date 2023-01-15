import React, { useState, useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import QRCodeScanner from "react-native-qrcode-scanner";
// import { BarCodeScanner } from "react-native-camera";

import Home from "./src/screens/Home";
import Care from "./src/screens/Care";
import Repair from "./src/screens/Repair";
import Resale from "./src/screens/Resale";
import OriginStory from "./src/screens/OriginStory";
// import styles from "./src/screens/Styles";

const Stack = createNativeStackNavigator();
export default function App() {
  // const navigation = useNavigation();
  // const [scanned, setScanned] = useState(false);

  // const handleBarCodeScanned = ({ type, data }) => {
  //   setScanned(true);
  //   if (data === "madi-pitch-deck") {
  //     navigation.navigate("Home");
  //   }
  // };
  return (
    // <BarCodeScanner
    //   onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
    //   style={StyleSheet.absoluteFillObject}
    // >
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Care"
          component={Care}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Repair"
          component={Repair}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Resale"
          component={Resale}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Origin Story"
          component={OriginStory}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </BarCodeScanner>
  );
}
