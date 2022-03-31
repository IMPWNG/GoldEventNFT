
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Link from '../components/Link'


import useTranslation from 'next-translate/useTranslation'
import Typography from '@material-ui/core/Typography'

export default function Collectives({ locale, availableLocales }) {
  const { t } = useTranslation()

  return (
    <>
      <PageSEO
        title={siteMetadata.title[locale]}
        description={siteMetadata.description[locale]}
        availableLocales={availableLocales}
      />
      <div class="container justify-center flex flex-wrap">
        <div class="max-w-sm py-10 pr-10 pl-10">
          <div class="bg-stone-400 relative shadow-2xl hover:shadow-xl transition duration-500 rounded-lg border-slate-400">
            <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
            <div class="py-6 px-8 rounded-lg content-center">
              <h1 class="font-bold text-2xl mb-3 hover:cursor-pointer text-center underline">Octov</h1>
              <p class="tracking-wide text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
              <div className='flex justify-center'>
                <Link href="/collectives/octov">
                  <button class="border-2 justify-center mt-6 py-2 px-4 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Get your GoldEvent NFT</button>
                </Link>
              </div>
            </div>
            <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
              <span class="text-md text-black">3/20</span>
            </div>
          </div>
        </div>



        
        <div class="max-w-sm py-10 pr-10 pl-10">
          <div class="bg-stone-400 relative shadow-2xl hover:shadow-xl transition duration-500 rounded-lg border-slate-400">
            <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
            <div class="py-6 px-8 rounded-lg content-center">
              <h1 class="font-bold text-2xl mb-3 hover:cursor-pointer text-center underline">TMO</h1>
              <p class="tracking-wide text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
              <div className='flex justify-center'>
                <Link href="/collectives/tmo">
                  <button class="border-2 justify-center mt-6 py-2 px-4 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Get your GoldEvent NFT</button>
                </Link>
              </div>
            </div>
            <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
              <span class="text-md text-black">3/20</span>
            </div>
          </div>
        </div>
        <div class="max-w-sm py-10 pr-10 pl-10">
          <div class="bg-stone-400 relative shadow-2xl hover:shadow-xl transition duration-500 rounded-lg border-slate-400">
            <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
            <div class="py-6 px-8 rounded-lg content-center">
              <h1 class="font-bold text-2xl mb-3 hover:cursor-pointer text-center underline">La North</h1>
              <p class="tracking-wide text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
              <div className='flex justify-center'>
                <Link href="/collectives/lanorth">
                  <button class="border-2 justify-center mt-6 py-2 px-4 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Get your GoldEvent NFT</button>
                </Link>
              </div>
            </div>
            <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
              <span class="text-md text-black">3/20</span>
            </div>
          </div>
        </div>
        <div class="max-w-sm py-10 pr-10 pl-10">
          <div class="bg-stone-400 relative shadow-2xl hover:shadow-xl transition duration-500 rounded-lg border-slate-400">
            <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
            <div class="py-6 px-8 rounded-lg content-center">
              <h1 class="font-bold text-2xl mb-3 hover:cursor-pointer text-center underline">This is House</h1>
              <p class="tracking-wide text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
              <div className='flex justify-center'>
                <Link href="/collectives/thisishouse">
                  <button class="border-2 justify-center mt-6 py-2 px-4 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Get your GoldEvent NFT</button>
                </Link>
              </div>
            </div>
            <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
              <span class="text-md text-black">3/20</span>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
