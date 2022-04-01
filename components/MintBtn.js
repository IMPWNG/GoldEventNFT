import { useState, useEffect } from 'react';
import { ethers } from 'ethers';


const MintBtn = () => {
    const [mintedNFT, setMintedNFT] = useState(null)
    const [miningStatus, setMiningStatus] = useState(null)
    const [loadingState, setLoadingState] = useState(0)
    const [txError, setTxError] = useState(null)
    const [currentAccount, setCurrentAccount] = useState('')
    const [correctNetwork, setCorrectNetwork] = useState(false)

    // Checks if wallet is connected
    const checkIfWalletIsConnected = async () => {
        const { ethereum } = window
        if (ethereum) {
            console.log('Got the ethereum obejct: ', ethereum)
        } else {
            console.log('No Wallet found. Connect Wallet')
        }

        const accounts = await ethereum.request({ method: 'eth_accounts' })

        if (accounts.length !== 0) {
            console.log('Found authorized Account: ', accounts[0])
            setCurrentAccount(accounts[0])
        } else {
            console.log('No authorized account found')
        }
    }
    // Calls Metamask to connect wallet on clicking Connect Wallet button
    const connectWallet = async () => {
        try {
            const { ethereum } = window

            if (!ethereum) {
                console.log('Metamask not detected')
                return
            }
            let chainId = await ethereum.request({ method: 'eth_chainId' })
            console.log('Connected to chain:' + chainId)

            const rinkebyChainId = '0x4'

            if (chainId !== rinkebyChainId) {
                alert('You are not connected to the Rinkeby Testnet!')
                return
            }

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

            console.log('Found account', accounts[0])
            setCurrentAccount(accounts[0])
        } catch (error) {
            console.log('Error connecting to metamask', error)
        }
    }

    // Checks if wallet is connected to the correct network
    const checkCorrectNetwork = async () => {
        const { ethereum } = window
        let chainId = await ethereum.request({ method: 'eth_chainId' })
        console.log('Connected to chain:' + chainId)

        const rinkebyChainId = '0x4'

        if (chainId !== rinkebyChainId) {
            setCorrectNetwork(false)
        } else {
            setCorrectNetwork(true)
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected()
        checkCorrectNetwork()
    }, [])


    return (

        <div className='mr-5 inline-flex justify-center mt-6 py-2 items-center px-4 shadow-md text-green-500 hover:shadow-lg transition-colors duration-150 border-2 rounded-lg focus:shadow-outline'>
            {currentAccount === '' ? (
                <button
                    className="font-bold"
                    type="button"
                    onClick={connectWallet}
                >
                    Buy
                    <svg className="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path></svg>
                </button>
            ) : correctNetwork ? (
                <button
                        className="font-bold"
                >
                    Mint
                </button>
            ) : (

                <button
                            className="flex font-bold"
                            type="button"
                >
                            <svg className="mr-2 mt-3 justify-center content-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                            </svg>
                    Wrong Network
                        
                </button>

            )}
        </div>


    );
};

export default MintBtn;