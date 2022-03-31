
import useTranslation from 'next-translate/useTranslation';
import Typography from '@material-ui/core/Typography';

export default function Artists({ locale, availableLocales }) {
    const { t } = useTranslation();

    return (
        <>
            <div className='text-center'>
                <Typography variant="h3">🔊Coming Soon</Typography>
            </div>

        </>
    );
}
