import  { useState } from 'react'

export const AgregarLibro = () => {

    const [dataForm, setDataForm ] = useState({titulo:"", autor : "", anio_publicacion: "" })


    const onChangeHandler = (event)=>{
         const { name, value } = event.target;
         setDataForm({...dataForm, [name]: value})
    }

  return (
    <>
     <div className='container mt-5' >
        <div className="col-7 mx-auto">
                <form >
                    <fieldset>
                        <legend>Agregar Libro</legend>

                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label">Titulo</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext"
                                    name="titulo" placeholder="Ingrese el titulo"
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Autor</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext"  name="autor" placeholder="Ingrese el autor" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label">Año Publicación</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" name="anio_publicacion"
                                    placeholder="Ingrese el ano de publicacion" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">ano publicacion</button>
                    </fieldset>
                </form>
                </div>
            </div>
    </>
  )
}
