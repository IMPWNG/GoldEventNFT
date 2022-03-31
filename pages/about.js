import useTranslation from 'next-translate/useTranslation';

export default function Marketplace({ locale, availableLocales }) {
  const { t } = useTranslation();

  return (
    <>
      <div className="text-center">
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">You love tech? You love techno? So do we!</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">Your NFT VIP Ticket for all your favorite events
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">GoldEvent is the perfect mix between these two worlds.
                Ever heard of NFTs? We’re here to bring the NFT hype to your raves.
                We have a way to help you innovate and retain your customers
              </p>
            </div>
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium">Our Idea…
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">Early Birds, Phase 1, Phase 2, Phase 3, VIP, GoldEvent. You choose!
                    GoldEvent tickets are actually NFTs: your customers will be able to buy, use and sell them.
                    It will come with a few privileges, that we can help you manage. We thought for example of free or reduced pass for all of your events of the year, reduced drinks at the bar, VIP access…
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium">What’s in for you
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">The hypeeeeee
                    You’ll be among the first techno collectives to sell NFT tickets
                    People will be attracted by this new concept
                    It will be an expensive ticket - more money for you!
                    2,5 % royalties for every sell on the platform
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium">What’s in for your customers
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">They get all the privileges you decided to add with our tickets
                    Like any NFT, they can keep it and hopefully sell it more than they bought it.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium">Technical details
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">1 - You decide how many NFT GoldEvent tickets you want for the season.
                    2 - At the beginning of the season you will allow people to purchase (mint) the NFT GoldEvent in our platform
                    3 - People hold the NFT GoldEvent in their wallet
                    4 - Before your event people will go on the platform, connect their wallet, we check if they hold the right NFT, if yes they get the GoldEvent Ticket
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
