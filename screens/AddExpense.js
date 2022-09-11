import {
  StyleSheet,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Text,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { useDispatch , useSelector } from "react-redux";
import { expenseActions } from "../store/expenses";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

import TxtInput from "../components/atoms/TxtInput";
import MyButton from "../components/atoms/Button";
import Txt from "../components/atoms/Text";
import { ScrollView } from "react-native-gesture-handler";

let allWidth = Dimensions.get("screen").width - 50;
let allHeight = Dimensions.get("screen").height;

const AddExpense = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const expenses = useSelector((state) => state.expense.expenses);

  console.log(expenses.length);

  const isEditing = route.params.expense !== undefined;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [showDate, setShowDate] = useState(false);
  const [date, setDate] = useState(null);
  const [error, setError] = useState("");

  let expense = null;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: !!route.params.expense ? "Edit Expense" : "Add Expense",
      headerTintColor: "#FDB44B",
    });
    if (isEditing) {
      expense = route.params.expense;
      setTitle(expense.title);
      setPrice(expense.price);
      setDescription(expense.description);
      setDate(new Date(expense.date));
    }
  }, [navigation, route.params.expense]);

  const resetData = () => {
    setTitle("");
    setPrice(0);
    setDescription("");
    setShowDate(false);
    setDate(null);
    setError("");
  };

  const isValidDate = (data) => {
    return date && Object.prototype.toString.call(date) === "[object Date]";
  };

  const onAddExpenseHandler = () => {
    setError("");

    if (title.length < 4) {
      setError("Please enter a longer name.");
      return;
    }

    let regexp = /^\d+\.\d{0,2}$/;
    if (regexp.test(price + "") === false) {
      setError("Please enter valid amount unit.");
      return;
    }

    const expenseItem = {
      title,
      price: parseFloat(price),
      description,
      date: isValidDate(date) ? date.toLocaleDateString() : "",
    };

    if (isEditing) {
      //edit case;
      dispatch(
        expenseActions.editExpense({
          id: route.params.expense.id,
          expense: expenseItem,
        })
      );
    } else {
      dispatch(expenseActions.addExpense(expenseItem));
    }

    resetData();
    navigation.pop();
  };

  const onDeleteExpenseHandler = () => {
    if (isEditing) {
      dispatch(expenseActions.removeExpense( route.params.expense.id ));
    }

    resetData();
    if (isEditing) {
      navigation.pop();
      navigation.navigate("Home");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.root} behavior={"height"}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            width: allWidth - 20,
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#D6D5A8",
            padding: 12,
            borderRadius: 25,
          }}
        >
          <Image
            source={require("../assets/money.png")}
            style={{
              width: allWidth / 2,
              height: allWidth / 2,
              elevation: 12,
            }}
          />
        </View>
        <TxtInput title="Name" value={title} setValue={setTitle} />
        <TxtInput
          title="Amount"
          value={price}
          setValue={setPrice}
          isNumpad={true}
        />
        <TxtInput
          title="Description"
          allowMultilin={true}
          value={description}
          setValue={setDescription}
        />

        <Pressable
          style={[styles.datePicker]}
          onPress={() => setShowDate(true)}
        >
          <Text
            style={{
              color: "#1B2430",
              fontSize: 32,
              flex: 1,
              fontWeight: "900",
              textAlign: "center",
            }}
          >
            {isValidDate(date) ? date.toLocaleDateString() : "Date"}
          </Text>
          {showDate && (
            <DateTimePicker
              mode="date"
              value={date ? date : new Date(1598051730000)}
              onChange={(item) => {
                setDate(new Date(item.nativeEvent.timestamp));
                setShowDate(false);
              }}
            />
          )}
        </Pressable>
        <Text style={{ color: "#F05454", fontSize: 12 }}>{error}</Text>
        <View style={styles.options}>
          <MyButton
            text="Done"
            backgroundColor="#FDB44B"
            clickHandler={onAddExpenseHandler}
          />
          <MyButton
            text="Delete"
            backgroundColor="#C21010"
            clickHandler={onDeleteExpenseHandler}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddExpense;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#1B2430",
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  options: {
    width: allWidth,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  datePicker: {
    marginVertical: 12,
    width: allWidth,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#00204A",
    backgroundColor: "#816797",
    height: allHeight / 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
