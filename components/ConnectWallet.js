import React, { useEffect, useState } from 'react';
import { useWeb3Modal } from '../hooks/web3';
const truncateAddress = (address) => {
    return address.slice(0, 6) + '...' + address.slice(-4);
};

const ConnectWallet = () => {
    
    const [signerAddress, setSignerAddress] = useState('');
    // const [isWaiting, setWaiting] = useState(false)
    // const [isSent, setSent] = useState(false)
    // const [walletNotDetected, setWalletNotDetected] = useState(false)

    const { connectWallet, disconnectWallet, provider, error } = useWeb3Modal();

    useEffect(() => {
        const getAddress = async () => {
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            setSignerAddress(address);
        };
        if (provider) getAddress();
        else setSignerAddress('');
    }, [provider]);

    const handleClickConnect = async () => {
        await connectWallet();
    };

    const handleClickAddress = () => {
        disconnectWallet();
    };

    return (
        <button
            className="border-2 justify-center mt-6 py-2 px-4 font-bold rounded-lg shadow-md hover:shadow-lg"
            onClick={signerAddress ? handleClickAddress : handleClickConnect}
        >
            <div>
                {signerAddress ? truncateAddress(signerAddress) : 'Connect Wallet'}
            </div>
        </button>
        
    );
};



export default ConnectWallet;
