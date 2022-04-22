import Link from './NextLink';
import SocialIcon from './social-icons';
import { FaMailBulk, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import projectConfig from '../config/config';
import dynamic from 'next/dynamic';


const ReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false,
});


export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <ReactTooltip id="footerr"
          place="bottom"
          type="dark"
          effect="solid"
          className="flex mb-3 space-x-4" />
            <a
                href={projectConfig.twitterUrl}
                aria-label={`${projectConfig.nftName} on Twitter`}
                rel="noopener noreferrer"
                target="_blank"
                data-tip="Twitter"
                data-for="footer"
                className="bg-gray-700 hover:bg-gray-600 rounded-full p-2"
              >
            <FaMailBulk />
              </a>
          <SocialIcon kind="facebook" href={projectConfig.facebook} size="6" />
          <SocialIcon kind="instagram" href={projectConfig.instagram} size="6" />
          <SocialIcon kind="twitter" href={projectConfig.twitter} size="6" />

        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/">
            <div>{`© ${new Date().getFullYear()}`} GoldEvent NFT</div>
          </Link>
        </div>
    </div>
    </footer>
  )
}
