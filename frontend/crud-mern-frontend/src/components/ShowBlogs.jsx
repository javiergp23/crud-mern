import axios from 'axios'
import {useState, useEffect} from 'react'
import ModalEdit from '../components/ModalEdit.jsx'
import ModalCreate from '../components/ModalCreate.jsx'

const URI = 'http://localhost:8000/blogs'

const CompShowBlogs = () => {
    
    const [blogs, setBlog] = useState([])
    const [selectedBlog, setSelectedBlog] = useState(null);
 
    useEffect( ()=>{
        getBlogs()
    },[])

    const getBlogs = async () => {
        try{
        const res = await axios.get(URI)
        setBlog(res.data)
        }catch(error){
            console.log(error.message)
        }
    }
    
    const store = async (title, content) => {
        await axios.post(URI, {title, content})
        getBlogs()

    }   

    const update = async (id, title, content) => {

        await axios.put(`${URI}/${id}`, {
            title,
            content
        })
        getBlogs()
    }
    
    const deleteBlog = async (id) => {
       await axios.delete(`${URI}/${id}`)
       getBlogs()
    }

    const handleEditClick = (blog) => {
        setSelectedBlog(blog);
        setTitle('')
        setContent('') // Establecer el blog seleccionado
    };

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#agregar">
                    Agregar nuevos datos
                    </button>
                    <div className="modal fade" id="agregar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <ModalCreate store={store}/>
                    </div>
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map ( (blog, index) => (
                                <tr key={ index }>
                                    <td> { blog.title } </td>
                                    <td> { blog.content } </td>
                                    <td>
                                        <button  
                                        className='btn btn-info' 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#actualizar"
                                        onClick={() => handleEditClick(blog)}
                                        >
                                            <i className="fas fa-edit"></i>
                                                
                                        </button>
                                        <button onClick={ ()=>deleteBlog(blog._id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
            <div className="modal fade" id="actualizar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <ModalEdit update={update} blog={selectedBlog}/> 
            </div>
        </div>
    )

}

export default CompShowBlogs;