// import { useEffect, useState } from 'react';
// import { ethers } from 'ethers';
// import { hasEthereum, requestAccount } from '../utils/connector';

// const truncateAddress = (address) => {
//   return address.slice(0, 6) + ' ... ' + address.slice(-4);
// };

export default function ConnectWallet() {
  // // UI state
  // const [loading, setLoading] = useState(true);
  // const [connected, setConnected] = useState(false);
  // const [message, setMessage] = useState('Connect wallet');

  // // First load
  // useEffect(function () {
  //   async function fetchConnectedAccount() {
  //     if (!hasEthereum()) {
  //       setMessage('Install MetaMask');
  //       setLoading(false);
  //       return;
  //     }

  //     await setConnectedAccount();

  //     setLoading(false);
  //   }
  //   fetchConnectedAccount();
  // }, []);

  // // Account changes
  // useEffect(function () {
  //   async function listenMMAccount() {
  //     if (!hasEthereum()) return;
  //     window.ethereum.on('accountsChanged', async function (accounts) {
  //       if (accounts && accounts[0]) {
  //         setMessage(accounts[0]);
  //       } else {
  //         setConnected(false);
  //         setMessage('Connect wallet');
  //       }
  //     });
  //   }

  //   listenMMAccount();
  // }, []);

  // // Request connection to wallet
  // async function requestConnection() {
  //   try {
  //     await requestAccount();
  //   } catch (error) {
  //     if (error.message) setMessage(error.message);
  //   }
  // }

  // // Set address of connected wallet
  // async function setConnectedAccount() {
  //   try {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const address = await signer.getAddress();

  //     if (address) {
  //       setConnected(true);
  //       setMessage(address);
  //     }
  //   } catch {
  //     setMessage('Connect wallet');
  //   }
  // }

  // // Handle connect wallet click
  // async function handleConnectWallet() {
  //   setLoading(true);

  //   await requestConnection();
  //   await setConnectedAccount();

  //   setLoading(false);
  // }

  return (
    <button
      className="border-2 justify-center mt-6 py-2 px-4 font-bold rounded-lg shadow-md hover:shadow-lg"
      // onClick={handleConnectWallet}
      // disabled={connected || message === 'Install MetaMask'}
    >
      {/* {!loading ? (
        <>
          <div>{message ? truncateAddress(message) : 'Download your Ticket'}</div>
        </>
      ) : (
        <span>Loading...</span>
      )} */}
    </button>
  );
}
