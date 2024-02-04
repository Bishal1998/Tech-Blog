import React from 'react'

const Features = ({ logo: LogoComponent, title, desc, dataItems }) => {
    return (
        <section className='px-6 py-6 lg:px-20 lg:py-16 flex flex-col lg:flex-row justify-between items-start md:items-center gap-4 border-b border-dark-15'>
            <div className='w-full lg:w-1/4'>
                {LogoComponent()}
                <h2 className='text-white text-[40px] font-kumbh font-semibold'>{title}</h2>
                <p className='text-gray-60 font-inter text-lg '>{desc}</p>
            </div>
            <div className='w-full lg:w-[70%] grid lg:grid-rows-2 grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    dataItems.map((item) => {
                        const { id, title, desc } = item;
                        return <div key={id} className='rounded-xl bg-dark-10 border border-dark-15 flex flex-col gap-1 p-6 lg:p-7 lg:gap-4'>
                            <p className='font-inter text-lg lg:text-xl 2xl:text-2xl font-medium text-white'>{title}</p>
                            <p className='font-inter text-sm lg:text-base 2xl:text-lg text-gray-60'>{desc}</p>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default Features