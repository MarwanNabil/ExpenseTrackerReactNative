import { StyleSheet, Text } from "react-native";

const Txt = ({ title, color , size}) => {
  let defaultColor = color ? color : "#FDB44B";
  let defaultSize = size ? size : 23;
  return <Text style={[styles.txt, { color: defaultColor , fontSize: defaultSize }]}>{title}</Text>;
};

export default Txt;

const styles = StyleSheet.create({
  txt: {
    fontWeight: "900",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
