import { ethers } from "ethers";

const provider = ethers.getDefaultProvider();
const main = async () => {
  const balance = await provider.getBalance(`vitalik.eth`);
  console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`);
};
main();

// bun one.js
// 输出：ETH Balance of vitalik: 456.112651545260337134 ETH
