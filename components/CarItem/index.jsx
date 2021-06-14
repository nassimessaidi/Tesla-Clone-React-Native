import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Button from "../Button";
import styles from "./styles";

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Modal S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
      <View style={styles.btnGroup}>
        <Button
          type="primary"
          text="Custom Order"
          onPress={() => console.warn("Custom Order was pressed")}
        />
        <Button
          type="secondary"
          text="Existing Inventory"
          onPress={() => console.warn("Existing Inventory was pressed")}
        />
      </View>
    </View>
  );
};

export default CarItem;
