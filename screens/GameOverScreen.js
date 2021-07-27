import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import success from "../assets/success.png";
import Color from "../constants/color";
import MainButton from "../components/MainButton";
const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  return (
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
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
  outputContainer: {
    marginHorizontal: 30,
    marginBottom: 15,
  },
  highlight: {
    color: Color.primary,
    fontFamily: "open-sans-bold",
  },
});
export default GameOverScreen;
