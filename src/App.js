import ExpenseList from "./components/Expenses/ExpenseList";

import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const initialExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Nintendo Switch",
    amount: 299.99,
    date: new Date(2021, 10, 15),
  },
  {
    id: "e4",
    title: "New Standing Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList items={expenses} />
    </div>
  );
}

export default App;
