import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const ContentPage = () => {
  return (
    <div className='flex items-center justify-center gap-14 mt-8'>
        <div>
            <h1 className='text-4xl font-extralight'>Searching for <span className='font-semibold'>Augmented <br /> Development </span> Teams to <br /> steer your product <br /> towards triumph?"</h1>
            <div className='flex items-start justify-between mt-6'>
                <div>
                    <h1 className='text-3xl font-semibold leading-none'>50+</h1>
                    <h6 className='text-xs mt-1 text-gray-300'>Clients</h6>
                </div>
                <div>
                    <h1 className='text-3xl font-semibold leading-none'>80+</h1>
                    <h6 className='leading-tight text-xs mt-1 text-gray-300'>Projects successfully <br />completed</h6>
                </div>
                <div>
                    <h1 className='text-3xl font-semibold leading-none'>60%</h1>
                    <h6 className='leading-tight text-xs mt-1 text-gray-300'>of the clients converted into <br /> long term engagement partners</h6>
                </div>
            </div>
        </div>
        <div className='py-5 px-3.5 bg-neutral-300 text-black rounded-lg'>
            <form>
                <h1 className='font-semibold'>Fill out the form.</h1>
                <p className='font-normal text-xs'>Our team will touch base with you within 24 hours.</p>
                <div className='mt-4 flex items-start gap-5'>
                    <input className='w-56 py-2.5 bg-transparent outline-none border-b border-solid border-gray-600 text-xs placeholder:text-slate-900' type="text" placeholder='Full Name*' />
                    <input className='w-56 py-2.5 bg-transparent outline-none border-b border-solid border-gray-600 text-xs placeholder:text-slate-900' type="email" placeholder='Email ID*' />
                </div>
                <div className='mt-4 flex items-start gap-5'>
                    <input className='w-56 py-2.5 bg-transparent outline-none border-b border-solid border-gray-600 text-xs placeholder:text-slate-900' type="text" placeholder='Country' />
                    <input className='w-56 py-2.5 bg-transparent outline-none border-b border-solid border-gray-600 text-xs placeholder:text-slate-900' type="text" placeholder='Contact Number' />
                </div>
                <input className='mt-4 w-full py-2.5 bg-transparent outline-none border-b border-solid border-gray-600 text-xs placeholder:text-slate-900' type="text" placeholder='Tell us your requirements*' />
                <div className='mt-6 flex items-start gap-3'>
                    <button className='text-xs text-white shrink-0 px-6 py-2.5 bg-zinc-900 rounded-3xl border border-neutral-700 border-solid transform hover:scale-105 hover:bg-zinc-800 hover:shadow-lg transition-transform duration-300 ease-in-out'>Submit</button>
                    <button className='text-xs shrink-0 text-white w-9 h-9 bg-zinc-900 flex items-center justify-center rounded-full border border-neutral-700 border-solid transform hover:scale-105 hover:bg-zinc-800 hover:shadow-lg transition-transform duration-300 ease-in-out'><FiArrowRight/></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContentPage