import Link from './Link';
import siteMetadata from '../data/siteMetadata';
import SocialIcon from './social-icons';


export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/">
            <div>{`© ${new Date().getFullYear()}`} GoldEvent NFT</div>
          </Link>
        </div>
      </div>
    </footer>
  )
}
