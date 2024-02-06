import React from "react";
import { Link } from "react-router-dom";

const SingleComment = ({ currentUser }) => {
  return (
    <article className="w-full md:w-2/3 lg:w-1/2 2xl:w-1/3 mx-auto flex gap-8 justify-center items-center border-b border-dark-15 pb-8">
      <img
        src={currentUser.profilePicture}
        alt={currentUser.username}
        className="w-10 h-10 object-cover rounded-full"
      />
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4 flex-wrap">
          <Link
            to={`/dashboard?tab=profile`}
            className="font-kumbh font-medium text-gray-60"
          >
            @{currentUser.username}
          </Link>
          <p className="font-inter text-dark-30 font-medium">a month ago</p>
        </div>
        <p className="font-inter text-base text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore ut
          praesentium atque, corrupti asperiores laborum quos cupiditate minima
          nam magnam omnis nostrum? Repellat saepe dolor error sint enim
          doloremque facilis!
        </p>
      </div>
    </article>
  );
};

export default SingleComment;
