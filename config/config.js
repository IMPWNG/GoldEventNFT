export const MUMBAI_CHAIN_ID = '80001';
export const MUMBAI_CHAIN_PARAM = [
  {
    chainId: MUMBAI_CHAIN_ID,
    chainName: 'Polygon Mumbai',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
  },
];


const projectConfig = {
  maxMintAmountPerTxn: 10,
  networkName: 'Polygon Mumbai',
  chainName: 'MATIC', // 'ETH'
  chainId:  80001, // Ethereum (1), Rinkeby (4)
};

export default projectConfig;