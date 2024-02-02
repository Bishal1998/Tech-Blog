import mongoose from "mongoose"


const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
        default: "https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    category: {
        type: String,
        default: "uncategorized"
    },
    slug: {
        type: String,
        unique: true,
        required: true
    }
}, { timestamps: true })

const Post = mongoose.model("Post", postSchema)

export default Post