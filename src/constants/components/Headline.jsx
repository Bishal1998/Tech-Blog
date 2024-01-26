import React from 'react'

const Headline = ({ title, subtitle, desc }) => {
    return (
        <section className='w-full max-w-screen-2xl px-6 py-6 lg:px-20 lg:py-16'>
            <p className='text-white text-[55px] font-kumbh font-medium'>{title}</p>
            <div className='flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4 xl:gap-12'>
                <p className='text-white text-[55px] font-kumbh font-medium'>{subtitle}</p>
                <p className='font-inter text-gray-60 text-base'>{desc}</p>
            </div>
        </section>
    )
}

export default Headline