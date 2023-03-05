import NavBar from "@/components/NavBar"

const Layout:React.FC<any> = ({children}) => {
  return (
    <div className='w-screen h-fit bg-black'>
        <NavBar/>
        {children}
    </div>
  )
}

export default Layout