require('dotenv').config();
require("@nomiclabs/hardhat-ethers");


module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
    },
    
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY],
      gas: 6000000, gasPrice: 800000000, gasLimit: 3000000
    }

  },
  solidity: {
    version: "0.8.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};