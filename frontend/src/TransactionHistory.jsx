import React from "react";

export default function TransactionHistory({ history }) {
  return (
    <div style={{ marginTop: 20 }}>
      <h2>Transaction History</h2>
      <ul>
        {history.length === 0 && <li>No transactions yet.</li>}
        {history.map((tx, idx) => (
          <li key={idx}>
            <strong>{tx.message}</strong> — {tx.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
}
