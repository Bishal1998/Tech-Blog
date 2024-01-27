import React from 'react'
import { Blog, FilterPosts, Hero, Resources, Revolution, Testimonials } from './components'


const Home = () => {
    return (
        <div>
            <Hero />
            <Blog />
            <FilterPosts />
            <Resources />
            <Testimonials />
        </div>
    )
}

export default Home