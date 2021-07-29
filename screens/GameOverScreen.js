import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import BodyText from "../components/BodyText";
import success from "../assets/success.png";
import Color from "../constants/color";
import MainButton from "../components/MainButton";
const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <ScrollView style={{ marginTop: 8 }}>
      <View style={styles.screen}>
        <Text style={styles.title}>The Game is Over</Text>
        <View style={styles.imageContainer}>
          <Image source={success} style={styles.image} resizeMode="cover" />
        </View>
        <View style={styles.outputContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{roundsNumber} </Text>
            rounds to guess the number{" "}
            <Text style={styles.highlight}> {userNumber}</Text>.
          </BodyText>
        </View>
        <MainButton onPress={onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
  outputContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60,
  },
  highlight: {
    color: Color.primary,
    fontFamily: "open-sans-bold",
  },
});
export default GameOverScreen;
