import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, StyleSheet, Pressable, Image } from "react-native";
import Card from "../components/atoms/Card";

const ExpenseDetails = ({ route }) => {
  const expense = route.params.expense;

  const navigation = useNavigation();
  useLayoutEffect(() => {
    const editExpenseHandler = () => {
      return (
        <Pressable
          onPress={() => {
            navigation.push("AddExpense", { expense });
          }}
        >
          <Image
            source={require("../assets/bill.png")}
            style={{ width: 30, height: 30, margin: 10 }}
          />
        </Pressable>
      );
    };

    navigation.setOptions({
      title: "Expense",
      headerTintColor: "#FDB44B",
      headerRight: editExpenseHandler,
    });
  }, [navigation]);

  return (
    <View style={styles.root}>
      <Card
        heightPercent={1.5}
        backgroundColor="#22b14c"
        date={expense.date}
        img={require("../assets/dollar.png")}
        title={expense.title}
        subTitle={expense.description}
        money={expense.price}
      />
    </View>
  );
};

export default ExpenseDetails;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#1B2430",
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
});
