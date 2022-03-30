
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'

import useTranslation from 'next-translate/useTranslation'
import Typography from '@material-ui/core/Typography'
import SocialIcon from '@/components/social-icons'

import dynamic from 'next/dynamic';
const ConnectWallet = dynamic(() => import('../../components/ConnectWallet'), {
    ssr: false,
});

export default function Octov({ locale, availableLocales }) {
    const { t } = useTranslation()
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <PageSEO
                title={siteMetadata.title[locale]}
                description={siteMetadata.description[locale]}
                availableLocales={availableLocales}
            />
            <div className='text-center'>
                <Typography variant="h3">Octov</Typography>
                <div className='border-t border-gray-700 pb-1 pt-1' />
                <div className="flex flex-col items-center">
                    <div className="flex mb-3 space-x-4">
                        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
                        <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
                        <SocialIcon kind="instagram" href={siteMetadata.instagram} size="6" />
                        <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />

                    </div>
                </div>



            </div>

            <div>
                <p>Get your GoldEvent Ticket</p>
                <ConnectWallet />
            </div>

            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Buy your GoldEvent NFT
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold text-black">
                                        Mint your NFT
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed text-black">
                                        NFT IMAGE
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}



        </>
    )
}
