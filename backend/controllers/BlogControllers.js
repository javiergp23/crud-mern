import BlogModels from "../models/BlogModels.js";

export const getAllBlogs = async (req, res) => {
    try{
        const blogs = await BlogModels.find();
        res.status(200).json(blogs);
    }catch(error){
        res.json({message: error.message})
    }
}

export const getBlog = async (req, res) => {
    try{
        const blog = await BlogModels.findById(req.params.id);
        res.json(blog);
    }catch(error){
        res.json({message: error.message})
    }
}

export const createBlog = async (req, res) => {
    try{
        const blog = await BlogModels.create(req.body);
        res.json(blog);
    }catch(error){
        res.json({message: error.message})
    }
}

export const updateBlog = async (req, res) => {
    try{
        const blog = await BlogModels.findByIdAndUpdate(req.params.id, req.body);
        res.json(blog);
    }catch(error){
        res.json({message: error.message})
    }
}

export const deleteBlog = async (req, res) => {
    try{
        const blog = await BlogModels.findByIdAndDelete(req.params.id);
        res.json(blog);
    }catch(error){
        res.json({message: error.message})
    }
}