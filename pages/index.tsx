
import useTranslation from 'next-translate/useTranslation';
import Typography from '@material-ui/core/Typography';

export default function Home({ locale, availableLocales }) {
  const { t } = useTranslation();

  return (
    <>
      <div className='text-center'>
        <Typography variant="h3">GoldEvent</Typography>
        <Typography variant="h6">Your NFT VIP Ticket for all your favorites event.</Typography>
      </div>

    </>
  )
}
