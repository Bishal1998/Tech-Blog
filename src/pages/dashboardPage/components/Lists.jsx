import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { MdDelete, MdEditSquare } from "react-icons/md";
import { Link } from 'react-router-dom';

const Lists = () => {
    const { currentUser } = useSelector(state => state.auth)
    const [posts, setPosts] = useState([])

    useEffect(() => {

        const fetchPosts = async () => {
            try {

                const res = await axios.get(`/api/post/getPosts?userId=${currentUser._id}`);
                if (res.status === 200) {
                    setPosts(res.data.posts)
                }

            } catch (error) {
                console.log(error.message)
            }
        }

        if (currentUser.isAdmin) {
            fetchPosts()
        }

    }, [currentUser._id])

    const handlePostDelete = async (postId, userId) => {

        try {
            const res = await axios.delete(`/api/post/deletepost/${postId}/${userId}`);
            if (res.status === 200) {
                setPosts((prev) => {
                    prev.posts?.filter((post) => post._id !== postId);
                })
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            {
                currentUser.isAdmin && posts?.length > 0 ? (
                    <div className='overflow-x-auto'>
                        <table className='table-auto overflow-auto w-[98%] my-2 mx-auto bg-dark-10 rounded-xl overflow-x-scroll' cellPadding={20}>
                            <thead>
                                <tr className='text-gray-90 bg-dark-15 font-inter text-lg'>
                                    <th>Date Updated</th>
                                    <th>Featured Image</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    posts?.map((post) => {
                                        const { _id, category, content, image, slug, title, updatedAt } = post;
                                        return (
                                            <tr className='text-center mb-4 font-inter text-base text-gray-60 cursor-pointer hover:bg-dark-8' key={_id}>
                                                <td>
                                                    <Link to={`/posts/${slug}`}>
                                                        {new Date(updatedAt).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'short',
                                                            day: 'numeric'
                                                        })}
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link to={`/posts/${slug}`} >
                                                        <img src={image} alt={title} className='w-20 h-10 object-cover mx-auto bg-dark-15' />
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link to={`/posts/${slug}`} >
                                                        {title}
                                                    </Link>
                                                </td>
                                                <td className='capitalize'>
                                                    <Link to={`/posts/${slug}`} >
                                                        {category}
                                                    </Link>
                                                </td>
                                                <td>
                                                    <MdDelete size={25} color='red' className='mx-auto cursor-pointer' onClick={() => {
                                                        handlePostDelete(_id, currentUser._id);
                                                    }} />
                                                </td>
                                                <td>
                                                    <Link to={`/update-post/${_id}`}>
                                                        <MdEditSquare size={25} color='yellow' className='mx-auto cursor-pointer' />
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className='text-white text-2xl font-medium font-kumbh text-center'>
                        No posts found
                    </div>
                )
            }
        </div >
    )
}

export default Lists