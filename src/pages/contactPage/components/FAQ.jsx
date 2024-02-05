import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { BsPlus } from "react-icons/bs";

const faqItems = [
  {
    id: 1,
    title: "What is AI?",
    desc: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
  },
  {
    id: 2,
    title: "How can I listen to your podcasts?",
    desc: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
  },
  {
    id: 3,
    title: "Are your podcasts free to listen to?",
    desc: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
  },
  {
    id: 4,
    title: "Can I download episodes to listen offline?",
    desc: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
  },
  {
    id: 5,
    title: "How often do you release new episodes?",
    desc: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
  },
];

const FAQ = () => {
  const [activeItems, setActiveItems] = useState({});
  const handleClick = (id) => {
    setActiveItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="w-full max-w-[1762px] px-6 py-6 lg:px-20 lg:py-16 border-b border-dark-15 flex flex-col xl:flex-row justify-between items-start lg:items-center gap-4">
      <div className="space-y-4 w-full xl:w-[40%]">
        <svg
          width="60"
          height="61"
          viewBox="0 0 60 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 22.9997C6 29.6555 9.94088 35.3908 15.6165 37.9997H6C6 47.1124 13.3873 54.4997 22.5 54.4997C29.1558 54.4997 34.8912 50.5588 37.5 44.8831V54.4997C46.6127 54.4997 54 47.1124 54 37.9997C54 31.3439 50.0591 25.6085 44.3835 22.9997H54C54 13.887 46.6127 6.49966 37.5 6.49966C30.8442 6.49966 25.1088 10.4405 22.5 16.1162V6.49966C13.3873 6.49966 6 13.887 6 22.9997Z"
            fill="#404040"
          />
          <path
            d="M37.5 30.4998C37.5 34.6419 34.1421 37.9998 30 37.9998C25.8579 37.9998 22.5 34.6419 22.5 30.4998C22.5 26.3577 25.8579 22.9998 30 22.9998C34.1421 22.9998 37.5 26.3577 37.5 30.4998Z"
            fill="#FFD11A"
          />
        </svg>
        <p className="font-kumbh text-[28px] font-semibold text-white">
          Asked question
        </p>
        <p className="font-inter text-base text-gray-60">
          If the question is not available on our FAQ section, Feel free to
          contact us personally, we will resolve your respective doubts.{" "}
        </p>
        <div className="flex items-center p-2 border rounded-lg border-dark-10 bg-dark-15 w-fit">
          <p className="text-gray-60 lg:text-lg">Get Directions</p>
          <div className="text-yellow-55">
            <GoArrowUpRight size={20} />
          </div>
        </div>
      </div>
      {/* Accordian */}
      <div className="w-full xl:w-auto transition-all ease-in-out duration-1000 space-y-4">
        {faqItems.map((item, i) => {
          const { id, title, desc } = item;
          const isActive = activeItems[id];
          return (
            <div
              className="p-4 bg-dark-10 rounded-xl space-y-6 w-full lg:w-[687px]"
              key={id}
            >
              <div className="flex justify-between items-center">
                <p className="font-inter font-medium text-lg text-white">
                  {title}
                </p>
                {isActive ? (
                  <LuMinus
                    size={20}
                    color="white"
                    onClick={() => handleClick(id)}
                    className="cursor-pointer"
                  />
                ) : (
                  <BsPlus
                    size={20}
                    color="yellow"
                    onClick={() => handleClick(id)}
                    className="cursor-pointer"
                  />
                )}
              </div>
              {isActive && (
                <div>
                  <hr className="border-dark-15 pb-4" />
                  <p className="font-inter text-base text-gray-50">{desc}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
