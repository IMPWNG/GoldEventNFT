import NextLink from './NextLink';
import Image from 'next/image';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import Logo from '../public/static/logo/logo.svg';
import projectConfig from '../config/projectConfig';
import NavLinks from '../data/NavLinks';

type Props = {
    children: React.ReactNode;
    pageTitle?: string;
};

export default function Header() {

    return (
        <>
            <header className="flex items-center justify-between py-10">
                <div>
                    <NextLink href="/" aria-label="Tailwind CSS Blog">
                        <div className="flex items-center justify-between">
                            <div className="mr-3">
                                <Image src={Logo} alt={projectConfig.nftName} width={35}
                                    height={35}
                                    className="rounded-full" />
                            </div>
                        </div>
                    </NextLink>
                </div>
                <div className="flex items-center text-base leading-5">
                    <div className="hidden sm:block">
                        {NavLinks.map((link) => (
                            <NextLink
                                key={link.title}
                                href={link.href}
                                className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                            >
                                {link.title}
                            </NextLink>
                        ))}
                    </div>
                    <ThemeSwitch />
                    <MobileNav />
                </div>
            </header>
        </>
    );
}
