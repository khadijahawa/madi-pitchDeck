import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

import styles from "./Styles";

const OriginStory = ({ navigation }) => {
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
      <ScrollView contentContainerStyle={{}}>
        <View style={styles.container}>
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
              Origin Story
            </Text>
          </View>

          <Image
            source={require("../../assets/pics/originStory.png")}
            style={styles.Image}
          />
          <View
            style={[
              styles.container,
              {
                paddingHorizontal: 14,
                // marginBottom: 6
                justifyContent: "center"
              }
            ]}
          >
            <Text
              style={[
                styles.customText,
                {
                  fontFamily: "LexendSemiBold",
                  fontSize: 22
                }
              ]}
            >
              {"\n"}About the fabric
            </Text>
            <Text
              style={[
                styles.customText,
                {
                  fontFamily: "LexendLight",
                  fontSize: 14
                }
              ]}
            >
              {"\n"}This product is 100% wool. Wool is one of the most durable
              fabrics, with excellent body warming properties. It can last for
              generations if taken care of properly{"\n"}
              {"\n"}.RWS (Responsible Wool Standard){"\n"}
            </Text>
            <Text
              style={[
                styles.customText,
                {
                  fontFamily: "LexendSemiBold",
                  fontSize: 22
                }
              ]}
            >
              Product journey
            </Text>
            <Text
              style={[
                styles.customText,
                {
                  fontFamily: "LexendLight",
                  fontSize: 14
                }
              ]}
            >
              {"\n"}This wool was responsibly sheared at a Gotland, Sweden sheep
              farm, where sheep are sheared twice per year.{"\n"}
              {"\n"} The wool was spun by Hjelholts in Denmark and responsibly
              dyed in the U.K. with no hazardous chemicals.{"\n"}
              {"\n"} This sweater was cut and sewn together by OK Babystrik in
              Denmark before it came to you.{"\n"}
            </Text>
            <Text
              style={[
                styles.customText,
                {
                  fontFamily: "LexendSemiBold",
                  fontSize: 22
                }
              ]}
            >
              Environmental impact{"\n"}
            </Text>
            <View style={styles.info}>
              <Image
                source={require("../../assets/pics/Cloud.png")}
                style={{ margin: 3 }}
              />
              <Text
                style={[
                  styles.customText,
                  {
                    fontFamily: "LexendLight",
                    fontSize: 14
                  }
                ]}
              >
                10.5 kg of CO2 or 42 km driven.{" "}
              </Text>
            </View>

            <View style={styles.info}>
              <Image
                source={require("../../assets/pics/Drop.png")}
                style={{ margin: 3 }}
              />
              <Text
                style={[
                  styles.customText,
                  {
                    fontFamily: "LexendLight",
                    fontSize: 14
                  }
                ]}
              >
                Responsibly dyed, certified by REACH.
              </Text>
            </View>
            <Text>
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

export default OriginStory;
