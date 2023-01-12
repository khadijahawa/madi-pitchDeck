import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  SafeAreaView,
} from "react-native";
import styles from "./Styles";
import { useFonts } from "expo-font";

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loaded] = useFonts({
    LexendBold: require("../../assets/fonts/Lexend-Bold.ttf"),
    LexendRegular: require("../../assets/fonts/Lexend-Regular.ttf"),
    LexendLight: require("../../assets/fonts/Lexend-Light.ttf"),
    SoraBold: require("../../assets/fonts/Sora-Bold.ttf"),
    SoraLight: require("../../assets/fonts/Sora-Light.ttf"),
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
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image source={require("../../assets/logo.png")} />
          </View>
          <View style={styles.infoText}>
            <Text style={styles.digitalIdText}>
              This is your digital ID: 12435433
            </Text>
          </View>
          <View>
            <Image
              source={require("../../assets/Home.png")}
              style={styles.homeImage}
            />
          </View>
          <View style={styles.infoText}>
            <View style={styles.info}>
              <Text style={[styles.Text, { fontFamily: "SoraLight" }]}>
                This product is authenticated
              </Text>

              <TouchableOpacity onPress={handleClick}>
                <Image
                  source={require("../../assets/info.svg")}
                  // style={{ backgroundColor: "red" }}
                />
              </TouchableOpacity>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
              >
                <View
                  style={[
                    styles.modalContent,
                    { position: "absolute", top: "39%", left: "40%" },
                  ]}
                >
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Image
                      source={require("../../assets/cancel.svg")}
                      style={{
                        fill: "white",
                        color: "white",
                        backgroundColor: "white",
                      }}
                    />
                    <Text style={styles.textModal}>
                      This product is authenticated by MĀDI.
                    </Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>
            <Text style={[styles.customText, { fontFamily: "LexendBold" }]}>
              Light Beige Turtleneck Sweater
            </Text>
            <Text style={[styles.Text, { fontFamily: "LexendRegular" }]}>
              250 €
            </Text>
            <View style={styles.lineStyle} />
            <View style={styles.HomeButtonSection}>
              <TouchableOpacity
                onPress={() => navigation.navigate("OriginStory")}
                style={styles.HomeButton}
              >
                <Text style={styles.HomeButtonText}>Origin Story</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Care")}
                style={styles.HomeButton}
              >
                <Text style={styles.HomeButtonText}>Care</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Repair")}
                style={styles.HomeButton}
              >
                <Text style={styles.HomeButtonText}>Repair</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Resale")}
                style={styles.HomeButton}
              >
                <Text style={styles.HomeButtonText}>Resale</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
