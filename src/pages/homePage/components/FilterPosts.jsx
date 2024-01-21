import React, { useCallback, useState } from 'react'
import { Title } from '../constants/components'
import { filterPosts } from '../constants/data';

const FilterPosts = () => {

    const [selected, setSelected] = useState("All");

    console.log(selected)
    return (
        <section>
            <Title title='A Knowledge Treasure Trove' link='blogs' desc="Explore FutureTech' s In-Depth Blog Posts" content='Blogs' />
            <div className='w-full px-6 py-6 lg:px-20 lg:py-16 flex justify-between'>
                <p className='py-6 px-5 rounded-[7px] border border-dark-15 font-inter text-sm text-gray-60 cursor-pointer bg-dark-10 w-[15%] flex justify-center items-center' onClick={() => setSelected("All")} >All</p>
                {
                    filterPosts.map((cat) => {
                        const { id, category } = cat;

                        return (
                            <div key={id} className='py-6 px-5 rounded-[7px] border border-dark-15 font-inter text-sm text-gray-60 cursor-pointer flex justify-center items-center w-[15%]' onClick={() => setSelected(category)}>
                                <p>{category}</p>
                            </div>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default FilterPosts