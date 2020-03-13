import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import commas from "../utils/format";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const total = transactions
    .map(transaction => transaction.amount)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  let sign = total > 0 ? "+" : "-";

  if (Math.abs(total) === 0) {
    sign = ""
  }

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">
        {sign}${commas(Math.abs(total))}
      </h1>
    </div>
  );
}
