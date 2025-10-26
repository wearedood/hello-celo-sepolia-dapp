import React from "react";

export default function TransactionHistory({ history }) {
  return (
    <div style={{ marginTop: 20, padding: 15, border: '1px solid #ddd', borderRadius: 8 }}>
      <h2 style={{ color: '#333', marginBottom: 15 }}>Transaction History</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {history.length === 0 && <li style={{ color: '#666', fontStyle: 'italic' }}>No transactions yet.</li>}
        {history.map((tx, idx) => (
          <li key={idx} style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
            <strong style={{ color: '#2563eb' }}>{tx.message}</strong> 
            <span style={{ color: '#666', fontSize: '0.9em' }}>— {tx.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
