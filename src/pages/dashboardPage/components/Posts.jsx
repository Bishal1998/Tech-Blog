import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { MdDelete, MdEditSquare } from "react-icons/md";
import { Link } from 'react-router-dom';

const Posts = () => {
    const { currentUser } = useSelector(state => state.auth)
    const [posts, setPosts] = useState([])

    useEffect(() => {

        const fetchPosts = async () => {
            try {

                const res = await axios.get(`/api/post/getPosts?userId=${currentUser._id}`);
                if (res.status === 200) {
                    setPosts(res.data)
                }

            } catch (error) {
                console.log(error.message)
            }
        }

        if (currentUser.isAdmin) {
            fetchPosts()
        }

    }, [currentUser._id])

    return (
        <div>
            {
                currentUser.isAdmin && posts.posts?.length > 0 ? (
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
                                    posts.posts?.map((post) => {
                                        const { _id, category, content, image, slug, title, updatedAt } = post;
                                        return (

                                            <tr className='text-center mb-4 font-inter text-base text-gray-60 l' key={_id}>
                                                <td>{new Date(updatedAt).toLocaleDateString()}</td>
                                                <td>
                                                    <Link to={`/post/${slug}`} >
                                                        <img src={image} alt={title} className='w-20 h-10 object-cover mx-auto bg-dark-15' />
                                                    </Link>
                                                </td>
                                                <td>{title}</td>
                                                <td className='capitalize'>{category}</td>
                                                {/* flex justify-center items-center  */}
                                                <td>
                                                    <MdDelete size={25} color='red' className='mx-auto cursor-pointer' />
                                                </td>
                                                <td>
                                                    <MdEditSquare size={25} color='yellow' className='mx-auto cursor-pointer' />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div>
                        No posts found
                    </div>
                )
            }
        </div >
    )
}

export default Posts