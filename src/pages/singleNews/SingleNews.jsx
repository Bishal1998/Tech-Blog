import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegComment, FaRegShareSquare } from "react-icons/fa";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import { useCommentCount, useLikeCount, useShareCount } from "../../Custom";
import { useNavigate } from "react-router-dom";

import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  EmailIcon,
  EmailShareButton,
} from "react-share";

const SingleNews = ({
  image,
  title,
  content,
  category,
  userId,
  updatedAt,
  slug,
  _id: postId,
}) => {
  const { currentUser } = useSelector((state) => state.auth);
  const commentCount = Number(useCommentCount(postId));
  const likedData = useLikeCount(postId);
  const shareCount = Number(useShareCount(postId));
  const [likedUser, setLikedUser] = useState([]);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const [shareActive, setShareActive] = useState(false);
  const shareUrl = `${import.meta.env.DOMAIN}/posts/${slug}`;

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const res = await axios.get(`/api/user/${userId}`);
        if (res.status === 200) {
          setUser(res.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAuthor();
  }, [userId]);

  const handleLike = async () => {
    try {
      if (!currentUser) {
        navigate("/login");
      }
      const res = await axios.put(`/api/post/like/${postId}`);
      if (res.status === 200) {
        setLikedUser(res.data.likes);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (likedData.length > 0) {
      setLikedUser(likedData);
    }
  }, [likedData]);

  const handleShare = async () => {
    try {
      const res = await axios.put(`/api/post/share/${postId}`);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section>
      <div>
        <div className="w-full h-full object-cover bg-gradient-180 from-[#383838] via-[#191919] to-dark-8 bg-cover relative">
          <img
            src={image}
            alt={title}
            className="w-full h-[439px] object-cover opacity-30 "
          />
          <div className="absolute left-0 right-0 bottom-4">
            <p className="text-center font-kumbh text-[44px] font-semibold text-white">
              {title}
            </p>
            <div className="text-base flex justify-center gap-8 flex-wrap">
              <div>
                <p className="text-gray-60">Category</p>
                <p className="text-white capitalize font-medium">{category}</p>
              </div>
              <div>
                <p className="text-gray-60">Publication Date</p>
                <p className="text-white font-medium">
                  {new Date(updatedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-gray-60">Author</p>
                <img
                  src={user && user.profilePicture}
                  alt={user.username}
                  className="h-6 w-6 rounded-full object-cover cursor-pointer"
                  title={user.username}
                />
                {/* <p className='text-white'>{author}</p> */}
              </div>
              <div>
                <p className="text-gray-60">Reading Time</p>
                <p className="text-white font-medium">
                  {(content.length / 1000).toFixed(0)} mins
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 w-full px-6 lg:px-20 py-6">
          <div
            className="w-full lg:w-2/3 mx-auto text-white font-inter custom-css"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="flex flex-col items-center justify-center gap-4 whitespace-nowrap font-kumbh text-sm 2xl:text-lg text-gray-60">
            <div className="flex items-center justify-center gap-4">
              <p
                className="flex items-center justify-center gap-2 py-[6px] px-3 rounded-[100px] bg-dark-10 border border-dark-15 cursor-pointer"
                onClick={handleLike}
              >
                <FaHeart
                  size={20}
                  color={`${
                    currentUser && likedUser.includes(currentUser._id)
                      ? "orange"
                      : "white"
                  }`}
                />
                {likedUser.length > 999
                  ? `${likedUser.length / 1000}k`
                  : likedUser.length}
              </p>
              <p className="flex items-center justify-center gap-2 py-[6px] px-3 rounded-[100px] bg-dark-10 border border-dark-15">
                <FaRegComment size={20} />
                {commentCount > 999 ? `${commentCount / 1000}k` : commentCount}
              </p>
              <p
                className="flex items-center justify-center gap-2 py-[6px] px-3 rounded-[100px] bg-dark-10 border border-dark-15 cursor-pointer"
                onClick={() => setShareActive(!shareActive)}
              >
                <FaRegShareSquare size={20} />
                {shareCount > 999 ? `${shareCount / 1000}k` : shareCount}
              </p>
            </div>
            {shareActive && (
              <div className="flex items-center gap-4">
                <FacebookShareButton url={shareUrl} onClick={handleShare}>
                  <FacebookIcon size={35} round />
                </FacebookShareButton>
                <TwitterShareButton
                  title={title}
                  url={shareUrl}
                  onClick={handleShare}
                >
                  <TwitterIcon size={35} round />
                </TwitterShareButton>
                <WhatsappShareButton
                  title={title}
                  url={shareUrl}
                  onClick={handleShare}
                >
                  <WhatsappIcon size={35} round />
                </WhatsappShareButton>
                <EmailShareButton
                  subject={title}
                  url={shareUrl}
                  onClick={handleShare}
                >
                  <EmailIcon size={35} round />
                </EmailShareButton>
              </div>
            )}
          </div>
          <Comment postId={postId} />
        </div>
      </div>
    </section>
  );
};

export default SingleNews;
