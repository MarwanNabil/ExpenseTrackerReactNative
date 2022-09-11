import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Card from "../components/atoms/Card";
import Txt from "./../components/atoms/Text";
import ExpenseItem from "./../components/atoms/expenseItem";
import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import ExpenseDetails from "./ExpenseDetails";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    const onAddExpenseHandler = () => {
      navigation.push("AddExpense", {});
    };

    navigation.setOptions({
      title: "My Expenses",
      headerRight: () => (
        <Pressable onPress={onAddExpenseHandler}>
          <Image
            source={require("../assets/purse.png")}
            style={{ width: 30, height: 30, margin: 10 }}
          />
        </Pressable>
      ),
    });
  }, [navigation]);

  const expenses = useSelector((state) => state.expense.expenses);
  const expensesCost = useSelector((state) => state.expense.totalCost);

  return (
    <View style={styles.layout}>
      <ScrollView style={{ flex: 1 }}>
        <Card
          img={require("../assets/money-bag2.png")}
          backgroundColor="#482aab"
          title="Total Expenses"
          subTitle={"you bought " + expenses.length + " expense(s)."}
          money={expensesCost}
        />
        {expenses.length > 0 && <Txt title="Details" color="#448EF6" />}
        {expenses.map((item, id) => {
          return <ExpenseItem key={id} expense={item} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  layout: {
    paddingVertical: 5,
    backgroundColor: "#1B2430",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
});
