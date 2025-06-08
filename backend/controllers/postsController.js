import { getAllPosts, insertPost } from "../models/postsModel.js";

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
