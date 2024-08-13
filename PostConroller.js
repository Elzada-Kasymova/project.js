import Post from "./Post.js";

class PostController {
    async create(req, res) {
        try {
            const { author, title, content, picture } = req.body;
            const post = await Post.create({ author, title, content, picture });
            console.log(req.body);
            res.json(post);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to create post" });
        }
    }

    async getAll(req, res) {
        try {
            const posts = await Post.find();
            res.json(posts);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to fetch posts" });
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ message: 'ID not provided' });
            }
            const post = await Post.findById(id);
            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.json(post);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to fetch post" });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params; // Get ID from params
            const updateData = req.body;

            if (!id) {
                return res.status(400).json({ message: 'ID not provided' });
            }

            const updatedPost = await Post.findByIdAndUpdate(id, updateData, { new: true });
            if (!updatedPost) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.json(updatedPost);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to update post" });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ message: 'ID not provided' });
            }

            const deletedPost = await Post.findByIdAndDelete(id);
            if (!deletedPost) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.json({ message: 'Post deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to delete post" });
        }
    }
}

export default new PostController();
