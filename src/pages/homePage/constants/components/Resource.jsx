import React from 'react'
import { Link } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";
import { FaEye } from "react-icons/fa";



const Resource = () => {
    return (
        <article className='flex flex-col 2xl:flex-row items-start 2xl:items-center justify-between w-full px-6 py-6 lg:px-20 lg:py-16 gap-24 border border-dark-15 '>
            <div className='w-full 2xl:w-[30%]'>
                <div className='space-y-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
                        <path d="M28.5 35C28.5 26.3674 53.6449 11.001 52.4594 16.7595C49.9819 28.7935 49.9819 41.2065 52.4594 53.2405C53.6449 58.999 28.5 43.6326 28.5 35Z" fill="#FFD11A" />
                        <path d="M31.5 26C31.5 34.6326 6.35514 49.999 7.54064 44.2405C10.0181 32.2065 10.0181 19.7935 7.54064 7.75952C6.35514 2.00102 31.5 17.3674 31.5 26Z" fill="#404040" />
                    </svg>
                    <p className='font-kumbh text-white text-3xl font-semibold'>Ebooks</p>
                    <p className='font-inter text-gray-60 text-base'>Explore our collection of ebooks covering a wide spectrum of future technology topics.</p>
                    <Link to='/ebooks' className='flex items-center justify-center gap-2 rounded-md border border-dark-15 bg-dark-10 py-4 px-5 w-full text-gray-60 font-inter text-sm' >
                        Download Ebooks Now
                        <GoArrowUpRight size={20} color='yellow' />
                    </Link>
                </div>
                <div className='p-5 rounded-lg border border-dark-15 bg-dark-10 gap-7 w-full 2xl:w-fit mt-8'>
                    <p className='font-inter text-gray-60 text-base'>Downloaded By</p>
                    <p className='text-white font-inter text-xl font-semibold '>10k + Users</p>
                </div>
            </div>
            <div className='w-full 2xl:w-0 h-[1px] 2xl:h-0 bg-dark-15' />
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col lg:flex-row items-start lg:items-center justify-center gap-8'>
                    <p className='text-white font-inter text-xl font-semibold whitespace-nowrap'>Variety of Topics</p>
                    <p className='text-gray-60 font-inter text-base'>Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).</p>
                </div>
                <img src="https://images.pexels.com/photos/3761306/pexels-photo-3761306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={275} className='w-full h-[275px] rounded-[10px] object-cover bg-bottom' />
                <div className='flex flex-col 2xl:flex-row items-center justify-between gap-4'>
                    <div className='p-6 bg-dark-10 border border-dark-15 rounded-lg font-inter w-full 2xl:w-1/4'>
                        <p className='text-gray-60 text-base'>Total Ebooks</p>
                        <p className='text-white text-lg font-semibold'>Over 100 ebooks</p>
                    </div>
                    <div className='bg-dark-10  border border-dark-15 rounded-lg font-inter flex justify-between items-center p-6 flex-1 w-full'>
                        <div>
                            <p className='text-gray-60 text-base'>Download Formats</p>
                            <p className='text-white text-lg font-semibold'>PDF format for access.</p>
                        </div>
                        <div className='flex items-center justify-between gap-2 py-3 px-5 rounded-lg bg-dark-10 border border-dark-15 cursor-pointer'>
                            <p className='font-inter text-sm text-gray-60 '>Preview</p>
                            <FaEye size={20} color='yellow' />
                        </div>
                    </div>
                </div>
                <div className='rounded-lg bg-dark-10 border border-dark-15 p-6'>
                    <p className='font-inter text-base text-gray-60'>Average Author Expertise</p>
                    <p className='font-inter text-lg font-medium text-white'>Ebooks are authored by renowned experts with an average of 15 years of experience</p>
                </div>
            </div>
        </article>
    )
}

export default Resource