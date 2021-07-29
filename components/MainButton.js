import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "../constants/color";
const MainButton = ({ children, onPress }) => {
  const ButtonComponent = TouchableOpacity;
  if (Platform.OS == "android" && Platform.Version >= "12") {
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <ButtonComponent activeOpacity={0.6} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </ButtonComponent>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});
export default MainButton;
