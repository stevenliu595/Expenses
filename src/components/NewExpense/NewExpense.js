import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  const saveExpenseDataHandler = (inputExpenseData) => {
    const expenseData = {
      ...inputExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setFormIsOpen(false);
  };

  const onbeginFormHandler = () => {
    setFormIsOpen(true);
  };

  const onEndFormHandler = (state) => {
    setFormIsOpen(state);
  };

  return (
    <div className="new-expense">
      {formIsOpen === false && (
        <button type="button" onClick={onbeginFormHandler}>
          Add New Expense
        </button>
      )}
      {formIsOpen && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onEndForm={onEndFormHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
