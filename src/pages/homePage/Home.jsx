import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Home = () => {
    return (
        <section>
            <div className='flex justify-center items-center px-5 py-6 h-6'>
                <p className='font-inter text-lg text-gray-60'>Subscribe to our Newsletter For New & latest Blogs and Resources</p>
                <div className=' text-yellow-55'>
                    <GoArrowUpRight size={24} />
                </div>
            </div>
        </section>
    )
}

export default Home