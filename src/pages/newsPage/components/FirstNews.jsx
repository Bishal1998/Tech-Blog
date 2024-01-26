import React from 'react'
import {
    FaHeart,
    FaRegHeart,
    FaRegComment,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const FirstNews = ({ news }) => {
    const {
        title,
        category,
        desc,
        likeCount,
        commentCount,
        link,
        publishedDate,
        author,
        featuredImg
    } = news;
    return (
        <article className='w-full px-6 py-6 lg:px-20 lg:py-16 border-b border-t border-dark-15 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-12'>
            <img src={featuredImg} alt="" className='w-full xl:w-[515px] h-[325px] object-cover rounded-xl' />
            <div className='font-inter'>
                <p className='text-white text-2xl font-semibold pb-4'>{title}</p>
                <p className='text-gray-60'>{desc}</p>
                <div className='text-base flex gap-8 py-8'>
                    <div>
                        <p className='text-gray-60'>Category</p>
                        <p className='text-white'>{category}</p>
                    </div>
                    <div>
                        <p className='text-gray-60'>Publication Date</p>
                        <p className='text-white'>{publishedDate}</p>
                    </div>
                    <div>
                        <p className='text-gray-60'>Author</p>
                        <p className='text-white'>{author}</p>
                    </div>
                </div>
                <div className="flex justify-between gap-4 whitespace-nowrap font-kumbh text-sm 2xl:text-lg text-gray-60">
                    <div className='flex items-center justify-between gap-8'>
                        <p className="flex items-center justify-center gap-2 py-2 px-4 rounded-[100px] bg-dark-10 border border-dark-15 cursor-pointer">
                            <FaHeart size={24} color="orange" />
                            {likeCount > 999 ? `${likeCount / 1000}k` : likeCount}
                        </p>
                        <p className="flex items-center justify-center gap-2 py-2 px-4 rounded-[100px] bg-dark-10 border border-dark-15 cursor-pointer">
                            <FaRegComment size={24} />
                            {commentCount > 999 ? `${commentCount / 1000}k` : commentCount}
                        </p>
                    </div>
                    <Link to={link} className='py-4 px-6 rounded-xl border border-dark-15 bg-dark-8 font-inter text-lg text-gray-60 hover:bg-dark-10'>
                        Read More
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default FirstNews