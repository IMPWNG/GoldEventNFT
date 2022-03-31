import siteMetadata from '@/data/siteMetadata';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Typography from '@material-ui/core/Typography';
import SocialIcon from '@/components/social-icons';
import dynamic from 'next/dynamic';
const ConnectWallet = dynamic(() => import('../../components/ConnectWallet'), {
    ssr: false,
});

export default function Octov({ locale, availableLocales }) {
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false);

    return (
        <>
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
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-20">
                            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Octov Presentation</h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>
                            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            <div className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid</h2>
                                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className='border-t border-gray-700 pb-10' />
            <div className='text-center'>
                <Typography variant="h3">GoldEvent Access</Typography>
            </div>
            <div className="pt-10 flex items-center justify-center">
                <card className="w-72 rounded-lg border shadow-md flex flex-col p-5 bg-white">
                    <div className="flex flex-col items-center">
                        <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
                        <button className="mt-10 rounded py-2 px-4 bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-50 text-sm">
                            0.5 eth
                        </button>
                        <div className="h-0.5 bg-gray-200 w-full my-5"> </div>
                    </div>
                    <div className="flex flex-col px-3">
                        <p className="text-gray-700 text-sm font-light"> What you get </p>
                        <div className="grid grid-cols-5 mt-3 gap-y-2">
                            <div className="pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div className="col-span-4 text-sm font-light text-gray-700">
                                Free tickets for all upcoming events
                            </div>

                            <div className="pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div className="col-span-4 text-sm font-light text-gray-700">
                                -25% consommation reduction
                            </div>
                            <div className="pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div className="col-span-4 text-sm font-light text-gray-700">
                                - 50% second tickets
                            </div>
                            <div className="pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div className="col-span-4 text-sm font-light text-gray-700">
                                guaranteed access
                            </div>
                        </div>
                    </div>
                </card>
            </div>
            <div className='text-center'>
                <div className="grid grid-cols-2 gap-2 pt-10">
                    <div>
                        <button
                            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 justify-center"
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
                                                    Buy your GoldEvent GEN0
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
                                                    NFT IMAGE111
                                                </p>
                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                                                <button
                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Close
                                                </button>
                                                <button
                                                    className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Buy
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null}
                    </div>
                    <ConnectWallet />
                </div>
            </div>
        </>
    )
}
