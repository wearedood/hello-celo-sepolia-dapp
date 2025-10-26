import './style.css'
import { ethers } from 'ethers'

const CONTRACT_ADDRESS = '0x742d35Cc6634C0532925a3b8D4C9db96DfB3f681';
const CONTRACT_ABI = [
  'function message() view returns (string)'
];

async function getMessage() {
  if (!window.ethereum) return 'No wallet detected.';
  
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
    return await contract.message();
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Celo Dapp 🚀</h1>
    <button id="read-message">Read Message</button>
    <p id="message"></p>
  </div>
`

document.querySelector('#read-message').addEventListener('click', async () => {
  const messageElement = document.querySelector('#message');
  messageElement.textContent = 'Loading...';
  const msg = await getMessage();
  messageElement.textContent = msg;
});
