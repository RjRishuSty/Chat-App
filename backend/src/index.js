import express from 'express';
import dotenv from 'dotenv';
import cookieparser from 'cookie-parser';
import connectDB from './lib/db.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieparser());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to home page' });
})

app.use("/api", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:8081`);
    connectDB();
})