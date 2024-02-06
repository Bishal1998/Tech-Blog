import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const SingleComment = ({ userId, content, postId, createdAt }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/api/user/${userId}`);
        if (res.status === 200) {
          setUser(res.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUser();
  }, [postId]);
  return (
    <article className="w-full md:w-2/3 lg:w-1/2 2xl:w-1/3 mx-auto flex flex-col gap-8 justify-center items-start border-b border-dark-15 px-3 pb-8">
      <div className="flex flex-wrap gap-8">
        <img
          src={user.profilePicture}
          alt={user.username}
          className="w-10 h-10 object-cover rounded-full"
        />
        <div className="flex items-center gap-4 flex-wrap">
          <Link
            to={`/dashboard?tab=profile`}
            className="font-kumbh font-medium text-gray-60"
          >
            @{user.username}
          </Link>
          <p className="font-inter text-dark-30 font-medium">
            {moment(createdAt).fromNow()}
          </p>
        </div>
      </div>
      <p className="font-inter text-base text-white">{content}</p>
    </article>
  );
};

export default SingleComment;
