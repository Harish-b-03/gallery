const NavBar = () => {
  return (
    <div className='fixed top-0 w-full h-[60px] flex justify-center items-center bg-gradient-to-b from-black to-[rgba(0,0,0,0.8)] border-b border-solid border-b-gray-900 z-50'>
        <div className='w-full px-4 sm:w-4/5 sm:px-0 flex justify-between items-center'>
            <div className=''>
                <div className='text-white text-lg font-bold'>
                    photo<span className='text-pink-600'>Frame</span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default NavBar