import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({ transactions }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transactions.amount < 0 ? "-" : "+";
  return (
    <>
      <li className={sign === "+" ? "plus" : "minus"}>
        {transactions.text}
        <span>
          {sign}$ {Math.abs(transactions.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transactions.id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </>
  );
}

export default Transaction;
