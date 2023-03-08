import { useEffect, useState } from "react"
import HeartAnimated from "./Icons/heart-animate"
import HeartFilled from "./Icons/heart_filled"
import HeartOutlineIcon from "./Icons/heart_outline"

export interface ImageProps{
    image: {
        id: number,
        src: string,
    }
}

const Image:React.FC<ImageProps> = ({image}) => {
  const [liked, setLiked] = useState(false);
  const [showLike, setShowLike] = useState(false)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    return () => {
      if(!liked){
          setAnimate(true);
          setTimeout(()=>{setAnimate(false);},1000)
      }
    }
  }, [liked])

  return (
    <div onMouseEnter={()=>setShowLike(true)} onMouseLeave={()=>setShowLike(false)} className="relative mb-[10px] sm:ml-[10px] rounded-md overflow-hidden">
      <div onDoubleClick={()=>setLiked(!liked)} className="relative w-full h-full">
        <img
            src={image.src}
            alt=''
            className='w-full rounded-md object-cover md:opacity-75 transition-all duration-300 cursor-pointer hover:opacity-100'   
        />
        {
          (animate) &&
          <div className="absolute top-1/2 left-1/2 w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] animate-likeAnimation" style={{translate: '-50% -50%',}}>
            <HeartAnimated className=" z-30 w-full h-full"/>
          </div>
        }
      </div>
      <div className="sm:hidden w-full h-[40px] px-2 flex justify-end items-center overflow-hidden bg-black">
        <div onClick={()=>{setLiked(!liked)}} className="w-[30px] h-[30px] cursor-pointer overflow-hidden bg-black">
          {
            (liked)?
            <HeartFilled className=""/>
            :
            <HeartOutlineIcon width={10} height={10}/>
          }
        </div>
      </div>
      {
        showLike && 
        <div className="hidden sm:block absolute w-[40px] h-[40px] top-2 right-1 cursor-pointer z-20 overflow-hidden">
          {
            (liked)?
            <span onClick={()=>{setLiked(!liked)}}>
              <HeartFilled className=""/>
            </span>
            :
            <span onClick={()=>{setLiked(!liked)}}>
              <HeartOutlineIcon width={10} height={10}/>
            </span>
          }
        </div>
      }
    </div>
  )
}

export default Image