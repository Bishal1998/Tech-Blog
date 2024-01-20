import React from 'react'
import { futureBlog } from '../data'

const Features = () => {
    return (
        <section className='px-6 py-6 lg:px-20 lg:py-16 flex justify-between items-center gap-4'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <path d="M54 54C64.6731 51.4308 72 46.1265 72 40C72 33.8735 64.6731 28.5692 54 26C55.098 30.2126 55.716 34.9676 55.716 40C55.716 45.0324 55.098 49.7874 54 54Z" fill="#404040" />
                    <path d="M26 54C15.3269 51.4308 8 46.1265 8 40C8 33.8735 15.3269 28.5692 26 26C24.902 30.2126 24.284 34.9676 24.284 40C24.284 45.0324 24.902 49.7874 26 54Z" fill="#404040" />
                    <path d="M26 54C28.5692 64.6731 33.8735 72 40 72C46.1265 72 51.4308 64.6731 54 54C49.7874 55.098 45.0324 55.716 40 55.716C34.9676 55.716 30.2126 55.098 26 54Z" fill="#FFD11A" />
                    <path d="M26 26C28.5692 15.3269 33.8735 8 40 8C46.1265 8 51.4308 15.3269 54 26C49.7874 24.902 45.0324 24.284 40 24.284C34.9676 24.284 30.2126 24.902 26 26Z" fill="#FFD11A" />
                </svg>
                <h2 className='text-white text-[40px] font-kumbh font-semibold'>Future Technology Blog</h2>
                <p className='text-gray-60 font-inter text-lg '>Stay informed with our blog section dedicated to future technology.</p>
            </div>
            <div className='grid lg:grid-rows-2 grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-3'>
                {
                    futureBlog.map((item) => {
                        const { id, title, desc } = item;
                        return <div key={id} className='rounded-xl bg-dark-10 border border-dark-15 flex flex-col gap-1 p-6 lg:p-7 lg:gap-4'>
                            <p className='font-inter text-lg lg:text-xl 2xl:text-2xl font-medium text-white'>{title}</p>
                            <p className='font-inter text-sm lg:text-base 2xl:text-lg text-gray-60'>{desc}</p>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default Features