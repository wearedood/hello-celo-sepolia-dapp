import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0x742d35Cc6634C0532925a3b8D4C9db96DfB3f681";
const CONTRACT_ABI = [
  "function message() view returns (string)"
];

export function useHelloCelo() {
  async function getMessage() {
    if (!window.ethereum) return "No wallet detected.";

    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
    return contract.message();
  }

  return { getMessage };
}