import React from 'react'
import { FilterPosts } from "../homePage/components"
import { Title } from '../homePage/constants/components'
import { MultipleNews, Videos } from './components'
import { Headline, NewsComp } from "../../constants/components"

const News = () => {
    return (
        <section>
            <Headline title="Today's Headlines: Stay" subtitle="Informed" desc="Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage." />
            <MultipleNews />
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