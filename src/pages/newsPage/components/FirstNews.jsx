import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCommentCount } from "../../../Custom";

const FirstNews = () => {
  const [post, setPost] = useState({});
  const [author, setAuthor] = useState({});
  const [loading, setLoading] = useState(true);
  const maxLength = 150;
  const commentCount = useCommentCount(post._id);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`/api/post/getPosts`);
        setPost(res.data.posts[0]);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const {
    title,
    category,
    content,
    updatedAt,
    image,
    slug,
    userId,
    likesCount,
  } = post;
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/api/user/${userId}`);
        if (res.status === 200) {
          setAuthor(res.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUser();
  }, [userId]);
  const desc =
    content?.length > maxLength
      ? content.substring(0, maxLength) + "...."
      : content;

  if (loading)
    return (
      <p className="font-kumbh text-gray-60 text-2xl font-medium text-center">
        Loading....
      </p>
    );

  return (
    <article className="w-full px-6 py-6 lg:px-20 lg:py-16 border-b border-t border-dark-15 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-12">
      <img
        src={image}
        alt=""
        className="w-full xl:w-[515px] h-[325px] object-cover rounded-xl"
      />
      <div className="font-inter">
        <p className="text-white text-2xl font-semibold pb-4">{title}</p>
        <div className="text-gray-60">
          <div dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
        <div className="text-base flex gap-8 py-8">
          <div>
            <p className="text-gray-60">Category</p>
            <p className="text-white capitalize">{category}</p>
          </div>
          <div>
            <p className="text-gray-60">Publication Date</p>
            <p className="text-white">
              {new Date(updatedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
          <div>
            <p className="text-gray-60">Author</p>
            <p className="text-white capitalize">{author.username}</p>
          </div>
        </div>
        <div className="flex justify-between gap-4 whitespace-nowrap font-kumbh text-sm 2xl:text-lg text-gray-60">
          <div className="flex items-center justify-between gap-8">
            <p className="flex items-center justify-center gap-2 py-2 px-4 rounded-[100px] bg-dark-10 border border-dark-15 cursor-pointer">
              <FaHeart size={24} color="orange" />
              {likesCount > 999 ? `${likesCount / 1000}k` : likesCount}
            </p>
            <p className="flex items-center justify-center gap-2 py-2 px-4 rounded-[100px] bg-dark-10 border border-dark-15 cursor-pointer">
              <FaRegComment size={24} />
              {commentCount > 999 ? `${commentCount / 1000}k` : commentCount}
            </p>
          </div>
          <Link
            to={`/posts/${slug}`}
            className="py-4 px-6 rounded-xl border border-dark-15 bg-dark-8 font-inter text-lg text-gray-60 hover:bg-dark-10"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FirstNews;
