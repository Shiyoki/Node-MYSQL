import { Router } from 'express'
import {getPosts, createPost, getPostsId, deletePost, updatePost} from '../controllers/index.controllers'

const router = Router();

router.get('/posts', getPosts);
router.get('/posts/:id', getPostsId);
router.post('/posts', createPost );
router.delete('/posts/:id', deletePost);
router.put('/posts/:id', updatePost);

export default router;