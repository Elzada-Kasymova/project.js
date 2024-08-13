import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    picture: { type: String }
});

// Правильный экспорт модели
export default mongoose.model('Post', PostSchema);
