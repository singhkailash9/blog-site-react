import express from "express";
import Post from "../Model/post.model.js"

const router = express.Router();

// GET route for fetching posts
router.get('/', async (req, res)=>{
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// POST route for creating a new post
router.post('/', async (req, res)=>{
    try {
        const { title, description, imageURL } = req.body;
        const newPost = new Post({
            title, description, imageURL
        });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

export default router;