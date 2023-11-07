import express from "express";
import taskRoutes from "./routes/taskRoutes.js";
import connnetionDB from "./config/dbConnectio.js";
import dotenv from "dotenv";
import cors from "cors"
dotenv.config();

const app = express();

const PORT = 3000

app.use(express.json());

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true
}));

app.get('/', (req, res) => {
    req.send("Hello World")
})

app.use('/api/v1/', taskRoutes)

app.listen(PORT, async () => {
    await connnetionDB();
    console.log(`Port is Listing on ${PORT}`);
})