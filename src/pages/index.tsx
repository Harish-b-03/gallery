import Layout from '@/containers/Layout'
import { images, imageType } from '@/data'
import Head from 'next/head'
import Masonry from "react-masonry-css"
import ImageContainer from '@/components/Image'
import ImageViewer from '@/components/ImageViewer'
import { useState } from 'react'
import TermsConditions from '@/components/terms_conditions'

export default function Home() {
  const [showImageViewer, setShowImageViewer] = useState(false)
  const [focusImage, setFocusImage] = useState<imageType>({id: 1, src: '/Images/Image-00001.jpeg',})   
  const [showTerms, setShowTerms] = useState(false)
  return (
    <Layout>
      <Head>
        <title>Gallery</title>
        <meta name="description" content="Photo Gallery app using NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='relative w-full h-fit flex justify-center items-center box-border overflow-x-hidden'>
        <Masonry 
          breakpointCols={{450: 1, 640: 1, 900: 4, default: 4}}
          className='my-masonry-grid sm:ml-[-30px] w-full px-[8px] mt-[68px] flex justify-center sm:justify-start items-center sm:items-start sm:w-4/5 sm:px-0 h-fit sm:mt-24'
          columnClassName="" 
          >
          {
            images.map((image, index)=>{
              return(
                <ImageContainer key={index} id={image.id} src={image.src} setFocusImage={setFocusImage} setShowImageViewer={setShowImageViewer}/>
              )
            })
          }
        </Masonry>

        {
          <ImageViewer showImageViewer={showImageViewer} setShowImageViewer={setShowImageViewer} focusImage={focusImage} setFocusImage={setFocusImage}/>
        }

        {
          <TermsConditions showTerms={showTerms} setShowTerms={setShowTerms}/>
        }
      </main>
    </Layout>
  )
}
