import { useState, useRef, useEffect } from 'react';
import { hasEthereum } from '../utils/connector';
import GoldEventGen0 from '../artifacts/contracts/GoldEventGen0.sol/GoldEventGen0.json';
import { ethers } from 'ethers';
import projectConfig from 'config/config';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { useWeb3React } from '@web3-react/core';

export default function MintBtn() {
  //Mint Constants
  const MINT_PRICE = 0.03;
  const MAX_MINT = 10;
  const MIN_MINT = 1;

  // UI state
  const [mintQuantity, setMintQuantity] = useState(1);
  const mintQuantityInputRef = useRef();
  const [mintError, setMintError] = useState(false);
  const [mintMessage, setMintMessage] = useState('');
  const [mintLoading, setMintLoading] = useState(false);


  // Increment decerement Quantity
  const decrementMintQuantity = () => {
    if (mintQuantity > 1) {
      setMintQuantity(mintQuantity - 1);
    }
  };

  const incrementMintQuantity = () => {
    if (mintQuantity < projectConfig.maxMintAmountPerTxn) {
      setMintQuantity(mintQuantity + 1);
    }
  };

  async function mintTicket() {

    // Check quantity
    if (mintQuantity < 1) {
      setMintMessage('You need to mint at least 1 Tickets.');
      setMintError(true);
      mintQuantityInputRef.current.focus();
      return;
    }
    if (mintQuantity > MAX_MINT) {
      setMintMessage('You can only mint a maximum of 10 Tickets.');
      setMintError(true);
      mintQuantityInputRef.current.focus();
      return;
    }

    // Get wallet details
    if (!hasEthereum()) return;
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      try {
        const address = await signer.getAddress();

        setMintLoading(true);
        // Interact with contract
        const contract = new ethers.Contract(
          process.env.CONTRACT_ADDRESS,
          GoldEventGen0.abi,
          signer
        );
        const totalPrice = MINT_PRICE * mintQuantity;
        const transaction = await contract.mint(mintQuantity, {
          value: ethers.utils.parseEther(totalPrice.toString()),
        });
        await transaction.wait();

        mintQuantityInputRef.current.value = 0;
        setMintMessage(`Congrats, you minted ${mintQuantity} token(s)!`);
        setMintError(false);
      } catch {
        setMintMessage('Connect your wallet first.');
        setMintError(true);
      }
    } catch (error) {
      setMintMessage(error.message);
      setMintError(true);
    }
    setMintLoading(false);

  }

  return (
    <>
      <div className="mr-5 inline-flex justify-center mt-6 py-2 items-center px-4 shadow-md text-green-500 hover:shadow-lg transition-colors duration-150 border-2 rounded-lg focus:shadow-outline">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4 border-2">
            <span className="text-xl">{mintQuantity}</span>
          </div>
          <div className="pr-10 border-2 col-start-1 col-end-3">
            <button
              className={
                mintQuantity <= 1 ? 'text-gray-500 cursor-default' : 'text-green-500 cursor-default'
              }
              onClick={decrementMintQuantity}
            >
              <FaMinusCircle />
            </button>
          </div>
          <div className="pl-10 border-2 col-end-7 col-span-">
            <button
              className={
                mintQuantity >= projectConfig.maxMintAmountPerTxn
                  ? 'text-gray-500 cursor-default'
                  : 'text-green-500 cursor-default'
              }
              onClick={incrementMintQuantity}
            >
              <FaPlusCircle />
            </button>
          </div>

          <div className="col-start-1 col-end-7">
            <>
              <button
                type="button"
                className="flex justify-center items-center rounded px-4 py-2 bg-red-700 font-bold w-40 cursor-not-allowed"
                disabled
              >
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </button>

              <button
                className={`rounded px-4 py-2 bg-blue-700 hover:bg-blue-600 font-bold w-40`}
                onClick={mintTicket}
              >
                {mintLoading ? 'Loading...' : 'Mint'}
              </button>
            </>

           
          </div>
          <div>
            {mintMessage && (
              <span
                className={
                  mintError
                    ? 'text-red-600 text-xs mt-2 block'
                    : 'text-green-600 text-xs mt-2 block'
                }
              >
                {mintMessage}
              </span>
            )}
          </div>
          <div className="text-gray-400 mt-2">
            Please make sure you are connected to the correct address and the correct network (
            {projectConfig.networkName}) before purchasing. The operation cannot be undone after
            purchase.
          </div>
        </div>
      </div>
    </>
  );
}
