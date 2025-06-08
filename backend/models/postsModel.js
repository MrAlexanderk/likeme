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
