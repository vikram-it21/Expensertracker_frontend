const ExpenseItem = (props) => {
  return (
    <>
      <div
        className={`expense-item ${props.amount > 0 ? "positive" : "negative"}`}
      >
        <div className="expense-title">{props.title}</div>
        <div className="expense-amount">{props.amount}</div>
      </div>
    </>
  );
};
export default ExpenseItem;
