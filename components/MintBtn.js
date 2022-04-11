import { useState, useRef, useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { hasEthereum } from '../utils/ethereum';
import WalletConnect from './WalletConnect';
import GoldEventGen0 from '../artifacts/contracts/GoldEventGen0.sol/GoldEventGen0.json';
import { ethers } from 'ethers';
import projectConfig from 'config/config';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';
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
  const [isPending, setIsPending] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const { account, active, chainId } = useWeb3React();
  const [connErrMsg, setConnErrMsg] = useState('');

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

    }

    // Increment decerement count

      const decrementMintQuantity = () => {
        if (mintQuantity > 1) {
          setMintQuantity(mintQuantity - 1);
        }
      }

      const incrementMintQuantity = () => {
        if (mintQuantity < projectConfig.maxMintAmountPerTxn) {
          setMintQuantity(mintQuantity + 1);
        }
      }

      useEffect(() => {
        if (!active) {
          setConnErrMsg('Not connected to your wallet.');
        } else {
          if (chainId !== projectConfig.chainId) {
            setConnErrMsg(`Change the network to ${projectConfig.networkName}.`);
          } else {
            setConnErrMsg('');
          }
        }
      }, [active, chainId]);



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
            {active && !connErrMsg ? (
              <>
                {isPending || isMinting ? (
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
                    {isPending && 'Pending'}
                    {isMinting && 'Minting'}
                    {!isPending && !isMinting && 'Processing'}
                  </button>
                ) : (
                  <button
                    className={`rounded px-4 py-2 bg-blue-700 hover:bg-blue-600 font-bold w-40`}
                    onClick={mintTicket}
                  >
                    Mint Tickets
                  </button>
                )}
              </>
            ) : (
              <button
                type="button"
                className={`rounded px-4 py-2 bg-red-700 font-bold w-40 cursor-not-allowed`}
                disabled={true}
                onClick={mintTicket}
              >
                Mint Tickets
              </button>
            )}
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
        Please make sure you are connected to the correct address and the
        correct network ({projectConfig.networkName}) before purchasing. The
        operation cannot be undone after purchase.
      </div>
        </div>

   
      </div>
    </>
  );
}
