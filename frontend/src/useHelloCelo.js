import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0x742d35Cc6634C0532925a3b8D4C9db96DfB3f681";
const CONTRACT_ABI = [
  "function message() view returns (string)",
  "function setMessage(string calldata newMessage) external"
];

export function useHelloCelo() {
  async function getMessage() {
    if (!window.ethereum) return "No wallet detected.";
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
    return await contract.message();
  }

  async function setMessage(newMsg) {
    if (!window.ethereum) return "No wallet detected.";
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
    const tx = await contract.setMessage(newMsg);
    await tx.wait(); // wait for confirmation
    return tx;
  }

  return { getMessage, setMessage };
}