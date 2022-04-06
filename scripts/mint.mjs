const CONTRACT_ADDRESS = "0x7785718A487EE9D92767de93E691c2F9E2d66cF6"
const META_DATA_URL = "ipfs://bafyreif6av76pktlokhuojjuuy5pl66wiaki7c47j4o3x3qgxlpxnxtg7u/metadata.json"

async function mint(contractAddress, metaDataURL) {
   const GoldEventNFT = await ethers.getContractFactory("GoldEventNFT")
   const [owner] = await ethers.getSigners()
   await GoldEventNFT.attach(contractAddress).mint(owner.address, metaDataURL)
   console.log("GoldEventNFT minted to: ", owner.address)
}

mint(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });