import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Button from "../Button";
import styles from "./styles";

const CarItem = ({ car: { name, tagline, taglineCTA, image } }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.btnGroup}>
        <Button
          type="primary"
          text="Custom Order"
          onPress={() => console.log("Custom Order was pressed")}
        />
        <Button
          type="secondary"
          text="Existing Inventory"
          onPress={() => console.log("Existing Inventory was pressed")}
        />
      </View>
    </View>
  );
};

export default CarItem;
