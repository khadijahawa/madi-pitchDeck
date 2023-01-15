import React, { useState } from "react";
import { useFonts } from "expo-font";

import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  Modal
} from "react-native";
import { RadioButton } from "react-native-paper";

import styles from "./Styles";

const Resale = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState();

  const [loaded] = useFonts({
    LexendBold: require("../../assets/fonts/Lexend-Bold.ttf"),
    LexendRegular: require("../../assets/fonts/Lexend-Regular.ttf"),
    LexendLight: require("../../assets/fonts/Lexend-Light.ttf"),
    SoraBold: require("../../assets/fonts/Sora-Bold.ttf"),
    SoraLight: require("../../assets/fonts/Sora-Light.ttf")
  });

  if (!loaded) {
    return null;
  }

  function handleClick() {
    setModalVisible(true);
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={[
            styles.container,
            {
              padding: 15
            }
          ]}
        >
          <View
            style={[
              styles.info,
              {
                justifyContent: "space-around",
                right: "6%"
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
                  fontFamily: "LexendBold",
                  fontSize: 22,
                  lineHeight: 90,
                  right: "15%"
                }
              ]}
            >
              Resale
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.customText,
                {
                  fontFamily: "LexendBold",
                  fontSize: 16
                }
              ]}
            >
              Interested in selling your Product?
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
              Here are some options for you!{"\n"}
            </Text>
            <Image
              source={require("../../assets/pics/Home.png")}
              style={styles.Image}
            />
          </View>
          <View style={[styles.info, { justifyContent: "space-between" }]}>
            <Text>Price you bought it for:</Text>
            <Text style={[styles.Text, { fontFamily: "LexendRegular" }]}>
              250 €{"\n"}
            </Text>
          </View>

          <View style={[styles.info, { justifyContent: "space-between" }]}>
            <Text>Date of purchase: </Text>
            <Text style={[styles.Text, { fontFamily: "LexendRegular" }]}>
              2 December 2022
            </Text>
          </View>
          <Text>{"\n"}</Text>
          <View style={[styles.lineStyle, {}]} />

          <View style={styles.info}>
            <Text
              style={[
                styles.customText,
                {
                  fontFamily: "LexendBold",
                  fontSize: 16
                }
              ]}
            >
              {"\n"}Resale options {"\n"}
            </Text>
            <Text>
              {"\n"} {"\n"}
            </Text>

            <TouchableOpacity onPress={handleClick} style={{ margin: 6 }}>
              <Image source={require("../../assets/pics/info.png")} />
            </TouchableOpacity>
            <Text>
              {"\n"}
              {"\n"}
            </Text>

            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
            >
              <View
                style={[
                  {
                    position: "relative",
                    top: "45%",
                    left: "46%",
                    backgroundColor: "#545454",
                    padding: 18,
                    // justifyContent: "center",
                    // alignItems: "flex-start",
                    width: "52%",
                    borderRadius: 10
                  }
                ]}
              >
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Image source={require("../../assets/pics/cancel.png")} />
                  <Text style={styles.textModal}>
                    1.Chose which resaler you wish to sell through.{"\n"}
                    {"\n"}
                    2.Be directed to their site where all your product
                    information is there.{"\n"}
                    {"\n"}
                    3.Just enter its condition and it’s ready for sale.{"\n"}
                    {"\n"}
                  </Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
          <View style={[styles.info, { justifyContent: "space-between" }]}>
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => {
                setChecked("first");
                Linking.openURL("https://www.vestiairecollective.com/");
              }}
            />
            <Image source={require("../../assets/pics/vestiaire.png")} />
            <Text>
              {"\n"}
              Est. resale price: 150€ {"\n"}
              Your estimated commission: 85€
              {"\n"}
            </Text>
          </View>
          <View style={[styles.info, { justifyContent: "space-between" }]}>
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => {
                setChecked("second");
                Linking.openURL("https://rerobe.se/sv-SE");
              }}
            />
            <Image source={require("../../assets/pics/rerobe.png")} />
            <Text>
              {"\n"}
              Est. resale price: 150€ {"\n"}
              Your estimated commission: 85€ {"\n"}
            </Text>
          </View>
          <View style={[styles.info, { justifyContent: "space-between" }]}>
            <RadioButton
              value="third"
              status={checked === "third" ? "checked" : "unchecked"}
              onPress={() => {
                setChecked("third");
                Linking.openURL("https://www.grailed.com/");
              }}
            />
            <Image source={require("../../assets/pics/grailed.png")} />
            <Text>
              {"\n"}
              Est. resale price: 150€ {"\n"}
              Your estimated commission: 85€ {"\n"}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.HomeButton}
          >
            <Text style={styles.HomeButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Resale;
