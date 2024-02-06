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

export { useCommentCount }