import {
  Pressable,
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
} from "react-native";
import Txt from "./Text";
import { useNavigation } from "@react-navigation/native";

let cardWidth = Dimensions.get("window").width - 50;
let cardHeight = Math.round(Dimensions.get("window").height / 10);

const ExpenseItem = ({ expense }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("ExpenseDetails", { expense: expense });
      }}
      style={({ pressed }) => [
        styles.expense,
        {
          backgroundColor: pressed ? "#448EF6" : "#005792",
        },
      ]}
    >
      <View style={styles.col1}>
        <Txt title={expense.title} />
        <Txt title={expense.date} color="#1B2430" size={15} />
      </View>
      <View style={styles.col2}>
        <Txt title={expense.price} size={15} />
        <Image style={styles.img} source={require("../../assets/dollar.png")} />
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  expense: {
    flex: 1,
    margin: 2,
    paddingHorizontal: 15,
    width: cardWidth,
    height: cardHeight,
    backgroundColor: "#005792",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    width: cardWidth / 13,
    height: cardWidth / 13,
    resizeMode: "stretch",
    marginLeft: cardWidth / 20,
  },
  col1: {
    flex: 2,
    flexDirection: "column",
  },
  col2: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
