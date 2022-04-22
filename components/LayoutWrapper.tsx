/* eslint-disable jsx-a11y/no-onchange */

import Logo from '../data/logo.svg';
import NextLink from './NextLink';
import SectionContainer from './SectionContainer';
import Footer from './Footer';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import headerNavLinks from '../data/headerNavLinks';

type Props = {
  children: React.ReactNode;
  pageTitle?: string;
};

export default function LayoutWrapper({ children,  } : Props)   {


  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-10">
          {/* <div>
            <NextLink href="/" aria-label="Tailwind CSS Blog">
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
              </div>
            </NextLink>
          </div> */}
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <NextLink key={link.href} href={link.href} className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100">

                </NextLink>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
}
