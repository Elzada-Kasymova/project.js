import { Router } from "express";
import Post from "./Post.js";

const router = new Router();

router.post('/posts', async (req, res) => {
    try {
        const { author, title, content, picture } = req.body;
        const post = await Post.create({ author, title, content, picture });
        console.log(req.body);
        res.json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create post" });
    }
});

// Здесь нужно добавить логику для остальных маршрутов, если она есть

export default router; // Правильный синтаксис экспорта по умолчанию
