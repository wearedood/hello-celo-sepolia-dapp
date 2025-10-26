require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    celo: {
      url: "https://forno-sepolia.celo-testnet.org/",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 44787
    }
  }
};
