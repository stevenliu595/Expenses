import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

const ExpenseList = (props) => {
  let currentYear = new Date();
  const [year, setYear] = useState(currentYear.getFullYear());

  const selectFilterYearHandler = (inputYear) => {
    console.log(inputYear, "year has been sent to parent");
    setYear(inputYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectYear={selectFilterYearHandler}
          defaultYear={year}
        />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>

        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>

        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default ExpenseList;
