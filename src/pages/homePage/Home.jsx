import React from "react";
import {
  Blog,
  FilterPosts,
  Hero,
  Resources,
  Revolution,
  Testimonials,
} from "./components";

const Home = () => {
  document.title = "Home - Tech Blog";
  return (
    <div>
      <Hero />
      <Blog />
      <FilterPosts />
      <Resources />
      <Testimonials />
    </div>
  );
};

export default Home;
