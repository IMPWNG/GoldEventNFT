import { useState } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: '196440d5d02d41dfa2a8ee5bfd2e96bd',
        },
    },
};

const web3Modal = new Web3Modal({
  network: 'mainnet',
  cacheProvider: true,
  providerOptions,
});

// Check for MetaMask wallet browser extension
function hasEthereum() {
  return typeof window !== 'undefined' && typeof window.ethereum !== 'undefined';
};

// Request wallet account
async function requestAccount() {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
};

export { hasEthereum, requestAccount };

export function useWeb3Modal() {
    const [provider, setProvider] = useState(undefined);
    const [error, setError] = useState(null);

    // Automatically connect if the provider is cashed but has not yet
    // been set (e.g. page refresh)
    if (web3Modal.cachedProvider && !provider) {
        connectWallet();
    };

    async function connectWallet() {
        try {
            const externalProvider = await web3Modal.connect();
            const ethersProvider = new ethers.providers.Web3Provider(
                externalProvider,
            );

            setProvider(ethersProvider);
        } catch (e) {
            setError('Error connecting to metamask');
            console.log('Error connecting to metamask', e);
        };
    };

    function disconnectWallet() {
        web3Modal.clearCachedProvider();
        setProvider(undefined);
    };

    return { connectWallet, disconnectWallet, provider, error };
};
