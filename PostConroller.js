import PostService from "./PostService.js"
class PostController {


    async create(req, res) {
        try { 
            const post = await PostService.create(req.body, req.files.picture);
            res.json(post);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to create post" });
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            res.json(posts);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to fetch posts" });
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id);
            res.json(post);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to fetch post" });
        }
    }

    async update(req, res) {
        try {
            const post = await PostService.update(req.body);
            return res.json(Updatepost);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to create post" });
        }
    }

    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id);
            return res.json(post);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to fetch post" });
        }
    }

}
export default new PostController();
