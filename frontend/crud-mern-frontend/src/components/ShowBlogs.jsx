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
    
    const store = async (nombre, apellido, correo, telefono) => {
        await axios.post(URI, {nombre, apellido, correo, telefono})
        getBlogs()

    }   

    const update = async (id, nombre, apellido, correo, telefono) => {

        await axios.put(`${URI}/${id}`, {
            nombre, apellido, correo, telefono
        })
        getBlogs()
    }
    
    const deleteBlog = async (id) => {
       await axios.delete(`${URI}/${id}`)
       getBlogs()
    }

    const handleEditClick = (blog) => {
        setSelectedBlog(blog);
        setNombre('')
        setApellido('')
        setCorreo('')
        setTelefono('')
    };

    return(
        <div className='container'>
            <div className='row'>
                <div className='col contenedor'>
                    <button type="button" className="boton-agregar btn btn-primary " data-bs-toggle="modal" data-bs-target="#agregar">
                    Agregar nuevos datos
                    </button>
                    <div className="modal fade" id="agregar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <ModalCreate store={store}/>
                    </div>
                    <table className='table table-bordered tabla'>
                        <thead >
                            <tr>
                                <th className='elemento-table'>Nombre</th>
                                <th className='content elemento-table'>Apellido</th>
                                <th className='content elemento-table'>Correo Electronico</th>
                                <th className='content elemento-table'>Telefono</th>
                                <th className='elemento-table'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map ( (blog, index) => (
                                <tr key={ index }>
                                    <td className='elemento-table'> { blog.nombre } </td>
                                    <td className='elemento-table'> { blog.apellido } </td>
                                    <td className='elemento-table'> { blog.correo } </td>
                                    <td className='elemento-table'> { blog.telefono } </td>
                                    <td className='elemento-table'>
                                        <button  
                                        className='btn btn-info btn-editar' 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#actualizar"
                                        onClick={() => handleEditClick(blog)}
                                        >
                                            <i className="fas fa-edit"></i>
                                                
                                        </button>
                                        <button onClick={ ()=>deleteBlog(blog._id) } className='btn btn-danger btn-eliminar'><i className="fas fa-trash-alt"></i></button>
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