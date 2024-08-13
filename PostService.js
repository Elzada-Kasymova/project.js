import Post from "./Post.js";

class PostServise {
    async create(post) {
        try {
            const createdPost = await Post.create(post);
            return createdPost;
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to create post" });
        }
    }

    async getAll() {
        const posts = await Post.find();
        return posts;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('id не указан')
        }
        const post = await Post.findById(id);
        return post;
    }

    async update(post) {
        if (!post._id) {
            throw new Error('id не указан')
        }
            const Updatepost = await Post.findByIdAndUpdate(post._id, post, {mew:true});
            return Updatepost;
    }

    async delete(id) {
        if (!id) {
            throw new Error('id не указан')
        }
        const post = await Post.findByIdAndDelete(id);
        return post;
}
}

export default new PostServise();