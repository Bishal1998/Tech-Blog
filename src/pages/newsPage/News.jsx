import React from 'react'
import { FilterPosts } from "../homePage/components"
import { Title } from '../homePage/constants/components'
import { Videos } from './components'

const News = () => {
    return (
        <section>
            <FilterPosts />
            <Title title="Featured Videos"
                link="news"
                desc="Visual Insights for the Modern Viewer"
                content="News" />
            <Videos />
        </section>
    )
}

export default News