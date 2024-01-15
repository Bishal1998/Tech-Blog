import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { Navbar } from '.';

const Header = () => {
    return (
        <section className='flex justify-center items-center flex-col h-full'>
            {/*  <div className='flex justify-center items-center px-5  h-6 w-full'>
                <p className='font-inter text-lg text-gray-60 '>Subscribe to our Newsletter For New & latest Blogs and Resources</p>
                <div className=' text-yellow-55'>
                    <GoArrowUpRight size={24} />
                </div>
            </div> */}
            <div className='hidden min-[450px]:flex justify-center items-center mx-auto pt-8 pb-3 px-6 sm:pt-6'>
                <div className='text-gray-60 font-inter text-xs sm:text-sm lg:text-lg'>Subscribe to our Newsletter For New & latest Blogs and Resources</div>
                <div className=' text-yellow-55 h-6 ml-1'>
                    <GoArrowUpRight size={20} />
                </div>
            </div>
            <div className='w-full border border-dark-15'>
                <Navbar />
            </div>
        </section>
    )
}

export default Header