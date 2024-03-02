import {useState} from 'react'
import axios from 'axios'

export const ActualizarLibro = () => {


    const [agregado, setAgregado] = useState();

    const [titulo, setTitulo] = useState();

    const [autor, setAutor] = useState();

    const [anio_publicacion, setAnio] = useState();

    const [dataForm, setDataForm] = useState({id:""});



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
    
    const idHandler = (event)=>{
      const {name, value} = event.target;
      setDataForm({...dataForm, [name]:value})
    }

    const submitHandler = async () => {

        const url = `http://localhost:4000/api/libro/${dataForm.id}`;

        event.preventDefault();

        const data = {
            titulo: titulo,
            autor: autor,
            anio_publicacion: anio_publicacion
        }

        try {
        const result = await axios.put(url, data);
        const resulData = (result).data;
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

                        <div className="form-group row">
                            <label  className="col-sm-4 col-form-label">id</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control-plaintext"
                                    name="id" placeholder="Ingrese el id del libro" onChange={idHandler}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label  className="col-sm-4 col-form-label">Titulo</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control-plaintext"
                                    name="titulo" placeholder="Ingrese el titulo" onChange={tituloHandler}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label">Autor</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control-plaintext"  name="autor" placeholder="Ingrese el autor" onChange={autorHandler} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label  className="col-sm-4 col-form-label">Año de Publicación</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control-plaintext" name="anio_publicacion"
                                    placeholder="Ingrese el ano de publicacion" onChange={anioHandler} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Actualizar</button>
                    </fieldset>
                </form>
                <div className='col-12 text-center mt-5'><h3 style={{color: "green"}}>{agregado}</h3></div>
                </div>
            </div>
    </>
  )
}
