import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [
  ],
  totalCost: 0.0,
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense(state, action) {
      //payload must be object of expense (title , amount , category , date , description)
      state.expenses = [
        ...state.expenses,
        { ...action.payload, id: state.expenses.length + 1 },
      ];
      state.totalCost += action.payload.price;
    },
    removeExpense(state, action) {
      //expense id
      state.expenses.filter((expense) => expense.id === action.payload);
    },
    editExpense(state, action) {
      //payload has {id , expense: {}}
      for (let i = 0; i < state.expenses.length; i++) {
        if (state.expenses[i].id === action.payload.id) {
          state.expenses[i] = { ...action.payload.expense };
        }
      }
    },
  },
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;
