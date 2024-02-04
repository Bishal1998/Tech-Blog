import React, { useEffect, useState } from 'react'
import { newsItems } from '../data'
import { NewsComp } from '../../../constants/components';
import axios from 'axios';

const MultipleNews = () => {

    const [posts, setPosts] = useState([])
    const [author, setAuthor] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {

            try {
                const res = await axios.get(`/api/post/getPosts`);
                setPosts(res.data.posts)
                setLoading(false)
            } catch (error) {
                console.log(error.message)
                setLoading(false)
            }

        }
        fetchPosts();
    }, [])

    const { title, category, content, updatedAt, image, slug, userId, } = posts;

    useEffect(() => {
        const fetchAuthor = async () => {
            try {

                const res = await axios.get(`/api/user/${userId}`)
                setAuthor(res.data)

            } catch (error) {
                console.log(error.message)
            }
        }
        fetchAuthor();
    }, [userId])

    if (loading) return <p className='font-kumbh text-gray-60 text-2xl font-medium text-center'>Loading....</p>
    return (
        <section className='w-full px-6 py-6 lg:px-20 lg:py-16'>
            <div className='flex flex-col xl:flex-row items-start justify-between gap-4'>
                {
                    posts?.slice(1, 4).map((post) => {
                        const { _id, ...item } = post;
                        return <NewsComp key={_id} {...item} />
                    })
                }
            </div>
        </section>
    )
}

export default MultipleNews