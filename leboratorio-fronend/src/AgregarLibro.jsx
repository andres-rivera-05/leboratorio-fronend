import { useState } from 'react'
import axios from 'axios'

export const AgregarLibro = () => {

    const url = "http://localhost:5000/api/libro"

    const [agregado, setAgregado] = useState("");

    const [titulo, setTitulo] = useState();

    const [autor, setAutor] = useState();

    const [anio_publicacion, setAnio] = useState();

    const [estado, setEstado] = useState();


    const tituloHandler = (event) => {
        const { name, value } = event.target;
        //esto valida si el input esta vacio
        if (event.target.value.length === 0) {
            setAgregado("");
        }
      //  console.log(event.target.value)
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
        event.preventDefault();

        const data = {
            titulo: titulo,
            autor: autor,
            anio_publicacion: anio_publicacion,
            estado: estado
        }

        try {
            if (!titulo || !autor || !anio_publicacion || !estado) {
                setAgregado("Completa los campos!")
                return;
            }
            const result = await axios.post(url, data);
            setAgregado("Libro agregado")
        } catch (err) {
            setAgregado("Libro no agregado")
        }


    }

    return (
        <>
            <div className='container mt-5' >
                <div className="col-7 mx-auto">
                    <form onSubmit={submitHandler}>
                        <fieldset>
                            <legend>Agregar Libro</legend>

                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Titulo</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control-plaintext"
                                        name="titulo" placeholder="Ingrese el titulo" onChange={tituloHandler}
                                    />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Autor</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control-plaintext" name="autor" placeholder="Ingrese el autor" onChange={autorHandler} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Año de Publicación</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control-plaintext" name="anio_publicacion"
                                        placeholder="Ingrese el ano de publicacion" onChange={anioHandler} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Estado</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control-plaintext" name="estado"
                                        placeholder="Ingrese el estado del libro" onChange={estadoHandler} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Agregar</button>
                        </fieldset>
                    </form>
                    <div className='col-12 text-center mt-5'><h3 style={{ color: "green" }}>{agregado}</h3></div>
                </div>
            </div>
        </>
    )
}
