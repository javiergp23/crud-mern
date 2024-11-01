import { useState } from "react"

function ModalCreate({store}) {
    
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        store(nombre, apellido, correo, telefono); 
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
                Agrega un nuevo campo
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
                    Agregar
                    </button>
                </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ModalCreate;
