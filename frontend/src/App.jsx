import { useState } from "react";
import { useHelloCelo } from "./useHelloCelo";
import TransactionHistory from "./TransactionHistory";

export default function App() {
  const [msg, setMsg] = useState("");
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("");
  const [history, setHistory] = useState([]);
  const { getMessage, setMessage } = useHelloCelo();

  async function fetchMsg() {
    const m = await getMessage();
    setMsg(m);
  }

  async function updateMsg() {
    try {
      setStatus("Sending transaction...");
      await setMessage(input);
      setStatus("Transaction confirmed ✅");
      fetchMsg(); // refresh message
      setHistory([
        { message: input, timestamp: new Date().toLocaleTimeString() },
        ...history,
      ]);
      setInput("");
    } catch (err) {
      console.error(err);
      setStatus("Transaction failed ❌");
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Hello Celo Dapp 🚀</h1>
      <button onClick={fetchMsg}>Read Message</button>
      <p>Message: {msg}</p>
      <input
        type="text"
        placeholder="New message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={updateMsg}>Update Message</button>
      <p>{status}</p>
      <TransactionHistory history={history} />
    </div>
  );
}