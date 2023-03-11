import { images, imageType } from '@/data'
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface ImageViewerProps {
    showImageViewer: any,
    setShowImageViewer: any,
    focusImage: imageType,
    setFocusImage: any,
}

const ImageViewer:React.FC<ImageViewerProps> = ({setShowImageViewer, showImageViewer, focusImage, setFocusImage}) => { 
    const [focusOnSelect, setFocusOnSelect] = useState(false)

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 12,
          slidesToSlide: 2, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 10,
          slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 4, // optional, default to 1.
          slidesToSlide: 2,
        }
      };

      useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth > 500)
                setFocusOnSelect(true)
            else
                setFocusOnSelect(false)
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize)
        }
      }, [])
      

  return (
    <div className={` ${showImageViewer?'opacity-1':'opacity-0 pointer-events-none'} fixed top-0 left-0 w-full h-[calc(100vh)] pt-[60px] overflow-x-hidden transition-all duration-300 box-border bg-[black] z-40`}>
        <div className="w-full h-3/4 flex justify-center items-center bg-black">
            <img 
                src={focusImage.src} 
                alt='Image not available'
                className='w-full sm:w-fit lg:h-4/5 '
            />
        </div>
        <div className="w-full h-1/4 text-white">
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                partialVisible={true}
                focusOnSelect={focusOnSelect}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                renderButtonGroupOutside={true}
                dotListClass="custom-dot-list-style"
                itemClass="mx-2"
                className="h-full transition-all duration-300"
                >
                {
                    images.map((image)=>{
                        return (
                            <div key={image.id} onClick={()=>{setFocusImage(image)}} className='h-full flex justify-center items-center cursor-pointer'>
                                <img
                                    src={image.src}
                                    className='my-1 h-4/6 w-full object-cover'
                                />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
        <div onClick={()=>setShowImageViewer(false)} className='fixed top-20 right-5 px-2 py-1 rounded-lg bg-[rgba(0,0,0,0.2)] text-gray-300 cursor-pointer'>
            <span className='font-semibold'>x</span>
        </div>
    </div>
  )
}

export default ImageViewer