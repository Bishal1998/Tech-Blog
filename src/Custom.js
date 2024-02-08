import axios from "axios";
import { useEffect, useState } from "react";

const useCommentCount = (postId) => {
    const [commentCount, setcommentCount] = useState(0);

    useEffect(() => {

        const fetchCommentCount = async () => {
            try {
                const res = await axios.get(`/api/comment/getcomment/${postId}`);
                if (res.status === 200) {
                    setcommentCount(res.data.length);
                }
            } catch (error) {
                console.log("Error fetching comment count:", error);
            }
        }
        fetchCommentCount();
    }, [postId])
    return commentCount
};

const useLikeCount = (postId) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchLikeCount = async () => {
            try {
                const res = await axios.get(`/api/post/like/${postId}`)
                if (res.status === 200) {
                    setData(res.data.likes)
                }
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchLikeCount();
    }, [postId])
    return data
}

const useShareCount = (postId) => {
    const [shareCount, setShareCount] = useState(0);
    useEffect(() => {

        const fetchShareCount = async () => {
            try {
                const res = await axios.get(`/api/post/share/${postId}`)
                if (res.status === 200) {
                    setShareCount(res.data.shareCount)
                }
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchShareCount();
    }, [postId])
    return shareCount
}

export { useCommentCount, useLikeCount, useShareCount }