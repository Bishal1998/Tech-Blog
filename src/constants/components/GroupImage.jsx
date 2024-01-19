import React from 'react'
import { groupImages } from '../data'

const GroupImage = () => {
    return (
        <section className='flex justify-center items-center border border-dark-15 bg-dark-10 rounded-[100px] p-3'>
            {
                groupImages.map((item) => {
                    const { id, image } = item;

                    return (
                        <div key={id} className={`rounded-[42px] object-cover border-2 border-dark-40 bg-dark-15 overflow-hidden h-14 w-14 ${id !== 1 ? `relative right-${id}` : ""} `}>
                            <img src={image} alt="List of People" className='right-4' />
                        </div>
                    )
                })
            }
        </section>
    )
}

export default GroupImage