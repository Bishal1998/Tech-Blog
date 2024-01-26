import React from 'react'
import { Link } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";
import {
    FaHeart,
    FaRegHeart,
    FaRegComment,
} from "react-icons/fa";


const NewsComp = ({ featuredImg, title, category, likeCount, commentCount, link }) => {
    return (
        <article className='space-y-4 w-full'>
            <img src={featuredImg} alt={title} height={222} className='w-full rounded-xl h-[222px] object-cover' />
            <div className='font-inter text-xl '>
                <p className='text-white font-semibold'>{title}</p>
                <p className='text-gray-60 py-2'>{category}</p>
            </div>
            <div className="flex gap-4 whitespace-nowrap font-kumbh text-sm 2xl:text-lg text-gray-60">
                <p className="flex items-center justify-center gap-2 py-2 px-4 rounded-[100px] bg-dark-10 border border-dark-15 cursor-pointer">
                    <FaHeart size={24} color="orange" />
                    {likeCount > 999 ? `${likeCount / 1000}k` : likeCount}
                </p>
                <p className="flex items-center justify-center gap-2 py-2 px-4 rounded-[100px] bg-dark-10 border border-dark-15 cursor-pointer">
                    <FaRegComment size={24} />
                    {commentCount > 999 ? `${commentCount / 1000}k` : commentCount}
                </p>
                <Link to={link} className='flex items-center justify-center py-4 px-6 rounded-xl border border-dark-15 bg-dark-8 font-inter text-lg text-gray-60 gap-2'>
                    Read More
                    <GoArrowUpRight size={24} color='yellow' />
                </Link>
            </div>
        </article>
    )
}

export default NewsComp