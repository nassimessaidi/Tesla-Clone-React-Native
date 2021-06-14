import { StyleSheet, Dimensions, StatusBar } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    flex: 1,
    width: "100%",
    height: Dimensions.get("window").height,
  },

  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },

  title: {
    fontSize: 40,
    fontWeight: "700",
  },

  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },

  taglineCTA: {
    textDecorationLine: "underline",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  btnGroup: {
    position: "absolute",
    width: "100%",
    bottom: 50,
  },
});

export default styles;
