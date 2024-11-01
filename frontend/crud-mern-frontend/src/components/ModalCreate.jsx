import { useState } from "react"

function ModalCreate({store}) {
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        store(title, content); 
        
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
                    <label className="form-label">Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
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
