import { useState } from "react";
const ExpenseForm = (props) => {
  const { addExpense } = props;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, amount);
    addExpense(title, amount);
  };
  const handleTitleChange = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };
  const handleAmountChange = (e) => {
    console.log(e.target.value);
    setAmount(parseInt(e.target.value));
  };
  return (
    <div className="input">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            className="input-title"
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            className="input-amount"
            type="number"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="btn-cont">
          <button className="btn-trans" type="submit">
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;
