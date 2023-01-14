import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { useFonts } from "expo-font";
import styles from "./Styles";

const Care = ({ navigation }) => {
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
    <SafeAreaView>
      <ScrollView>
        <View style={[styles.container, { padding: 15 }]}>
          <View
            style={[
              styles.info,
              {
                justifyContent: "space-around",
                right: "8%"
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
                  lineHeight: 90,
                  right: "25%"
                }
              ]}
            >
              Care
            </Text>
          </View>

          <View
            style={[
              styles.container,
              {
                flex: 1,
                padding: 6
              }
            ]}
          >
            <Text
              style={[
                styles.customText,
                {
                  fontFamily: "LexendBold",
                  fontSize: 16
                }
              ]}
            >
              {"\n"}How to take care of your garment{"\n"}
            </Text>
            <View style={styles.info}>
              <Image
                source={require("../../assets/pics/washing.png")}
                style={{ padding: 3, margin: 6 }}
              />
              <Text
                style={[
                  styles.customText,
                  {
                    fontFamily: "LexendRegular",
                    fontSize: 14
                  }
                ]}
              >
                Washing.{" "}
              </Text>
            </View>
            <Text
              style={[
                styles.customText,
                {
                  fontFamily: "LexendLight",
                  fontSize: 14
                }
              ]}
            >
              {"\n"}Hand wash in cold water with wool/ cashmere detergent, or
              delicate cycle with cold water.{"\n"}
            </Text>
            <View style={styles.info}>
              <Image
                source={require("../../assets/pics/drying.png")}
                style={{ padding: 3, margin: 6 }}
              />
              <Text
                style={[
                  styles.customText,
                  {
                    fontFamily: "LexendRegular",
                    fontSize: 14
                  }
                ]}
              >
                Drying.{" "}
              </Text>
            </View>
            <Text
              style={[
                styles.customText,
                {
                  fontFamily: "LexendLight",
                  fontSize: 14
                }
              ]}
            >
              {"\n"}Lay flat on towel and roll to take out extra water, but
              don't ring out to dry. Roll back out & lay flat to dry on one
              side. You may need to flip the sweater to the other side after a
              few hours.{"\n"}
            </Text>
            <View style={styles.info}>
              <Image
                source={require("../../assets/pics/extraCare.png")}
                style={{ padding: 3, margin: 6 }}
              />
              <Text
                style={[
                  styles.customText,
                  {
                    fontFamily: "LexendRegular",
                    fontSize: 14
                  }
                ]}
              >
                Extra Care.{" "}
              </Text>
            </View>
            <Text
              style={[
                styles.customText,
                {
                  fontFamily: "LexendLight",
                  fontSize: 14
                }
              ]}
            >
              {"\n"} After each wear, lay out to air out. Wool sweaters should
              not be laundered often (appx. every 6-10 wears) to last longer.Use
              a sweater comb to take off pilling. (edited)
            </Text>
            <Text>
              {"\n"}
              {"\n"}
              {"\n"}
              {"\n"}
              {"\n"}
              {"\n"}
              {"\n"}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Care;
