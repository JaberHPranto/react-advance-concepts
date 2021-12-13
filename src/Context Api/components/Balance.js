import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const context = useContext(GlobalContext);
  const amount = context.transaction.map((t) => t.amount);
  const total = amount.reduce((acc, cur) => (acc += cur), 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">$ {total}</h1>
    </div>
  );
}

export default Balance;
