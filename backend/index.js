import express from "express";
import cors from "cors";
import postsRoutes from "./routes/postsRoutes.js";
import 'dotenv/config';

const {PORT} = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.use(postsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
