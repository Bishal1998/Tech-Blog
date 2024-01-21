import React from 'react'
import { Features, Title } from '../constants/components'
import { futureBlog, researchBlogs } from '../constants/data'

const futureBlogLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M54 54C64.6731 51.4308 72 46.1265 72 40C72 33.8735 64.6731 28.5692 54 26C55.098 30.2126 55.716 34.9676 55.716 40C55.716 45.0324 55.098 49.7874 54 54Z" fill="#404040" />
        <path d="M26 54C15.3269 51.4308 8 46.1265 8 40C8 33.8735 15.3269 28.5692 26 26C24.902 30.2126 24.284 34.9676 24.284 40C24.284 45.0324 24.902 49.7874 26 54Z" fill="#404040" />
        <path d="M26 54C28.5692 64.6731 33.8735 72 40 72C46.1265 72 51.4308 64.6731 54 54C49.7874 55.098 45.0324 55.716 40 55.716C34.9676 55.716 30.2126 55.098 26 54Z" fill="#FFD11A" />
        <path d="M26 26C28.5692 15.3269 33.8735 8 40 8C46.1265 8 51.4308 15.3269 54 26C49.7874 24.902 45.0324 24.284 40 24.284C34.9676 24.284 30.2126 24.902 26 26Z" fill="#FFD11A" />
    </svg>
)
const researchBlogLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="61" viewBox="0 0 70 61" fill="none">
        <path d="M16.0952 41.9509V60.5H53.2319V41.9509H16.0952Z" fill="#FFD11A" />
        <path d="M53.2241 41.9349L69.2876 32.6604L50.7193 0.500048L34.6558 9.77458L53.2241 41.9349Z" fill="#404040" />
        <path d="M34.6319 9.79968L18.5684 0.525146L2.67029e-05 32.6855L16.0635 41.96L34.6319 9.79968Z" fill="#404040" />
    </svg>
)


const Blog = () => {
    return (
        <section>
            <Title title='Unlock the Power of' desc='FutureTech Features' />
            <Features logo={futureBlogLogo} title='Future Technology Blog' desc='Stay informed with our blog section dedicated to future technology.' dataItems={futureBlog} />
            <Features logo={researchBlogLogo} title='Research Insights Blogs' desc='Dive deep into future technology concepts with our research section.' dataItems={researchBlogs} />
        </section>
    )
}

export default Blog