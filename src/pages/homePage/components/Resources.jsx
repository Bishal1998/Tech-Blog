import React from 'react'
import { Resource, Title } from '../constants/components'

const Resources = () => {

    const ebooksLogo = () => {
        return <svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
            <path d="M28.5 35C28.5 26.3674 53.6449 11.001 52.4594 16.7595C49.9819 28.7935 49.9819 41.2065 52.4594 53.2405C53.6449 58.999 28.5 43.6326 28.5 35Z" fill="#FFD11A" />
            <path d="M31.5 26C31.5 34.6326 6.35514 49.999 7.54064 44.2405C10.0181 32.2065 10.0181 19.7935 7.54064 7.75952C6.35514 2.00102 31.5 17.3674 31.5 26Z" fill="#404040" />
        </svg>
    }

    const whitepaperLogo = () => {
        return <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M30 6V54L9 42V18L30 6Z" fill="#FFD11A" />
            <path d="M51 6V54L30 42V18L51 6Z" fill="#404040" />
        </svg>
    }

    return (
        <section>
            <Title title="Your Gateway to In-Depth Information" link="resources" desc="Unlock Valuable Knowledge with FutureTech's Resources" content="Resources" />
            <Resource logo={ebooksLogo}
                title="Ebooks"
                desc="Explore our collection of ebooks covering a wide spectrum of future technology topics."
                link="ebooks"
                topic="Variety of Topics"
                topicDesc="Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%)."
                img="https://images.pexels.com/photos/3761306/pexels-photo-3761306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                titleCount={100}
                titleExpertise="Ebooks are authored by renowned experts with an average of 15 years of experience" />
            <Resource logo={whitepaperLogo}
                title="Whitepapers"
                desc="Dive into comprehensive reports and analyses with our collection of whitepapers. "
                link="whitepaper"
                topic="Topics Coverage"
                topicDesc="Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%)."
                img="https://images.pexels.com/photos/1261824/pexels-photo-1261824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                titleCount={50}
                titleExpertise="Whitepapers are authored by subject matter experts with an average of 20 years of experience." />
        </section>
    )
}

export default Resources