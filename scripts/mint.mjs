const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS
const META_DATA_URL = process.env.META_DATA_URL
const baseURI = 

async function mint(contractAddress) {
   const GoldEventGen0 = await ethers.getContractFactory("GoldEventGen0")
   const tx = await GoldEventGen0.attach(contractAddress).mint(1)
   console.log("GoldEventGen0 tx: ", tx.hash)
}

mint(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });