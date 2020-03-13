import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import commas from "../utils/format";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)
  const income = transactions
    .map(transactions => transactions.amount)
    .filter(amount => amount >= 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = transactions
    .map(transactions => transactions.amount)
    .filter(amount => amount < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>INCOME</h4>
        <p id="money-plus" className="money plus">
          ${commas(income)}
        </p>
      </div>

      <div>
        <h4>EXPENSE</h4>
        <p id="money-minus" className="money minus">
          ${Math.abs(commas(expense))}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
