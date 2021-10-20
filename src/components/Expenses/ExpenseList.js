import "./ExpenseList.css";
import Card from "../UI/Card";
import ExpensesListContent from "./ExpensesListContent";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

const ExpenseList = (props) => {
  // let currentYear = new Date();
  const [year, setYear] = useState("2021");

  const selectFilterYearHandler = (inputYear) => {
    setYear(inputYear);
  };

  const filteredExpenses = props.items.filter((object) => {
    return object.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectYear={selectFilterYearHandler}
          defaultYear={year}
        />
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesListContent list={filteredExpenses}></ExpensesListContent>
      </Card>
    </div>
  );
};

export default ExpenseList;
