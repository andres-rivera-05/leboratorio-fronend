import { useEffect, useState } from 'react'
import axios from 'axios'

export const ActualizarLibro = () => {


    const [agregado, setAgregado] = useState();

    const [titulo, setTitulo] = useState('');

    const [autor, setAutor] = useState('');

    const [anio_publicacion, setAnio] = useState('');

    const [dataForm, setDataForm] = useState({ id: "" });

    const [estado, setEstado] = useState('');


    const idHandler = (event) => {
        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value })
    }


    const buscarLibroID = async () => {

        try {

            const url = `http://localhost:5000/api/libro/seleccionado/${dataForm.id}`;
            const result = await axios.get(url);
            const datos = result.data;

            setTitulo(datos[0].titulo || '')
            setAutor(datos[0].autor || '')
            setAnio(datos[0].anio_publicacion || '')
            setEstado(datos[0].estado || '')
            setAgregado("")
            
        } catch (err) {
            setAgregado("No se encontro el libro")   
            setTitulo('')
            setAutor('')
            setAnio('')
            setEstado('')     
        }

    }

    const tituloHandler = (event) => {
        const { name, value } = event.target;
        setTitulo(value);
    }

    const autorHandler = (event) => {
        const { name, value } = event.target;
        setAutor(value);
    }

    const anioHandler = (event) => {
        const { name, value } = event.target;
        setAnio(value);
    }


    const estadoHandler = () => {
        const { name, value } = event.target;
        setEstado(value);
    }


    const submitHandler = async () => {

        const url = `http://localhost:5000/api/libro/${dataForm.id}`;

        event.preventDefault();

        const data = {
            titulo: titulo,
            autor: autor,
            anio_publicacion: anio_publicacion,
            estado: estado
        }

        try {
            const result = await axios.put(url, data);
            setAgregado("Libro actualizado")
        } catch (err) {
            setAgregado("Libro no actualizado")
        }

    }


    return (
        <>
            <div className='container mt-5' >
                <div className="col-7 mx-auto">
                    <form onSubmit={submitHandler}>
                        <fieldset>
                            <legend>Actualizar Libro</legend>

                            <div className="form-group row" style={{flexWrap:'nowrap'}}>
                                <label className="col-sm-4 col-form-label">id</label>
                                <div className="col-sm-3">                          
                                    <input type="text" className="form-control-plaintext"
                                        name="id" value={dataForm.id} placeholder="Id" onChange={idHandler}
                                    />                                  
                                </div>
                                <button type="button" className="btn btn-warning w-100" onClick={buscarLibroID}>Buscar</button>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Titulo</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control-plaintext"
                                        name="titulo" value={titulo} placeholder="Ingrese el titulo" onChange={tituloHandler}
                                    />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Autor</label>
                                <div className="col-sm-8">
                                    <input type="text" value={autor} className="form-control-plaintext" name="autor" placeholder="Ingrese el autor" onChange={autorHandler} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Año de Publicación</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control-plaintext" name="anio_publicacion"
                                        value={anio_publicacion} placeholder="Ingrese el ano de publicacion" onChange={anioHandler} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Estado</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control-plaintext" name="estado"
                                        value={estado} placeholder="Ingrese el estado del libro" onChange={estadoHandler} />
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-success w-100">Actualizar</button>
                            </div>
                        </fieldset>
                    </form>
                    <div className='col-12 text-center mt-3'><h3 style={{ color: "green" }}>{agregado}</h3></div>
                </div>
            </div>
        </>
    )
}
