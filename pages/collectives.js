import Link from '../components/Link';
import useTranslation from 'next-translate/useTranslation';
import image from 'next/image';

export default function Collectives({ locale, availableLocales }) {
  const { t } = useTranslation();

  return (
    <>
      <div className="container justify-center flex flex-wrap">
        <div className="max-w-sm py-10 pr-10 pl-10">
          <div className="bg-stone-400 relative shadow-2xl hover:shadow-xl transition duration-500 rounded-lg border-slate-400">
            <image className="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
            <div className="py-6 px-8 rounded-lg content-center">
              <h1 className="font-bold text-2xl mb-3 hover:cursor-pointer text-center underline">Octov</h1>
              <p className="tracking-wide text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
              <div classNameName='flex justify-center'>
                <Link href="/collectives/octov">
                  <button className="border-2 justify-center mt-6 py-2 px-4 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Get your GoldEvent NFT</button>
                </Link>
              </div>
            </div>
            <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
              <span className="text-md text-black">3/20</span>
            </div>
          </div>
        </div>
        <div className="max-w-sm py-10 pr-10 pl-10">
          <div className="bg-stone-400 relative shadow-2xl hover:shadow-xl transition duration-500 rounded-lg border-slate-400">
            <image className="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
            <div className="py-6 px-8 rounded-lg content-center">
              <h1 className="font-bold text-2xl mb-3 hover:cursor-pointer text-center underline">TMO</h1>
              <p className="tracking-wide text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
              <div classNameName='flex justify-center'>
                <Link href="/collectives/tmo">
                  <button className="border-2 justify-center mt-6 py-2 px-4 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Get your GoldEvent NFT</button>
                </Link>
              </div>
            </div>
            <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
              <span className="text-md text-black">3/20</span>
            </div>
          </div>
        </div>
        <div className="max-w-sm py-10 pr-10 pl-10">
          <div className="bg-stone-400 relative shadow-2xl hover:shadow-xl transition duration-500 rounded-lg border-slate-400">
            <image className="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
            <div className="py-6 px-8 rounded-lg content-center">
              <h1 className="font-bold text-2xl mb-3 hover:cursor-pointer text-center underline">La North</h1>
              <p className="tracking-wide text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
              <div classNameName='flex justify-center'>
                <Link href="/collectives/lanorth">
                  <button className="border-2 justify-center mt-6 py-2 px-4 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Get your GoldEvent NFT</button>
                </Link>
              </div>
            </div>
            <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
              <span className="text-md text-black">3/20</span>
            </div>
          </div>
        </div>
        <div className="max-w-sm py-10 pr-10 pl-10">
          <div className="bg-stone-400 relative shadow-2xl hover:shadow-xl transition duration-500 rounded-lg border-slate-400">
            <image className="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
            <div className="py-6 px-8 rounded-lg content-center">
              <h1 className="font-bold text-2xl mb-3 hover:cursor-pointer text-center underline">This is House</h1>
              <p className="tracking-wide text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
              <div classNameName='flex justify-center'>
                <Link href="/collectives/thisishouse">
                  <button className="border-2 justify-center mt-6 py-2 px-4 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Get your GoldEvent NFT</button>
                </Link>
              </div>
            </div>
            <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
              <span className="text-md text-black">3/20</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
