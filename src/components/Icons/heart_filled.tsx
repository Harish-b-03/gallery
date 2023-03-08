import React from 'react'

interface HeartFilledProps {
    className: string,
}
const HeartFilled:React.FC<HeartFilledProps> = ({className}) => {
  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="60" 
        height="60"
        viewBox="0 0 130 130"
        className={className}
    >
        <path 
            fill="rgb(219 39 119)" 
            fillRule="evenodd" 
            d="M12.65 16.684a12.488 12.488 0 0 0 0 17.653l1.758 1.765 17.588 17.653 17.587-17.653 1.759-1.765a12.488 12.488 0 0 0 0-17.653 12.376 12.376 0 0 0-17.588 0l-1.758 1.765-1.759-1.765a12.376 12.376 0 0 0-17.587 0z"
        />
        
        <path 
            fill="none" 
            stroke="#fff" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="1.999" 
            d="M14.14 29.77a8.497 8.497 0 0 1 0-8.497 8.497 8.497 0 0 1 7.36-4.249" 
            opacity=".4"
        />
        
        <path 
            fill="#d30045" 
            fill-rule="evenodd" 
            d="M21.444 13.015a12.372 12.372 0 0 0-8.794 3.666 12.634 12.634 0 0 0-1.347 1.62c.02-.02.02-.023.032-.035a11.297 11.297 0 0 1 16.053 0l2.372 2.392 1.605-1.613c.206-.207.423-.394.64-.581L30.24 16.68a12.372 12.372 0 0 0-8.794-3.667zm21.103 0c-2.592 0-5.176.826-7.365 2.452a11.286 11.286 0 0 1 11.469 2.8 11.397 11.397 0 0 1 0 16.111l-1.605 1.613-15.374 15.432 2.323 2.332L49.583 36.1l1.757-1.766a12.49 12.49 0 0 0 0-17.654 12.372 12.372 0 0 0-8.793-3.666z"
        />
    
    </svg>
  )
}

export default HeartFilled

