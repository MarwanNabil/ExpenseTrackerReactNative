import { Pressable, View, Text, StyleSheet } from "react-native";

const MyButton = ({ text, backgroundColor, textColor, clickHandler }) => {
  return (
    <View style={[styles.layout, { backgroundColor }]}>
      <Pressable
        onPress={clickHandler}
        style={styles.press}
      >
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 30,
    height: 70,
    paddingVertical: 20,
    textAlign: "center",
    borderRadius: 15,
    elevation: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: "900",
  },
  press: {
    flex: 1
  },
});
