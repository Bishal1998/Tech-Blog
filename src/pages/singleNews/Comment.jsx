import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleComment from "./SingleComment";

const Comment = ({ postId }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const [comment, setComment] = useState({
    postId,
    userId: currentUser ? currentUser._id : "",
    content: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [comments, setComments] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (comment.length === 0) {
      setLoading(false);
      setError(true);
      return;
    }
    try {
      const res = await axios.post(`/api/comment/create`, comment);
      if (res.status === 200) {
        setLoading(false);
        setSuccess(true);
        setComment({
          postId,
          userId: currentUser._id,
          content: "",
        });
        setComments([res.data, ...comments]);
      }
    } catch (error) {
      console.log(error.message);
      console.log("form submitted error");
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get(`/api/comment/getcomment/${postId}`);
        if (res.status === 200) {
          setComments(res.data);
        }
      } catch (error) {
        console.log(error.message);
        console.log("comment not found");
      }
    };

    fetchComment();
  }, [postId]);

  return (
    <>
      <section className="w-full flex items-center justify-center py-4">
        {currentUser ? (
          <div>
            <div className="font-inter text-white flex items-center gap-4">
              Signed in as:{" "}
              <Link
                to={`/dashboard?tab=profile`}
                className="text-gray-60 flex items-center gap-2"
              >
                <img
                  src={currentUser.profilePicture}
                  alt={currentUser.username}
                  className="w-6 h-6 object-cover rounded-full"
                />
                @{currentUser.username}
              </Link>
            </div>
            <form className="w-full py-4 flex flex-col" onSubmit={handleSubmit}>
              <textarea
                name="comment"
                placeholder="Add a comment...."
                maxLength={200}
                id="comment"
                value={comment.content}
                onChange={(e) =>
                  setComment({ ...comment, content: e.target.value })
                }
                className="w-full sm:w-[500px] border border-dark-15 bg-dark-15 outline-none shadow-[0_0_0_4px_#191919] p-5 rounded-lg font-inter text-dark-40 text-lg mb-4"
              ></textarea>
              <button
                className="p-4 rounded-lg border-yellow-55 bg-yellow-55 font-inter text-sm text-dark-8 hover:bg-yellow-60 font-medium"
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting...." : "Submit"}
              </button>
            </form>
          </div>
        ) : (
          <Link to={"/login"} className="font-inter text-white">
            Login in to Comment
          </Link>
        )}
      </section>
      {comments.length > 0 && (
        <section className="space-y-8">
          {comments?.map((item) => {
            const { content, postId, userId, _id, createdAt } = item;
            return (
              <SingleComment
                key={_id}
                content={content}
                postId={postId}
                userId={userId}
                createdAt={createdAt}
              />
            );
          })}
        </section>
      )}
    </>
  );
};

export default Comment;
