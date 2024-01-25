import React from 'react'

const Input = ({ title }) => {
    return (
        title && <div className='space-y-2'>
            <p className='text-white font-inter text-lg font-medium'>{title}</p>
            <input type="text" placeholder={title} className='w-[500px] h-7 border border-dark-15 bg-dark-15 outline-none shadow-[0_0_0_4px_#191919] p-5 rounded-lg font-inter text-dark-40 text-lg' />
        </div>
    )
}

export default Input