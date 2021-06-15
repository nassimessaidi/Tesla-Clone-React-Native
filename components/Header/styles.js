import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    paddingHorizontal: 20,
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },

  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },

  menu: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
});

export default styles;
