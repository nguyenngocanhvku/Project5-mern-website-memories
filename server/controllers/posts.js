import PostMessage from '../models/postMessage.js';

// // because here we dont export default so when we want to use, try to import { getPosts} form './'
export const getPosts = async (req, res) => {
    try {
        const postMessage = await  PostMessage.find();

        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    // res.send('POST Creation');
    const bod = req.body; //later before we make the form

    const newPost = new PostManager(post); 

    try {
        await newPost.save(); //1 save

        res.status(201).json(newPost); // 2. send json to server
    } catch (error) {
        res.status(409).json({message: error.message});
    
    }
} 


