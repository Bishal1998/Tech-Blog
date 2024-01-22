import React from 'react'
import { Link } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";
import { FaEye } from "react-icons/fa";



const Resource = ({
    logo: LogoComponent,
    title,
    desc,
    link,
    topic,
    topicDesc,
    img,
    titleCount,
    titleExpertise
}) => {
    return (
        title && <article className='flex flex-col 2xl:flex-row items-start 2xl:items-center justify-between w-full px-6 py-6 lg:px-20 lg:py-16 gap-24 border border-dark-15 '>
            <div className='w-full 2xl:w-[30%]'>
                <div className='space-y-6'>
                    {LogoComponent()}
                    <p className='font-kumbh text-white text-3xl font-semibold'>{title}</p>
                    <p className='font-inter text-gray-60 text-base'>{desc}</p>
                    <Link to={`/${link}`} className='flex items-center justify-center gap-2 rounded-md border border-dark-15 bg-dark-10 py-4 px-5 w-full text-gray-60 font-inter text-sm' >
                        Download {title} Now
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
                    <p className='text-white font-inter text-xl font-semibold whitespace-nowrap'>{topic}</p>
                    <p className='text-gray-60 font-inter text-base'>{topicDesc}</p>
                </div>
                <img src={img} alt={title} height={275} className='w-full h-[275px] rounded-[10px] object-cover bg-bottom' />
                <div className='flex flex-col 2xl:flex-row items-center justify-between gap-4'>
                    <div className='p-6 bg-dark-10 border border-dark-15 rounded-lg font-inter w-full 2xl:w-1/4'>
                        <p className='text-gray-60 text-base'>Total {title}</p>
                        <p className='text-white text-lg font-semibold'>Over {titleCount} {title.toLowerCase()}</p>
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
                    <p className='font-inter text-lg font-medium text-white'>{titleExpertise}</p>
                </div>
            </div>
        </article>
    )
}

export default Resource