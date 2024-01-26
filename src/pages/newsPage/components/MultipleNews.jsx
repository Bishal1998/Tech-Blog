import React from 'react'
import { newsItems } from '../data'
import { NewsComp } from '../../../constants/components';

const MultipleNews = () => {
    return (
        <section className='w-full px-6 py-6 lg:px-20 lg:py-16'>
            <div className='flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4'>
                {
                    newsItems.slice(0, 3).map((news) => {
                        const { id, ...item } = news;
                        return <NewsComp key={id} {...item} />
                    })
                }
            </div>
        </section>
    )
}

export default MultipleNews