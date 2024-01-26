import React from 'react'

const Video = ({ title, desc, video }) => {
    return (
        <article className='w-full'>
            <iframe className='rounded-xl mb-4 w-full h-80' src={video} title={title} frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <div className='font-inter'>
                <p className='text-white text-2xl font-semibold'>{title}</p>
                <p className='text-gray-60 text-lg'>{desc}</p>
            </div>
        </article>
    )
}

export default Video