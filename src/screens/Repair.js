import React from "react";
import { useFonts } from "expo-font";
import MapView, { Marker } from "react-native-maps";

import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking
} from "react-native";
import styles from "./Styles";

const Repair = ({ navigation }) => {
  const location = {
    latitude: 55.67657258577204,
    longitude: 12.574285825509982
  };
  const handlePress = () => {
    const url = `http://maps.google.com/maps?q=${location.latitude},${location.longitude}`;
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Don't know how to open URI: ${url}`);
      }
    });
  };
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
        <View style={[styles.container]}>
          <View style={{ padding: 15 }}>
            <View
              style={[
                styles.info,
                {
                  justifyContent: "space-around",
                  right: "22%"
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
                    right: "25%"
                  }
                ]}
              >
                Repair
              </Text>
            </View>
            <Text
              style={[
                styles.customText,
                {
                  fontFamily: "LexendBold",
                  fontSize: 16
                }
              ]}
            >
              {"\n"}Did You Know?{"\n"}
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
              {"\n"}Extending the life of a garment by 3 months can reduce
              carbon, waste and water footprints by 5-10%.{"\n"}
              {"\n"}
              We understand accidents can happen, That's why we want to help you
              prolong the life of your product, so we recommend a repair shop
              near you."{"\n"}
            </Text>
          </View>
          <View style={styles.adressSection}>
            <View style={styles.info}>
              <View>
                <Image
                  source={require("../../assets/pics/location.png")}
                  style={{ padding: 6, margin: 6 }}
                />
              </View>
              <View>
                <Text
                  style={[
                    styles.customText,
                    {
                      fontFamily: "LexendSemiBold",
                      fontSize: 14,
                      marginLeft: 4
                    }
                  ]}
                >
                  Fix & Wear
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
                  {" "}
                  Rådhusstræde 8, 1466 København
                </Text>
              </View>
            </View>
            <MapView
              style={styles.map}
              region={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.001,
                longitudeDelta: 0.01,
                showsUserLocation: true,
                showsCompass: true,
                zoomControlEnabled: true,
                showsTraffic: true
              }}
              mapType={"standard"}
            >
              <Marker
                coordinate={location}
                title={"Rådhusstræde 8, 1466 København"}
                onPress={handlePress}
              />
            </MapView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Repair;
