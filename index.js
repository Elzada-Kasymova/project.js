import express from "express";
import mongoose from "mongoose";
import Post from "./Post.js";

const PORT = 5001;
const DB_URL = `mongodb+srv://user:user@project.jke9g.mongodb.net/?retryWrites=true&w=majority&appName=project`;

const app = express();
app.use(express.json());

app.post('/', async (req, res) => {
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

async function startApp() {
    try {
        await mongoose.connect(DB_URL); // No options needed
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

startApp();
