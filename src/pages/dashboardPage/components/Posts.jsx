import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleNews from '../../singleNews/SingleNews';

const Posts = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {

                const res = await axios.get(`/api/post/getPosts?slug=${id}`);
                if (res.status === 200) {
                    setLoading(false);
                    setPost(res.data.posts[0])
                }

            } catch (error) {
                console.log(error.message)
            }
        }
        fetchPost();
    }, [id])

    if (loading) return <p className='font-kumbh text-lg text-white font-medium text-center'>Loading...</p>
    return <article className='flex flex-col w-full'>
        {post && <SingleNews {...post} />}
    </article>
}

export default Posts