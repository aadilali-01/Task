import Link from 'next/link'
import React from 'react'
import {FiArrowRight} from "react-icons/fi"

const NavPage = () => {
  return (
    <div className='w-screen'>
        <div className='flex items-center justify-between py-4 px-48'>
            <div className=''>
                <img className='shrink-0 h-10' src="/image 157.png" alt="" />
            </div>
            <div className='flex items-center gap-7 text-gray-300 text-xs'>
                <Link href="#">Solutions</Link>
                <Link href="#">Services</Link>
                <Link href="#">About</Link>
                <Link href="#">Culture</Link>
            </div>
            <div className='flex items-center gap-7'>
                <button className='text-xs shrink-0 px-8 py-3 bg-zinc-900 rounded-3xl border border-neutral-700 border-solid hover:bg-zinc-800 hover:border-neutral-800 hover:text-white'>Contact us</button>
                <button className='shrink-0 w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full border border-neutral-700 border-solid hover:bg-zinc-800 hover:border-neutral-800 hover:text-white'><FiArrowRight/></button>
            </div>
        </div>
    </div>
  )
}

export default NavPage