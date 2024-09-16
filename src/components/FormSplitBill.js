import { useState } from "react";

export function FormSplitBill({ handleNewBalance, selectedFriend }) {
  const [bill, setBill] = useState(0);
  const [expense, setExpense] = useState(0);
  const [split, setSplit] = useState("you");

  const friendExpense = bill - expense === 0 ? null : bill - expense;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !expense) return;

    const newBalance = split === "you" ? friendExpense : -expense;

    handleNewBalance(newBalance);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>SPLIT BILL WITH {selectedFriend.name}</h2>
      <label htmlFor="bill">💰 Bill value</label>
      <input
        id="bill"
        type="number"
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="expense">💲 Your Expense</label>
      <input
        id="expense"
        type="number"
        onChange={(e) => setExpense(Number(e.target.value))}
      />

      <label htmlFor="friend-expense">🎎 {selectedFriend.name}`s Expense</label>
      <input
        id="friend-expense"
        type="number"
        disabled
        placeholder={friendExpense}
      />

      <label htmlFor="splitType">💵 Split Type </label>
      <select
        id="splitType"
        value={split}
        onChange={(e) => setSplit(e.target.value)}>
        <option value="you">You</option>
        <option value="friend">Friends</option>
      </select>

      <button className="button" type="submit">
        Split Bill
      </button>
    </form>
  );
}
