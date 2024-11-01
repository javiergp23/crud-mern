import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/blogs'


const CompShowBlogs = () => {
    
    const [blogs, setBlog] = useState([])
    const [create, setCreate] = useState([])
    
    useEffect( ()=>{
        getBlogs()
    },[])

    //procedimineto para mostrar todos los blogs
    const getBlogs = async () => {
        try{
        const res = await axios.get(URI)
        setBlog(res.data)
        // console.log(res.data)
        }catch(error){
            console.log(error.message)
        }
    }

    //procedimineto para eliminar un blog
    const deleteBlog = async (id) => {
       await axios.delete(`${URI}/${id}`)
       getBlogs()
    }


//Funciones de CreateBlog
const [title, setTitle] = useState('')
const [content, setContent] = useState('')
// const navigate = useNavigate()    



//procedimiento guardar
const store = async (e) => {
    e.preventDefault()
    await axios.post(URI, {title, content})
    setTitle('')
    setContent('')
    // navigate('/')
    getBlogs()

}   

/*const getCreateBlog = async () => {
    try{
        const res = await axios.get(URI)
        setCreate(res.data)
    // console.log(res.data)
    }catch(error){
        console.log(error.message)
    }
}*/

/*const handleClick = async () => {
    await getBlogs();
}*/

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>





              
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Agregar nuevos datos
                    </button>

                    
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Agrega un nuevo campo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <div>
                            <form onSubmit={store}>
                                    <div className='mb-3'>
                                        <label className='form-label'>Title</label>
                                        <input
                                            value={title}
                                            onChange={ (e)=> setTitle(e.target.value)} 
                                            type="text"
                                            className='form-control'
                                        />
                                    </div>   
                                    <div className='mb-3'>
                                        <label className='form-label'>Content</label>
                                        <textarea
                                            value={content}
                                            onChange={ (e)=> setContent(e.target.value)} 
                                            type="text"
                                            className='form-control'
                                        />                 
                                    </div>  
                                    <button type='submit' className='btn btn-primary' >Agregar</button>                  
                            </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button  type="button" className="btn btn-secondary" data-bs-dismiss="modal"> Cerrar</button>
                            {/* <button type="button" className="btn btn-primary">Agregar</button> */}
                        </div>
                        </div>
                    </div>
                    </div>



                    {/* <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link> */}
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
                                        <Link to={`/edit/${blog._id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteBlog(blog._id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowBlogs