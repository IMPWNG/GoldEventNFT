const fs = require('fs');

async function main() {

  const GoldEventGen0 = await ethers.getContractFactory("GoldEventGen0");
  const goldEventGen0 = await GoldEventGen0.deploy("GoldEventGen0", "GLDE", "ipfs://QmbCTQm5mrJYf9TigayX8qCwNh8qWknnBCA5B3oZJzWnS9/");
  await goldEventGen0.deployed();
  const txHash = goldEventGen0.deployTransaction.hash
  const txReceipt = await ethers.provider.waitForTransaction(txHash)
  const contractAddress = txReceipt.contractAddress
  console.log("goldEventGen0 deployed to:", goldEventGen0.address);

  fs.writeFileSync('./config.js', `
  export const goldEventGen0 = "${goldEventGen0.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });