import { useState } from "react";
import { useHelloCelo } from "./useHelloCelo";
import TransactionHistory from "./TransactionHistory";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [msg, setMsg] = useState("");
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getMessage, setMessage } = useHelloCelo();

  async function fetchMsg() {
    const m = await getMessage();
    setMsg(m);
  }

  async function updateMsg() {
    try {
      setLoading(true);
      toast.info("Sending transaction...", { autoClose: 2000 });
      await setMessage(input);
      toast.success("Transaction confirmed ✅", { autoClose: 3000 });
      fetchMsg(); // refresh message
      setHistory([
        { message: input, timestamp: new Date().toLocaleTimeString() },
        ...history,
      ]);
      setInput("");
    } catch (err) {
      console.error(err);
      toast.error("Transaction failed ❌", { autoClose: 3000 });
    } finally {
      setLoading(false);
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
      <button onClick={updateMsg} disabled={loading}>
        {loading ? '⏳ Sending...' : 'Update Message'}
      </button>
      {loading && <p style={{ color: '#f59e0b' }}>⏳ Transaction pending...</p>}
      <TransactionHistory history={history} />
      <ToastContainer position="top-right" />
    </div>
  );
}