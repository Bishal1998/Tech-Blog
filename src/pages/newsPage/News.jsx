import React from 'react'
import { FilterPosts } from "../homePage/components"
import { Title } from '../homePage/constants/components'
import { MultipleNews, Videos } from './components'
import { Headline, NewsComp } from "../../constants/components"
import FirstNews from './components/FirstNews'
import { newsItems } from './data'


console.log(newsItems[0])

const News = () => {
    return (
        <section>
            <Headline title="Today's Headlines: Stay" subtitle="Informed" desc="Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage." />
            <FirstNews news={newsItems[0]} />
            <MultipleNews />
            <FilterPosts />
            <Title title="Featured Videos"
                link="blogs"
                desc="Visual Insights for the Modern Viewer"
                content="Blogs" />
            <Videos />
        </section>
    )
}

export default News