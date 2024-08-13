import express from "express";
import mongoose from "mongoose";
import router from "./router.js"; 
import fileUpload from "express-fileupload";

const PORT = 5001;
const DB_URL = `mongodb+srv://user:user@project.jke9g.mongodb.net/?retryWrites=true&w=majority&appName=project`;

const app = express();

app.use(express.json());
app.use(express.static ('static'));
app.use(fileUpload({}));
app.use('/api', router); 


async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

startApp();
