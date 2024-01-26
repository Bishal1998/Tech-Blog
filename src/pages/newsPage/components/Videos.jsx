import React from 'react'
import { featuredVideos } from '../data'
import Video from './Video';

const Videos = () => {
    return (
        <section className='w-full px-6 py-6 lg:px-20 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-16'>
            {
                featuredVideos.map((item) => {
                    const { id, ...data } = item;

                    return <Video key={id} {...data} />
                })
            }
        </section>
    )
}

export default Videos