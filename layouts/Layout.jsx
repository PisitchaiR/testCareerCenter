import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <Header/>
        <div className="flex flex-col w-full justify-center items-center font-kanit">
          {children}
        </div>
      <Footer/>
    </>
  )
}
export default Layout