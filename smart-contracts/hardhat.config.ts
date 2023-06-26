import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomiclabs/hardhat-ethers";
require("@nomicfoundation/hardhat-toolbox");

import "solidity-coverage";


// const config: HardhatUserConfig = {
//   solidity: "0.8.17",
// };

// export default config;
// const INFURA_API_KEY = "2RG339bAIRgMizOvt8QFsVAlGcP";

// const SEPOLIA_PRIVATE_KEY = "0xfd7c0A0F0D358b0E127762F304198f051380E817";

// module.exports = {
//   solidity: "0.8.9",
//   networks: {
//     sepolia: {
//       url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
//       accounts: [SEPOLIA_PRIVATE_KEY]
//     }
//   }
// };

// Go to https://alchemy.com, sign up, create a new App in
// its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "EEOC0qCMFdrBSex480MkMkrEisHnuNKs";

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY = "7b093ec3b5a88cd70d2aeb91092907be187770a318fc8a7fa72ad765f817f799";

module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};