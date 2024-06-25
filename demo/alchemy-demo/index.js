// Setup: npm install alchemy-sdk
const { Network, Alchemy } = require("alchemy-sdk");
require('dotenv').config();
const apiKey = process.env.AlchemyAPIKey;

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: apiKey, // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);

async function main() {
  const latestBlock = await alchemy.core.getBlockNumber();
  console.log("The latest block number is", latestBlock);
}

main();