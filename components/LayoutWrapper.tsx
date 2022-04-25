/* eslint-disable jsx-a11y/no-onchange */

import Footer from './Footer';
import Header from './Header';
import Meta from './meta/Meta';
import SectionContainer from './SectionContainer';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const LayoutWrapper = ({ children }: Props) => {


  return (
   <>
    <Meta />
      <SectionContainer>
        <div className="flex flex-col justify-between">
        <Header />
          <main className="mb-auto">{children}</main>
        <Footer />
        </div>
        </SectionContainer>

    

   </>
  );
}

export default LayoutWrapper;