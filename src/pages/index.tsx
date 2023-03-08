import Layout from '@/containers/Layout'
import { images } from '@/data'
import Head from 'next/head'
import Image from '@/components/Image'
import Masonry from "react-masonry-css"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Gallery</title>
        <meta name="description" content="Photo Gallery app using NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='w-full h-fit flex justify-center items-center box-border overflow-x-hidden'>
        <Masonry 
          breakpointCols={{450: 1, 640: 1, 900: 4, default: 4}}
          className='my-masonry-grid sm:ml-[-30px] w-full px-[8px] mt-[68px] flex justify-center sm:justify-start items-center sm:items-start sm:w-4/5 sm:px-0 h-fit sm:mt-24'
          columnClassName="" 
          >
          {
            images.map((image, index)=>{
              return(
                <Image key={index} image={image}/>
              )
            })
          }
        </Masonry>
      </main>
    </Layout>
  )
}
