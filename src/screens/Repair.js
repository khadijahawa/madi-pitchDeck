import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from "react-native";
import { useFonts } from "expo-font";

import styles from "./Styles";

const Repair = ({ navigation }) => {
  const [loaded] = useFonts({
    LexendBold: require("../../assets/fonts/Lexend-Bold.ttf"),
    LexendRegular: require("../../assets/fonts/Lexend-Regular.ttf"),
    LexendLight: require("../../assets/fonts/Lexend-Light.ttf"),
    LexendSemiBold: require("../../assets/fonts/Lexend-SemiBold.ttf"),
    SoraBold: require("../../assets/fonts/Sora-Bold.ttf"),
    SoraLight: require("../../assets/fonts/Sora-Light.ttf")
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={[
          styles.info,
          {
            justifyContent: "space-around",
            right: "5%",
            // marginLeft: 1
            paddingTop: 22
          }
        ]}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={require("../../assets/pics/cancelScreen.png")} />
        </TouchableOpacity>

        <Text
          style={[
            styles.customText,
            {
              fontFamily: "LexendSemiBold",
              fontSize: 22,
              alignSelf: "center",
              lineHeight: 80
              // marginRight: 12
            }
          ]}
        >
          Repair
        </Text>
      </View>
    </View>
  );
};

export default Repair;
