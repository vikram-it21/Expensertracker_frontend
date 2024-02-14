import ExpenseItem from "./Components/ExpenseItem";
import ExpenseForm from "./Components/ExpneseForm";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const App = () => {
  let [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Food",
      amount: -500,
    },
    {
      id: 2,
      title: "Salary",
      amount: 1000,
    },   
  ]);
  useEffect(() => {
    axios.get('https://expensetracker-1jmq.onrender.com')
      .then(res => {
        console.log(res.data)
        setExpenses(res.data)
  })
  .catch(err => console.log(err))
},[])

  const addExpense = (title, amount) => {
    setExpenses([...expenses, { title: title, amount: amount }]);
  };
  let income = 0;
  let expense = 0;
  expenses.forEach((exp) => {
    if (exp.amount > 0) {
      income += exp.amount;
    } else {
      expense += exp.amount;
    }
  });
  let balance = income + expense;
  return (
    <>
      <div>
        <div className="head">Expense Tracker</div>
        <div className="balanace">Balanace: &#x20B9;{balance}</div>
        <div className="income-expense-container">
          <div className="income">
            <span className="title">Income</span>
            <span> &#x20B9;{income}</span>
          </div>
          <div className="block"></div>
          <div className="expenses">
            <span className="title">Expense</span>
            <span>&#x20B9;{expense}</span>
          </div>
        </div>
        <ExpenseForm addExpense={addExpense} />
      </div>

      {expenses.map((expense) => (
        <ExpenseItem
          key={expenses.id}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </>
  );
};
export default App;
