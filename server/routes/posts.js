import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js'
// import { getPosts, createPost } from '../controllers/posts.js'

const router = express.Router();

router.get('/', getPosts);
router.get('/', createPost);


// router.get('/', createPosts);

export default router;