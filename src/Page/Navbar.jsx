import React, { useState } from "react"

import LogoNopel from "../Assets/LogoNopell.png"

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Experience", link: "/experience" },
    { name: "Contact", link: "/contact" },
  ]

  const [open, setOpen] = useState(false)

  return (
    <div className='shadow-sm w-full top-0 left-0 z-10 fixed'>
      <div className='md:flex items-center justify-between bg-black shadow-sm shadow-[#FFC225] py-4 md:px-10 px-7'>
        <div className='w-16 cursor-pointer'>
          <img src={LogoNopel} alt='logoNopell' />
        </div>
        <div onClick={() => setOpen(!open)} className='text-[#FFC225] text-3xl absolute right-10 top-5 cursor-pointer md:hidden'>
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center gap-5 font-[Popins] absolute md:static  bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 transition-all duration-500 ease-in-out ${open ? "top-16" : "top-[-490px]"}`}>
          {Links.map((link) => (
            <li key={link.name} className='text-white text-xl md:my-0 my-5'>
              <a className='text-[#F8E9C6] hover:text-[#FFC225] duration-300' href={link.link}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
