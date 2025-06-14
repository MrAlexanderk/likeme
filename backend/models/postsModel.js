import pool from "../db/config.js";

export const getAllPosts = async () => {
    const result = await pool.query("SELECT * FROM posts ORDER BY id DESC");
    return result.rows;
};

export const insertPost = async ({ title, img, description }) => {
    const result = await pool.query(
        "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *",
        [title, img, description]
    );
    return result.rows[0];
};

export const addLikeToPost = async (id) => {
    try {
        const result = await pool.query(
            "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *",
            [id]
        );
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

export const deletePost = async (id) => {
    try {
        const result = await pool.query("DELETE FROM posts WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};