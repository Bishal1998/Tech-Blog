import React from 'react';
import { Testimony, Title } from "../constants/components"
import { testimonyItems } from "../constants/data"

const Testimonials = () => {
    return (
        <section>
            <Title title="What Our Readers Say" desc="Real Words from Real Readers" content="Testimonials" link="testimonials" />
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-20 gap-x-28 px-6 py-6 lg:px-20 lg:py-16'>
                {
                    testimonyItems.map((item) => {
                        const { id, ...data } = item;

                        return (
                            <Testimony key={id} {...data} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Testimonials