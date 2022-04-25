/* eslint-disable jsx-a11y/no-onchange */

import Footer from './Footer';
import Header from './Header';
import Meta from './meta/Meta';
import SectionContainer from './SectionContainer';

type Props = {
  children: React.ReactNode;
  pageTitle?: string;
};

export default function LayoutWrapper({ children, pageTitle }: Props) {


  return (
    <>
      <SectionContainer>
      <Meta pageTitle={pageTitle} />

      <Header />
      <main>{children}</main>
      <Footer />
      </SectionContainer>




    </>
  );
}
