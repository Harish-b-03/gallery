import { useState } from "react"
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

  return (
    <div onDoubleClick={()=>setLiked(!liked)} onMouseEnter={()=>setShowLike(true)} onMouseLeave={()=>setShowLike(false)} className="relative mb-[10px] ml-[10px] rounded-md overflow-hidden">
      <img
          src={image.src}
          alt=''
          className='w-full rounded-md object-cover md:opacity-75 transition-all duration-300 cursor-pointer hover:opacity-100'   
      />
      <div className="sm:hidden w-full h-[30px] flex justify-end items-start bg-transparent overflow-hidden">
        <div onClick={()=>{setLiked(!liked)}} className="w-[40px] h-[40px] cursor-pointer overflow-hidden">
          {
            (liked)?
            <HeartFilled/>
            :
            <HeartOutlineIcon className={'fill-white scale-50 cursor-pointer'} width={10} height={10}/>
          }
        </div>
      </div>
      {
        showLike && 
        <div onClick={()=>{setLiked(!liked)}} className="hidden sm:block absolute w-[40px] h-[40px] top-2 right-2 cursor-pointer overflow-hidden">
          
          {
            (liked)?
            <HeartFilled/>
            :
            <HeartOutlineIcon className={'fill-white scale-50 cursor-pointer'} width={10} height={10}/>
          }
        </div>
      }
    </div>
  )
}

export default Image