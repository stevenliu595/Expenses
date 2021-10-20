import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesListContent.css";

const ExpensesListContent = (props) => {
  if (props.list.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.list.map((filteredYear) => {
        return (
          <ExpenseItem
            key={filteredYear.id}
            title={filteredYear.title}
            amount={filteredYear.amount}
            date={filteredYear.date}
          ></ExpenseItem>
        );
      })}
    </ul>
  );
};

export default ExpensesListContent;
