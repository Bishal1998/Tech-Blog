import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";

const stats = [
    {
        id: 1,
        title: "Resource available",
        count: 300,
    },
    {
        id: 2,
        title: "Total Downloads",
        count: "12K",
    },
    {
        id: 3,
        title: "Active Users",
        count: "10k",
    },
];

const Hero = () => {
    return (
        <section className="w-full md:px-6 lg:px-20">
            <div className="flex flex-col lg:flex-row justify-center items-center pb-10 lg:pb-0">
                <div className="w-full md:w-3/4 px-6 lg:border-r border-dark-15">
                    <div className="space-y-5 py-6 lg:pt-[130px] lg:pb-[80px]">
                        <p className="font-kumbh text-lg md:text-2xl 2xl:text-3xl font-medium text-dark-40">
                            Your Journey to Tomorrow Begins Here
                        </p>
                        <p className="font-kumbh text-3xl md:text-6xl  2xl:text-7xl font-medium text-white">
                            Explore the Frontiers of Artificial Intelligence
                        </p>
                        <p className="text-gray-50 font-inter text-sm md:text-base 2xl:text-lg ">
                            Welcome to the epicenter of AI innovation. FutureTech AI News is
                            your passport to a world where machines think, learn, and reshape
                            the future. Join us on this visionary expedition into the heart of
                            AI.
                        </p>
                    </div>
                    <div className={`flex border-t border-dark-15`}>
                        {stats.map((stat) => {
                            const { id, title, count } = stat;

                            return (
                                <div key={id} className="flex justify-around " >
                                    <div className={`font-inter ${id === 1 ? 'pl-0 py-5 pr-5  md:py-12 md:pr-24' : 'md:py-12 md:px-20 p-5'}`}>
                                        <p className="text-2xl md:text-3xl 2xl:text-[40px] font-semibold text-white py-2">
                                            {count}
                                            <span className="text-yellow-55">+</span>{" "}
                                        </p>
                                        <p className="text-sm 2xl:text-lg text-gray-60">{title}</p>
                                    </div>
                                    {id !== stats.length && <div className="w-[1px] bg-dark-15" />}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="space-y-4 px-6 pt-6 ">
                    <p className="text-white font-inter text-lg md:text-xl 2xl:text-2xl font-medium">
                        Explore 1000+ resources
                    </p>
                    <p className="font-inter text-sm md:text-base 2xl:text-lg text-gray-60">
                        Over 1,000 articles on emerging tech trends and breakthroughs.
                    </p>
                    <NavLink to='/resources' className="w-full lg:w-fit font-inter text-sm 2xl:text-lg text-gray-60 rounded-lg 2xl:rounded-xl border bg-dark-8 border-dark-15 flex justify-center items-center gap-2 py-4 px-5 2xl:py-4 2xl:px-6 ">
                        <p>Explore Resources</p>
                        <GoArrowUpRight color="yellow" size={24} />

                    </NavLink>
                </div>
            </div>
            <hr className="absolute w-full border left-0 border-dark-15 z-40" />
            <div className="px-6 lg:px-0 flex flex-col gap-12 lg:flex-row items-start lg:items-center justify-between py-10 ">
                {
                    heroItems.map((item) => {
                        const { id, logo, title, subtitle, link, desc } = item;

                        return (
                            <div key={id} className="flex flex-col items-start gap-6">
                                <div dangerouslySetInnerHTML={{ __html: logo }} />
                                <div className="w-full flex gap-5">
                                    <div className="font-inter">
                                        <p className="text-base md:text-lg 2xl:text-xl text-white font-medium">{title}</p>
                                        <p className="text-gray-50 text-sm md:text-base 2xl:text-xl ">{subtitle}</p>
                                    </div>
                                    <NavLink to={link} className="p-3 md:p-4 bg-yellow-55 rounded-full">
                                        <GoArrowUpRight size={24} />
                                    </NavLink>
                                </div>
                                <p className="font-kumbh text-sm md:text-base 2xl:text-xl text-gray-60">{desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Hero;

const heroItems = [
    {
        id: 1,
        logo: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path d="M28.9275 34.4167H21.1219V50H28.9275V34.4167Z" fill="#FFD11A"/>
                <path d="M28.9275 0H21.1219V15.5833H28.9275V0Z" fill="#FFD11A"/>
                <path d="M34.4097 21.0945V28.9001H49.993V21.0945H34.4097Z" fill="#FFD11A"/>
                <path d="M0 21.1016L0 28.9072H15.5833V21.1016H0Z" fill="#FFD11A"/>
                <path d="M34.4245 28.8769L28.9052 34.3962L39.9241 45.4151L45.4434 39.8958L34.4245 28.8769Z" fill="#404040"/>
                <path d="M10.0906 4.54558L4.57129 10.0649L15.5903 21.0839L21.1096 15.5646L10.0906 4.54558Z" fill="#404040"/>
                <path d="M28.886 15.5885L34.4053 21.1078L45.4243 10.0888L39.9049 4.56949L28.886 15.5885Z" fill="#404040"/>
                <path d="M4.55724 39.9197L10.0765 45.439L21.0955 34.4201L15.5762 28.9008L4.55724 39.9197Z" fill="#404040"/>
                </svg>`,
        title: "Latest News Update",
        subtitle: "Stay Current",
        link: "/news",
        desc: "Over 1,000 articles published monthly",
    },
    {
        id: 2,
        logo: `<svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
                <path d="M25.3335 35C25.3335 40.5228 29.8106 45 35.3335 45C40.8563 45 45.3335 40.5228 45.3335 35C45.3335 29.4772 40.8563 25 35.3335 25H25.3335V35Z" fill="#FFD11A"/>
                <path d="M25.3335 15C25.3335 9.47715 20.8563 5 15.3335 5C9.81065 5 5.3335 9.47715 5.3335 15C5.3335 20.5228 9.81065 25 15.3335 25H25.3335V15Z" fill="#FFD11A"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M35.3335 5C29.8106 5 25.3335 9.47715 25.3335 15V25H35.3335C40.8563 25 45.3335 20.5228 45.3335 15C45.3335 9.47715 40.8563 5 35.3335 5ZM40.3335 15C40.3335 17.7614 38.0949 20 35.3335 20C32.5721 20 30.3335 17.7614 30.3335 15C30.3335 12.2386 32.5721 10 35.3335 10C38.0949 10 40.3335 12.2386 40.3335 15Z" fill="#404040"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3335 45C20.8563 45 25.3335 40.5228 25.3335 35V25H15.3335C9.81065 25 5.3335 29.4772 5.3335 35C5.3335 40.5228 9.81065 45 15.3335 45ZM20.3335 35C20.3335 37.7614 18.0949 40 15.3335 40C12.5721 40 10.3335 37.7614 10.3335 35C10.3335 32.2386 12.5721 30 15.3335 30C18.0949 30 20.3335 32.2386 20.3335 35Z" fill="#404040"/>
                </svg>`,
        title: "Expert Contributors",
        subtitle: "Trusted Insights",
        link: "/",
        desc: "50+ renowned AI experts on our team",
    },
    {
        id: 3,
        logo: `<svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
            <path d="M5.66675 5H25.6667C36.7124 5 45.6667 13.9543 45.6667 25H25.6667C14.6211 25 5.66675 16.0457 5.66675 5Z" fill="#FFD11A"/>
            <path d="M5.66675 25H25.6667C36.7124 25 45.6667 33.9543 45.6667 45H25.6667C14.6211 45 5.66675 36.0457 5.66675 25Z" fill="#404040"/>
            </svg>`,
        title: "Global Readership",
        subtitle: "Worldwide Impact",
        link: "/",
        desc: "2 million monthly readers",
    },
];
