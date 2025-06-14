import { getAllPosts, insertPost, addLikeToPost, deletePost } from "../models/postsModel.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await getAllPosts();
        res.json(posts);
    } catch (error) {
        console.error("Error getting posts:", error);
        res.status(500).send("Server error");
    }
};

export const createPost = async (req, res) => {
    console.log("Body recibido:", req.body);
    try {
        const { titulo, url, descripcion } = req.body;

        const newPost = await insertPost({ 
        title: titulo, 
        img: url, 
        description: descripcion 
        });
        res.status(201).json(newPost);
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).send("Error creating post");
    }
};

export const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPost = await addLikeToPost(id);
        res.json(updatedPost);
    } catch (error) {
        console.error("Error liking post:", error);
        res.status(500).send("Error liking post");
    }
};

export const removePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = await deletePost(id);
        if (deletedPost) {
            res.json({ message: "Post deleted successfully", post: deletedPost });
        } else {
            res.status(404).send("Post not found");
        }
    } catch (error) {
        console.error("Error deleting post:", error);
        res.status(500).send("Error deleting post");
    }
};