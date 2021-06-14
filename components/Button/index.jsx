import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const Button = ({ type, text, onPress }) => {
  const bgColor = type === "primary" ? "#171a20cc" : "#ffffffa6";
  const textColor = type === "primary" ? "#ffffff" : "#171a20";

  return (
    <View style={styles.btnContainer}>
      <Pressable
        style={[styles.btn, { backgroundColor: bgColor }]}
        onPress={onPress}
      >
        <Text style={[styles.btnText, { color: textColor }]}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
