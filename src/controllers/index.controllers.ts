import {Request, Response} from 'express'
import { connect } from '../database'
import {Post} from '../interface/index.interface'


export const getPosts = async (req: Request, res: Response)=>{
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM posts');
    return res.json(posts[0]);
}

export const getPostsId = async (req: Request, res: Response) =>{
    const id = req.params.id;
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM posts WHERE id = ?', [id]);
    return res.json(posts[0]);
}

export const createPost = async (req: Request, res: Response) =>{
    const newPost: Post = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO posts SET ?', [newPost]);
    return res.json({
        message: 'Post Created'
    });
}

export const deletePost = async (req: Request, res: Response) =>{
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM posts WHERE id = ?', [id]);
    return res.json({
        message: "Post deleted"
    });
}

export const updatePost = async (req: Request, res: Response) => {
    const id = req.params.id;
    const update: Post = req.body;
    const conn = await connect();
    await conn.query('UPDATE posts set ? WHERE id = ?', [update, id]);
    return res.json({
        message: "Post updated"
    });
}
