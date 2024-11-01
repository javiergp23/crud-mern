import mongoose from "mongoose";
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    telefono: {
        type: Number,
        required: true,
    }
    },
    {collection: "blogs"}
);

export default mongoose.model("BlogModels", blogSchema);