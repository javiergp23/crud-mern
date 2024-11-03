import { useState, useEffect } from "react"

function ModalEdit({update, blog}) {
    
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
 
    useEffect(() => {
        if (blog) {
            setNombre(blog.nombre);
            setApellido(blog.apellido);
            setCorreo(blog.correo);
            setTelefono(blog.telefono);
        }
    }, [blog]);

    const handleSubmit = (e) => {
        e.preventDefault()
        update(blog._id,nombre, apellido, correo, telefono); 
        setNombre('')
        setApellido('')
        setCorreo('')
        setTelefono('')
        
    };
 
    return(
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                Editar un campo existente
                </h5>
                <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ></button>
            </div>
            <div className="modal-body">
                <div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <input
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                    </div>
                    <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    >
                    Agregar cambios
                    </button>
                </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ModalEdit;