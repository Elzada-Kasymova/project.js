import express from "express";
import mongoose from "mongoose";
import router from "./router.js"; // Импорт маршрутизатора

const PORT = 5001;
const DB_URL = `mongodb+srv://user:user@project.jke9g.mongodb.net/?retryWrites=true&w=majority&appName=project`;

const app = express();
app.use(express.json());
app.use('/api', router); // Используйте маршруты, предоставленные вашим роутером

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

startApp();
