import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import commas from "../utils/format";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)
  const sign = transaction.amount >= 0 ? "+" : "-"
  const design = sign === "+" ? "plus" : "minus"
  return (
    <li className={design}>
      {transaction.text}{" "}
      <span>
        {sign}${commas(Math.abs(transaction.amount))}
      </span>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
