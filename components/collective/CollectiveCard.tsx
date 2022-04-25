import NextLink from '../NextLink';
import Image from 'next/image';

const collectiveCard = ({ collectiveCardTitle, collectiveCardDescription, collectiveCardImageSrc, collectiveCardHref }) => (
  <div className="container justify-center flex flex-wrap">
    <div className="max-w-sm py-10 pr-10 pl-10">
      <div className="bg-stone-400 relative shadow-2xl hover:shadow-xl transition duration-500 rounded-lg border-2 border-yellow-500">
        {collectiveCardImageSrc && (
          collectiveCardHref ? (
            <NextLink href={collectiveCardHref} arial-label={`Link to ${collectiveCardTitle}`}>
              <Image className="rounded-t-lg" src={collectiveCardImageSrc} alt={collectiveCardTitle} width={544}
                height={306} />
            </NextLink >
          ) : (
            <Image className="rounded-t-lg" src={collectiveCardImageSrc} alt={collectiveCardTitle} width={544}
              height={306} />
          ))}
        <div className="py-6 px-8 rounded-lg content-center">
          <h1 className="font-bold text-2xl mb-3 hover:cursor-pointer text-center underline">{collectiveCardTitle}</h1>
          <p className="tracking-wide text-center">{collectiveCardDescription}</p>
          <div className='flex justify-center'>
            {collectiveCardHref && (
              <NextLink href={collectiveCardHref} arial-label={`Link to ${collectiveCardTitle}`}>
                <button className="border-2 justify-center mt-6 py-2 px-4 font-bold rounded-lg shadow-md hover:shadow-lg border-yellow-500">Get your GoldEvent NFT</button>
              </NextLink >
            )}
          </div>
        </div>
        <div className="absolute top-2 right-2 py-2 px-4 rounded-lg">
          <span className="text-md">3/20</span>
        </div>
      </div>
    </div>
  </div>
)

export default collectiveCard;