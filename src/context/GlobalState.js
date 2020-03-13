import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// provider compoment

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // get transaction details
  async function getTransactions() {
    try {
      const res = await axios.get("/.netlify/functions/express");
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      })
    }
  }
  // delet action reducer
  async function deleteTransaction(id) {
    try {
      await axios.delete(`/.netlify/functions/express/${id}`);
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        error: error.response.data.error,
      })
    }
  }

  // delet action reducer
  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/.netlify/functions/express", transaction, config);
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      })
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        error: error.response.data.error,
      })
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
