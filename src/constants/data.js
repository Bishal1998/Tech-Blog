import { FaXTwitter, FaMedium, FaLinkedin } from "react-icons/fa6";

const navItems = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "Blogs",
        link: "/blogs",
    },
    {
        id: 3,
        title: "Contact Us",
        link: "/contact",
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
        icon: FaXTwitter,
        link: '/',
    },
    {
        id: 2,
        icon: FaMedium,
        link: '/',
    },
    {
        id: 3,
        icon: FaLinkedin,
        link: '/',
    },

]

const groupImages = [
    {
        id: 1,
        image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 3,
        image: "https://images.pexels.com/photos/2121541/pexels-photo-2121541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 4,
        image: "https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
]
export { navItems, homeFooter, newsFooter, blogFooter, podcastFooter, resourceFooter, socialIcons, groupImages }