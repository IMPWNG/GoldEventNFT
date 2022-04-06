const fs = require('fs');

async function main() {

  const GoldEventNFT = await ethers.getContractFactory("GoldEventNFT");
  const goldEventNFT = await GoldEventNFT.deploy();
  await goldEventNFT.deployed();
  const txHash = goldEventNFT.deployTransaction.hash
  const txReceipt = await ethers.provider.waitForTransaction(txHash)
  const contractAddress = txReceipt.contractAddress
  console.log("goldEventNFT deployed to:", goldEventNFT.address);

  fs.writeFileSync('./config.js', `
  export const goldEventNFT = "${goldEventNFT.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });