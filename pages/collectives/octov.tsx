import siteMetadata from '../../data/siteMetadata';
import { useRef, useState } from 'react';
import ConnectWallet from '../../components/WalletConnect';
import Typography from '@material-ui/core/Typography';
import SocialIcon from '../../components/social-icons';

import MintBtn from '../../components/MintBtn';
import ConnectButton from '../../components/ui/ConnectButton.tsx';
import ConnectedWallet from '../../components/ui/ConnectedWallet';


export default function Octov({ locale, availableLocales }) {


  

    return (
      <>
        <div className="text-center">
          <Typography variant="h3">Octov</Typography>
          <div className="border-t border-gray-700 pb-1 pt-1" />
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
          <section className="body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap w-full mb-20">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">
                    Octov Presentation
                  </h1>
                  <div className="h-1 w-20 bg-yellow-500 rounded"></div>
                </div>
                <p className="lg:w-1/2 w-full leading-relaxed">
                  Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway
                  tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep
                  jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.
                </p>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="border-2 p-6 rounded-lg">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">Team image</p>
                    <h3 className="tracking-widest text-xs font-medium title-font">SUBTITLE</h3>
                    <h2 className="text-lg font-medium title-font mb-4">Chichen Itza</h2>
                    <p className="leading-relaxed text-base">
                      Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon
                      disrupt edison bulbche.
                    </p>
                  </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="border-2 p-6 rounded-lg">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">Team image</p>
                    <h3 className="tracking-widest text-xs font-medium title-font">SUBTITLE</h3>
                    <h2 className="text-lg font-medium title-font mb-4">Colosseum Roma</h2>
                    <p className="leading-relaxed text-base">
                      Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon
                      disrupt edison bulbche.
                    </p>
                  </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="border-2 p-6 rounded-lg">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">Team image</p>
                    <h3 className="tracking-widest text-xs font-medium title-font">SUBTITLE</h3>
                    <h2 className="text-lg font-medium title-font mb-4">Great Pyramid</h2>
                    <p className="leading-relaxed text-base">
                      Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon
                      disrupt edison bulbche.
                    </p>
                  </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="border-2 p-6 rounded-lg">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">Team image</p>
                    <h3 className="tracking-widest text-xs font-medium title-font">SUBTITLE</h3>
                    <h2 className="text-lg font-medium title-font mb-4">San Francisco</h2>
                    <p className="leading-relaxed text-base">
                      Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon
                      disrupt edison bulbche.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="border-t border-gray-700 pb-10" />
        <div className="text-center">
          <Typography variant="h3">GoldEvent Access</Typography>
        </div>
        <div className="pt-5">
          <ConnectedWallet />
        </div>
        <div className="pt-10 flex items-center justify-center">
          <card className="w-72 rounded-lg border shadow-md flex flex-col p-5">
            <div className="flex flex-col items-center">
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed">NFT IMAGE111</p>
              </div>
              <button className="mt-10 rounded py-2 px-4 border-2 hover:bg-green-500 hover:text-gray-50 text-sm">
                Price - 0.5 eth
              </button>

              <div className="h-0.5 bg-gray-200 w-full my-5"> </div>
            </div>
            <div className="flex flex-col px-3">
              <p className="text-sm font-light"> What you get </p>
              <div className="grid grid-cols-5 mt-3 gap-y-2">
                <div className="pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#2563eb"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="col-span-4 text-sm font-light">
                  Free tickets for all upcoming events
                </div>

                <div className="pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#2563eb"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="col-span-4 text-sm font-light">-25% consommation reduction</div>
                <div className="pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#2563eb"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="col-span-4 text-sm font-light">- 50% second tickets</div>
                <div className="pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#2563eb"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="col-span-4 text-sm font-light">guaranteed access</div>
              </div>
            </div>
            <MintBtn />
          </card>
        </div>
        <div className="text-center">
          <div className="pt-10"></div>
        </div>
      </>
    );
}
