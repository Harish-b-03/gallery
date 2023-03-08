import React from 'react'

interface HeartAnimateIconProps{
    className?: string,
}

const HeartAnimated:React.FC<HeartAnimateIconProps> = ({className}) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 50 50"
            className={className}
        >
        
            <defs>
                <clipPath id="a">
                    <path d="M0 38h38V0H0v38Z"/>
                </clipPath>
            </defs>
            <g 
                clip-path="url(#a)" 
                transform="matrix(1.25 0 0 -1.25 0 47.5)">
                    <path 
                        fill="rgb(219 39 119)" 
                        d="M36.885 25.166c0 5.45-4.418 9.868-9.867 9.868-3.308 0-6.227-1.633-8.018-4.129-1.79 2.496-4.71 4.129-8.017 4.129-5.45 0-9.868-4.418-9.868-9.868 0-.772.098-1.52.266-2.241C2.752 14.413 12.216 5.431 19 2.965c6.783 2.466 16.249 11.448 17.617 19.96.17.721.268 1.469.268 2.241"
                    />
            </g>
        </svg>
    )
}

export default HeartAnimated

