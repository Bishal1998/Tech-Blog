import { FaXTwitter, FaMedium, FaLinkedin } from "react-icons/fa6";

const navItems = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "News",
        link: "/news",
    },
    {
        id: 3,
        title: "Podcasts",
        link: "/podcasts",
    },
    {
        id: 4,
        title: "Resources",
        link: "/resources",
    },
]

const homeFooter = [
    {
        id: 1,
        title: "Features",
        link: "/",
        isNew: false
    },
    {
        id: 2,
        title: "Blogs",
        link: "/",
        isNew: false
    },
    {
        id: 3,
        title: "Resources",
        link: "/",
        isNew: true
    },
    {
        id: 4,
        title: "Testimonials",
        link: "/",
        isNew: false
    },
    {
        id: 5,
        title: "Contact Us",
        link: "/contact",
        isNew: false
    },
    {
        id: 6,
        title: "Newsletter",
        link: "/",
        isNew: false
    },
]

const newsFooter = [
    {
        id: 1,
        title: "Trending Stories",
        link: "/",
        isNew: false
    },
    {
        id: 2,
        title: "Featured Videos",
        link: "/",
        isNew: false
    },
    {
        id: 3,
        title: "Technology",
        link: "/",
        isNew: false
    },
    {
        id: 4,
        title: "Health",
        link: "/",
        isNew: false
    },
    {
        id: 5,
        title: "Politics",
        link: "/",
        isNew: false
    },
    {
        id: 6,
        title: "Environment",
        link: "/",
        isNew: false
    },

]

const blogFooter = [
    {
        id: 1,
        title: "Quantum Computing",
        link: "/",
        isNew: false
    },
    {
        id: 2,
        title: "AI Ethics",
        link: "/",
        isNew: false
    },
    {
        id: 3,
        title: "Space Exploration",
        link: "/",
        isNew: false
    },
    {
        id: 4,
        title: "Biotechnology",
        link: "/",
        isNew: true
    },
    {
        id: 5,
        title: "Renewable Energy",
        link: "/",
        isNew: false
    },
    {
        id: 6,
        title: "Biohacking",
        link: "/",
        isNew: false
    },
]

const podcastFooter = [
    {
        id: 1,
        title: "AI Revolution",
        link: "/",
        isNew: false
    },
    {
        id: 2,
        title: "AI Revolution",
        link: "/",
        isNew: true
    },
    {
        id: 3,
        title: "TechTalk AI",
        link: "/",
        isNew: false
    },
    {
        id: 4,
        title: "AI Conversations",
        link: "/",
        isNew: false
    },
]

const resourceFooter = [
    {
        id: 1,
        title: "Whitepapers",
        link: "/",
    },
    {
        id: 2,
        title: "Ebooks",
        link: "/",
    },
    {
        id: 3,
        title: "Reports",
        link: "/",
    },
    {
        id: 4,
        title: "Research Papers",
        link: "/",
    },
]

const socialIcons = [
    {
        id: 1,
        icon: "<FaXTwitter />",
        link: '/',
    },
    {
        id: 2,
        icon: "<FaMedium />",
        link: '/',
    },
    {
        id: 3,
        icon: "<FaLinkedin />",
        link: '/',
    },

]
export { navItems, homeFooter, newsFooter, blogFooter, podcastFooter, resourceFooter, socialIcons }