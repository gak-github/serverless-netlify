import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = e => {
    e.preventDefault()
    if (text === "" || amount === 0) {
      return
    }
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    }
    addTransaction(newTransaction)
    setText("")
    setAmount(0)
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={ e => setText(e.target.value) }
            placeholder="Enter text..."
            onFocus={ e => e.target.value = ''}
            onBlur={ e => e.target.value = text }
          />
        </div>
        <div>
          <label htmlFor="amount">
            Amount <br />
            (negative -expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={ e => setAmount(e.target.value) }
            id="amount"
            placeholder="Enter amount..."
            onFocus={ e => e.target.value = '' }
            onBlur={ e => e.target.value = amount }
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
};

export default AddTransaction;
