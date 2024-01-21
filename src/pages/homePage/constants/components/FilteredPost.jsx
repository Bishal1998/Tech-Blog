import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import {
    FaHeart,
    FaRegHeart,
    FaRegComment,
    FaRegShareSquare,
} from "react-icons/fa";

const FilteredPost = ({
    title,
    subtitle,
    likeCount,
    commentCount,
    shareCount,
    author,
    category,
    link,
    date,
    authorImg,
}) => {

    const [sortedData, setSortedData] = useState("");

    return (
        title && (
            <section className="w-full px-6 py-6 lg:px-20 lg:py-10 border-t border-b border-dark-15 flex flex-col xl:flex-row justify-start items-start xl:items-center gap-6 xl:gap-40">
                <div className="flex items-center justify-center gap-4 w-56">
                    <img
                        src={authorImg}
                        alt={author}
                        width={60}
                        height={60}
                        className="h-16 w-16 rounded-full object-cover"
                    />
                    <div className="font-inter">
                        <p className="text-lg 2xl:text-xl font-semibold text-white">
                            {author}
                        </p>
                        <p className="text-base 2xl:text-lg text-gray-60 whitespace-nowrap">
                            {category}
                        </p>
                    </div>
                </div>
                <div className="font-inter flex-1">
                    <p className="text-gray-60 text-base lg:text-lg 2xl:text-xl font-semibold">
                        {date}
                    </p>
                    <p className="text-white text-lg lg:text-[22px] 2xl:text-[26px] font-semibold pt-4">
                        {title}
                    </p>
                    <p className="text-sm lg:text-base 2xl:text-lg text-gray-60 pb-4">
                        {subtitle}
                    </p>
                    <div className="flex gap-4 whitespace-nowrap font-kumbh text-sm 2xl:text-lg text-gray-60">
                        <p className="flex items-center justify-center gap-2 py-[6px] px-3 rounded-[100px] bg-dark-10 border border-dark-15">
                            <FaHeart size={20} color="orange" />
                            {likeCount > 999 ? `${likeCount / 1000}k` : likeCount}
                        </p>
                        <p className="flex items-center justify-center gap-2 py-[6px] px-3 rounded-[100px] bg-dark-10 border border-dark-15">
                            <FaRegComment size={20} />
                            {commentCount > 999 ? `${commentCount / 1000}k` : commentCount}
                        </p>
                        <p className="flex items-center justify-center gap-2 py-[6px] px-3 rounded-[100px] bg-dark-10 border border-dark-15">
                            <FaRegShareSquare size={20} />
                            {shareCount > 999 ? `${shareCount / 1000}k` : shareCount}
                        </p>
                    </div>
                </div>
                <Link
                    to={link}
                    className="flex items-center justify-center w-full xl:w-fit gap-1 py-4 2xl:py-[18px] px-5 2xl:px-6 rounded-lg bg-dark-8 border border-dark-15 font-inter text-sm 2xl:text-lg text-gray-60 whitespace-nowrap"
                >
                    View Blog
                    <GoArrowUpRight size={20} color="yellow" />
                </Link>
            </section>
        )
    );
};

export default FilteredPost;
