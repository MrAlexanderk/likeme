import express from "express";
import { getPosts, createPost, likePost, removePost } from "../controllers/postsController.js";

const router = express.Router();

router.get("/posts", getPosts);
router.post("/posts", createPost);
router.put("/posts/like/:id", likePost);
router.delete("/posts/:id", removePost);

export default router;
