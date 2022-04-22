/* eslint-disable jsx-a11y/no-onchange */

import Footer from './Footer';
import Header from './Header';
import Meta from './meta/Meta';
import SectionContainer from './SectionContainer';

type Props = {
  children: React.ReactNode;
  pageTitle?: string;
};

export default function LayoutWrapper({ children, pageTitle  } : Props)   {


  return (
   <>
    <Meta pageTitle={pageTitle} />
      <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
        <Header />
        <main clas>{children}</main>
        <Footer />
      </div>
    

   </>
  );
}
