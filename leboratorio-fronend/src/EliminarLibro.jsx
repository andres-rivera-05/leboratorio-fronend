import {useState} from 'react'
import axios from 'axios'

export const EliminarLibro = () => {

    const [agregado, setAgregado] = useState();

    const [dataForm, setDataForm] = useState({id:""});

    const idHandler = (event)=>{
        const {name, value} = event.target;
        setDataForm({...dataForm, [name]:value})
      }
  

      const submitHandler = async () => {
        event.preventDefault();
        const url = `http://localhost:5000/api/libro/${dataForm.id}`;

        try {
        const result = await axios.delete(url);
        const resulData = (result).data;
         setAgregado("Libro eliminado")
        } catch (err) {
        setAgregado("Libro no eliminado")
        }

    }

  return (
    <>
    <div className='container mt-5' >
      <div className="col-7 mx-auto">
              <form onSubmit={submitHandler}>
                  <fieldset>
                      <legend>Eliminar Libro</legend>

                      <div className="form-group row">
                          <label  className="col-sm-4 col-form-label">id</label>
                          <div className="col-sm-8">
                              <input type="text" className="form-control-plaintext"
                                  name="id" placeholder="Ingrese el id del libro" onChange={idHandler}
                              />
                          </div>
                      </div>

                      <button type="submit" className="btn btn-primary w-100">Eliminar</button>
                  </fieldset>
              </form>
              <div className='col-12 text-center mt-5'><h3 style={{color: "green"}}>{agregado}</h3></div>
              </div>
          </div>
  </>
  )
}
