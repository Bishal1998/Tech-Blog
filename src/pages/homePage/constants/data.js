const futureBlog = [
    {
        id: 1,
        title: 'Quantity',
        desc: 'Over 1,000 articles on emerging tech trends and breakthroughs.'
    },
    {
        id: 2,
        title: 'Variety',
        desc: 'Articles cover fields like AI, robotics, biotechnology, and more.'
    },
    {
        id: 3,
        title: 'Frequency',
        desc: 'Fresh content added daily to keep you up to date.'
    },
    {
        id: 4,
        title: 'Authoritative',
        desc: 'Written by our team of tech experts and industry professionals.'
    },
]

const researchBlogs = [
    {
        id: 1,
        title: 'Depth',
        desc: '500+ research articles for in-depth understanding.'
    },
    {
        id: 2,
        title: 'Graphics',
        desc: 'Visual aids and infographics to enhance comprehension.'
    },
    {
        id: 3,
        title: 'Trends',
        desc: 'Explore emerging trends in future technology research.'
    },
    {
        id: 4,
        title: 'Contributors',
        desc: 'Contributions from tech researchers and academics.'
    },
]

const filterPosts = [
    {
        id: 1,
        title: 'The Quantum Leap in Computing',
        subtitle: 'Explore the revolution in quantum computing, its applications, and its potential impact on various industries.',
        likeCount: 24500,
        commentCount: 50,
        shareCount: 20,
        author: 'John Techson',
        category: 'Quantum Computing',
        link: '/',
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        authorImg: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 2,
        title: 'The Ethical Dilemmas of AI',
        subtitle: 'A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.',
        likeCount: 32000,
        commentCount: 72,
        shareCount: 18,
        author: 'Sarah Ethicist',
        category: 'AI Ethics',
        link: '/',
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        authorImg: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 3,
        title: 'The Mars Colonization Challenge',
        subtitle: 'Exploring the technical and logistical challenges of human colonization on Mars.',
        likeCount: 20000,
        commentCount: 31,
        shareCount: 12,
        author: 'Astronomer X',
        category: 'Space Exploration',
        link: '/',
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        authorImg: 'https://images.pexels.com/photos/997489/pexels-photo-997489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 4,
        title: 'The Quantum Leap in Computing',
        subtitle: 'Explore the revolution in quantum computing, its applications, and its potential impact on various industries.',
        likeCount: 24500,
        commentCount: 50,
        shareCount: 20,
        author: 'Alastair Cook',
        category: 'Biotechnology',
        link: '/',
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        authorImg: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 5,
        title: 'The Quantum Leap in Computing',
        subtitle: 'Explore the revolution in quantum computing, its applications, and its potential impact on various industries.',
        likeCount: 24500,
        commentCount: 50,
        shareCount: 20,
        author: 'David Miller',
        category: 'Renewable Energy',
        link: '/',
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        authorImg: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
]

const testimonyItems = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Sarah Thompson",
        add: "San Francisco, USA",
        rataing: "5",
        content: "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated."
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Raj Patel",
        add: "Mumbai, India",
        rataing: "5",
        content: "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis."
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/2616951/pexels-photo-2616951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Emily Adams",
        add: "London, UK",
        rataing: "5",
        content: "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care."
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Alan Jackson",
        add: "Houston, USA",
        rataing: "5",
        content: "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view."
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/2804977/pexels-photo-2804977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Jessica Miller",
        add: "Boston, USA",
        rataing: "5",
        content: "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics."
    },
    {
        id: 6,
        img: "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Diego Lopez",
        add: "Barcelona, Spain",
        rataing: "5",
        content: "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability."
    },
]

export { futureBlog, researchBlogs, filterPosts, testimonyItems }