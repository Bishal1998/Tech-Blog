import React, { useCallback, useState } from "react";
import { FilteredPost, Title } from "../constants/components";
import { filterPosts } from "../constants/data";
import { useLocation } from "react-router-dom";

const FilterPosts = () => {
  const [selected, setSelected] = useState("All");

  const { pathname } = useLocation();

  return (
    <section>
      <Title
        title={pathname === "/" ? "A Knowledge Treasure Trove" : pathname === "/blogs" ? "Welcome to Our News Hub" : null}
        link={pathname === "/" ? "blogs" : pathname === "/blogs" ? "news" : null}
        desc={pathname === "/" ? "Explore FutureTech's In-Depth Blog Posts" : pathname === "/blogs" ? "Discover the World of Headlines" : null}
        content={pathname === "/" ? "Blogs" : pathname === "/blogs" ? "Blogs" : null}
      />
      <div className="w-full px-6 py-6 lg:px-20 lg:py-16 flex justify-between gap-4 overflow-x-scroll xl:overflow-hidden">
        <p
          className={`lg:py-6 lg:px-5 2xl:py-[30px] 2xl:px-6 py-[18px] px-4 rounded-[7px] border font-inter text-sm 2xl:text-lg text-gray-60 cursor-pointer border-dark-15 ${selected === "All" ? "bg-dark-10" : "bg-dark-15"
            } w-48 flex justify-center items-center h-20`}
          onClick={() => setSelected("All")}
        >
          All
        </p>
        {filterPosts.map((cat) => {
          const { id, category } = cat;

          return (
            <div
              key={id}
              className={`lg:py-6 lg:px-5 2xl:py-[30px] 2xl:px-6 py-[18px] px-4 rounded-[7px] border border-dark-15 ${selected === category ? "bg-dark-10" : "bg-dark-15"
                } font-inter text-sm 2xl:text-lg text-gray-60 cursor-pointer flex justify-center items-center w-60 h-20 whitespace-nowrap`}
              onClick={() => setSelected(category)}
            >
              <p>{category}</p>
            </div>
          );
        })}
      </div>
      {filterPosts
        .filter((post) => post.category === selected)
        .map((post) => {
          const { id } = post;

          return <FilteredPost key={id} {...post} />;
        })}
      {selected === "All" &&
        filterPosts.map((post) => {
          const { id } = post;
          return <FilteredPost key={id} {...post} />;
        })}
    </section>
  );
};

export default FilterPosts;
