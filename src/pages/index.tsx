import Layout from '@/containers/Layout'
import { images } from '@/data'
import Head from 'next/head'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Gallery</title>
        <meta name="description" content="Photo Gallery app using NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='w-full h-fit flex justify-center items-center box-border overflow-x-hidden'>
        <ResponsiveMasonry
          columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}
          className='w-full px-[8px] mt-[68px] sm:w-4/5 sm:px-0 h-fit sm:mt-24'
          >
          <Masonry gutter='8px' className=''>
            {
              images.map((image, index)=>{
                return(
                  <img
                    key={index}
                    src={image.src}
                    alt=''
                    className='rounded-md object-contain opacity-75 transition-all duration-300 cursor-pointer hover:opacity-100'
                  />
                )
              })
          }
          </Masonry>
        </ResponsiveMasonry>
      </main>
    </Layout>
  )
}
