import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex md:justify-evenly bg-slate-900 text-white justify-around h-16 items-center">
        <div className="logo flex items-center">
            <span className='font-bold text-xl '>GameHub</span>
        </div>
        <div className='text-white text-2xl font-bold'>
            <a href="https://github.com/the-sukhsingh/Gamehub" target='_blank' className='flex gap-4'>
            Github
            <img  src="icons/github.svg" width={32} alt="" />
            </a>
        </div>
        
    </nav>
  )
}

export default Navbar
