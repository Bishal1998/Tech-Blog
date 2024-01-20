import React from 'react'
import { NavLink } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";


const Title = ({ title, link, desc, content }) => {
    return (
        <section className='flex flex-col 2xl:flex-row justify-between items-center bg-dark-10 w-full px-6 py-6 lg:px-20 lg:py-16 gap-4 '>
            <div className='space-y-6'>
                <p className='py-1 px-2 lg:py-[6px] lg:px-[10px] bg-dark-20 rounded-[4px] text-base lg:text-xl font-medium font-inter text-white w-fit'>{title}</p>
                <h2 className='text-[28px] md:text-[44px] lg:text-6xl font-medium font-kumbh text-white'>{desc}</h2>
            </div>
            {
                link && content ? <NavLink to={`/${link}`} className='flex w-11/12 md:w-fit justify-center items-center rounded-xl md:py-[14px] md:px-5 py-[14px] px-5 lg:py-4 lg:px-6 bg-dark-8 border border-dark-15 font-inter md:text-sm lg:text-lg text-gray-60'>
                    <p>View All {content}</p>
                    <GoArrowUpRight size={20} color='yellow' />
                </NavLink>
                    : ''
            }
        </section>
    )
}

export default Title