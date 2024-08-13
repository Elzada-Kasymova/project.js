import express from "express";
import mongoose from "mongoose";
const PORT = 5001;
const DB_URL = `mongodb+srv://user:user@project.jke9g.mongodb.net/?retryWrites=true&w=majority&appName=project`
const app = express ()
app.use(express.json())

app.post('/',(req, res)=>{
    console.log(req.body);
    res.status(200).json('server work on port 5000')
})

async function startApp() {
    try{
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log ('SERVER START WORKING' + PORT))
    }catch(e){
        console.log(e)
    }
}

startApp()
