import React from 'react'
import { Blog, FilterPosts, Hero } from './components'


const Home = () => {
    return (
        <div>
            <Hero />
            <Blog />
            <FilterPosts />
        </div>
    )
}

export default Home