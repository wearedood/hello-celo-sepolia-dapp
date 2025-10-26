import { useState } from "react";
import { useHelloCelo } from "./useHelloCelo";

export default function App() {
  const [msg, setMsg] = useState("");
  const { getMessage } = useHelloCelo();

  return (
    <div style={{ padding: 20 }}>
      <h1>Hello Celo Dapp 🚀</h1>
      <button onClick={async () => setMsg(await getMessage())}>
        Read Message
      </button>
      <p>{msg}</p>
    </div>
  );
}