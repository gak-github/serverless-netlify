import React from "react";
import "../styles/App.css";
import Balance from "../components/Balance";
import IncomeExpenses from "../components/IncomeExpenses";
import TransactionList from "../components/TransactionList";
import AddTransaction from "../components/AddTransaction";
import { GlobalProvider } from "../context/GlobalState";
import SEO from "../components/SEO"
import Header from "../components/Header"

function IndexPage() {
  return (
    <GlobalProvider>
      <SEO title="Home" />
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default IndexPage;
