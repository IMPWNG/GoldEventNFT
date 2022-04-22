import NextLink from './NextLink';
import Image from 'next/image';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import Logo from '../public/static/logo/logo.svg';
import projectConfig from '../config/projectConfig';

type Props = {
    children: React.ReactNode;
    pageTitle?: string;
};

export default function Header() {

    return (
        <>
            <div className="flex flex-col justify-between h-screen">
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
                        <div className="hidden sm:block space-x-4">
                            <div>
                                <NextLink href="/collectives" className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100">
                                    <a>collectives</a>
                                </NextLink>
                            </div>
                            <div>
                                <NextLink href="/artists" className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100">
                                    <a>artistes</a>
                                </NextLink>
                            </div>
                           

                            <div>
                                <NextLink href="/collaborations" className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100">
                                    <a>collaborations</a>
                                </NextLink>
                            </div>
                          

                            <div>   
                                <NextLink href="/marketplace" className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100">
                                <a>marketplace</a>
                            </NextLink>

                            </div>
                        </div>
                        <ThemeSwitch />
                        <MobileNav />
                    </div>
                </header>
            </div>
        </>
    );
}
