import React from 'react'
import { Blog, FilterPosts, Hero, Resources } from './components'


const Home = () => {
    return (
        <div>
            <Hero />
            <Blog />
            <FilterPosts />
            <Resources />
        </div>
    )
}

export default Home