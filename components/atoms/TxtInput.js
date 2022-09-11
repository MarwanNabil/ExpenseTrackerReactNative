import { StyleSheet, TextInput, Text, View, Dimensions } from "react-native";

let txtInputWidht = Dimensions.get("screen").width - 50;
let allHeight = Dimensions.get("screen").height;

const TxtInput = ({ title, allowMultilin, setValue, value, isNumpad }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.txtIn}
        onChangeText={(txt) => {
          setValue(txt);
        }}
        value={value+""}
        keyboardType={isNumpad ? "number-pad" : "default"}
        multiline={allowMultilin === undefined ? false : true}
      />
    </View>
  );
};

export default TxtInput;

const styles = StyleSheet.create({
  root: {
    height: allHeight / 8,
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "flex-start",
  },
  title: {
    color: "#FDB44B",
    fontSize: 22,
  },
  txtIn: {
    backgroundColor: "#00204A",
    borderColor: "#FDB44B",
    color: "#FDB44B",
    width: txtInputWidht,
    height: allHeight / 15,
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    fontSize: 20,
  },
});
