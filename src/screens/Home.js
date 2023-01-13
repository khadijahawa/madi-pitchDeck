import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  SafeAreaView
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
              paddingTop: 22,
              padding: 14,
              paddingVertical: 32
            }
          ]}
        >
          <View style={styles.logo}>
            <Image source={require("../../assets/pics/logo.png")} />
          </View>
          <View style={styles.infoText}>
            <Text style={styles.digitalIdText}>
              This is your digital ID: 12435433
            </Text>
          </View>
          <View>
            <Image
              source={require("../../assets/pics/Home.png")}
              style={styles.Image}
            />
          </View>
          <View style={styles.infoText}>
            <View style={styles.info}>
              <Text style={[styles.Text, { fontFamily: "SoraLight" }]}>
                This product is authenticated
              </Text>

              <TouchableOpacity onPress={handleClick}>
                <Image source={require("../../assets/pics/info.png")} />
              </TouchableOpacity>
              <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
              >
                <View
                  style={[
                    styles.modalContent,
                    { position: "absolute", top: "39%", left: "40%" }
                  ]}
                >
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Image source={require("../../assets/pics/cancel.png")} />
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
                onPress={() => navigation.navigate("Origin Story")}
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
