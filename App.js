import { StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./store/index";

import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import ExpenseDetails from "./screens/ExpenseDetails";
import AddExpense from './screens/AddExpense';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group
            screenOptions={{
              headerStyle: { backgroundColor: "#00204a" },
              headerTitleAlign: "center",
              headerTitleStyle: { color: "#FDB44B", fontSize: 32 },
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ExpenseDetails" component={ExpenseDetails} />
            <Stack.Screen name="AddExpense" component={AddExpense} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
});
