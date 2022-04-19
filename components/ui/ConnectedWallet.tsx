
import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import ConnectButton from './ConnectButton';
import { injected } from '../../hooks/useEthereumProvider';



export default function ConnectedWallet() {
  const { activate, setError, account, active } = useWeb3React();

  useEffect(() => {
    async function loadInjectedWallet() {
      const isAuthorized = await injected.isAuthorized();
      if (isAuthorized) {
        await activate(injected);
      }
    }
    try {
      loadInjectedWallet();
    } catch (error) {
      if (error instanceof Error) setError(error);
    }
  }, [activate, setError]);

  return (
    <div className="">
      {active && account ? (
        <span className="flex items-center justify-center space-x-2 p-2 rounded-full border-2 border-gray-500 hover:border-yellow-500">
          <Jazzicon diameter={32} seed={jsNumberForAddress(account.toLowerCase())} />
          <span>{`${account.substring(0, 6)}...${account.substring(account.length - 4)}`}</span>
        </span>
      ) : (
        <ConnectButton />
      )}
    </div>
  );
}
