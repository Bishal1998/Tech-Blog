import React from 'react';
import {
    FaHeart,
    FaRegHeart,
    FaRegComment,
    FaRegShareSquare,
} from "react-icons/fa";
import { useSelector } from 'react-redux';

const SingleNews = ({ image, title, content, category, userId, updatedAt }) => {
    return (
        <section>
            <div>
                <div
                    className='w-full h-full object-cover bg-gradient-180 from-[#383838] via-[#191919] to-dark-8 bg-cover relative'>
                    <img src={image} alt={title} className='w-full h-[439px] object-cover opacity-30 ' />
                    <div className='absolute left-0 right-0 bottom-4'>
                        <p className='text-center font-kumbh text-[44px] font-semibold text-white'>{title}</p>
                        <div className='text-base flex justify-center gap-8 flex-wrap'>
                            <div>
                                <p className='text-gray-60'>Category</p>
                                <p className='text-white capitalize font-medium'>{category}</p>
                            </div>
                            <div>
                                <p className='text-gray-60'>Publication Date</p>
                                <p className='text-white font-medium'>{new Date(updatedAt).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <p className='text-gray-60'>Author</p>
                                {/* <p className='text-white'>{author}</p> */}
                            </div>
                            <div>
                                <p className='text-gray-60'>Reading Time</p>
                                <p className='text-white font-medium'>{(content.length / 1000).toFixed(0)} mins</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col justify-between gap-4 w-full px-6 lg:px-20 py-6'>
                    <div className='w-2/3 mx-auto text-white font-inter custom-css' dangerouslySetInnerHTML={{ __html: content }} />
                    <div className="flex justify-center gap-4 whitespace-nowrap font-kumbh text-sm 2xl:text-lg text-gray-60">
                        <p className="flex items-center justify-center gap-2 py-[6px] px-3 rounded-[100px] bg-dark-10 border border-dark-15">
                            <FaHeart size={20} color="orange" />
                            {/* {likeCount > 999 ? `${likeCount / 1000}k` : likeCount} */}
                            10
                        </p>
                        <p className="flex items-center justify-center gap-2 py-[6px] px-3 rounded-[100px] bg-dark-10 border border-dark-15">
                            <FaRegComment size={20} />
                            {/* {commentCount > 999 ? `${commentCount / 1000}k` : commentCount} */}
                            20
                        </p>
                        <p className="flex items-center justify-center gap-2 py-[6px] px-3 rounded-[100px] bg-dark-10 border border-dark-15">
                            <FaRegShareSquare size={20} />
                            {/* {shareCount > 999 ? `${shareCount / 1000}k` : shareCount} */}
                            30
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleNews;
