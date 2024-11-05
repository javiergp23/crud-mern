import BlogModels from "../models/BlogModels.js";


//Metodos del crud

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
        const id = req.params.id;
        await BlogModels.findById({_id:id}).then((blog)=> {

            res.status(200).json(blog);
        });
    }catch(error){
        res.json({message: error.message})
    }
}

export const createBlog = async (req, res) => {
    try{
        await BlogModels.create(req.body);
        res.status(200).json({
            message: "Blog created successfully" 
        });  
    }catch(error){
        res.json({message: error.message})
    }
}

export const updateBlog = async (req, res) => {
    try{
        const id = req.params.id;
        await BlogModels.updateOne({_id:id}, req.body)
        if(!blog){
            res.status(404).json({
                message: "Blog not found"
            })
        }
        res.status(200).json({
            acknowledged: true,
            modifiedCount: 1,
            upsertedId: null,
            upsertedCount: 0,
            matchedCount: 1,
            message: "Blog updated successfully"
        });
    }catch(error){
        res.json({message: error.message}) 
    }
}

export const deleteBlog = async (req, res) => {
    try{
        const id = req.params.id;
        await BlogModels.deleteOne({_id: id}).then(res =>{
            console.log(res);
        });
        res.status(200).json({
            message: "Blog deleted successfully"
        })
    }catch(error){
        res.json({message: error.message})
    }
}