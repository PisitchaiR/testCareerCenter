import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';

const Nav = ({ leftMenus }) => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className="navbar bg-zinc-800 text-white px-6 flex justify-between">
        <div className='items-center w-9/12'>
          <Link href='/' className='mr-4'>
            <a><Image src="/it-kmitl-thai-white.svg" layout='fixed' width={168} height={32} alt="" /></a>
          </Link>
          <nav className='hidden md:flex gap-x-2 md:pl-5'>
            {leftMenus.map((menu) => (
              <Link key={menu.title} href={{
                pathname: menu.href
              }}>
                <a className='text-white hover:text-gray-300'>{menu.title}</a>
              </Link>
            ))}
          </nav>
        </div>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 w-3/12">
          <Link href='/login'><a className="text-white hover:text-gray-300">เข้าสู่ระบบ</a></Link>
          {/* <Link href='/register'><a className="text-white hover:text-gray-300">ลงทะเบียน</a></Link> */}
        </div>
        {/* hamburger menu mobile */}
        <div className="flex-none">
          <div className="lg:hidden md:hidden dropdown dropdown-end">
            <label className="btn btn-circle swap swap-rotate">

              <input onChange={handleToggle} className='hidden' type="checkbox" />

              <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

              <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

            </label>
            <ul className={isActive ? "hidden" : "menu menu-compact absolute right-0 z-50 transition duration-100 mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"}>
              {leftMenus.map((menu) => (
                <li key={menu.title}>
                  <Link href={{
                    pathname: menu.href
                  }}>
                    <a>{menu.title}</a>
                  </Link>
                </li>
              ))}
              <hr />
              <li>
                <Link href='/login'><a>เข้าสู่ระบบ</a></Link>
                {/* <Link href='/register'><a>ลงทะเบียน</a></Link> */}
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}
Nav.defaultProps = {
  leftMenus: [
    { href: '/howto', title: 'วิธีการใช้งาน' },
    { href: '/company', title: 'บริษัทที่เข้าร่วม' },
    { href: '/contact', title: 'ติดต่อเรา' }
  ],
}
export default Nav