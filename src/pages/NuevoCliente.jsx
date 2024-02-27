import { useNavigate, Form, useActionData } from 'react-router-dom'
import Formulario from '../components/Formulario';
import Error from '../components/Error';

export async function action({request}) {
  const dataForm = await request.formData()
  const datos = Object.fromEntries(dataForm)

  //Para validar el email: obtengo el email del formulario
  const email = dataForm.get('email')
  
  //Validacion del formulario
  const errores = []
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios')
  }

  //validacion del email con ayuda de un regex
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if(!regex.test(email)) { //test evalua el regex al pasarle el email para que cumpla con el formato especificado en el regex
    errores.push('El Email no es valido')
  }

  //Retornar datos si hay errores
  if(Object.keys(errores).length) {
    return errores
  }
  return 0;
}

const NuevoCliente = () => {

  const navigate = useNavigate();
  const errores = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900 text-center">Nuevo Cliente</h1>
      <p className="mt-3 text-2xl">Llena todos los campos para registrar un nuevo cliente</p>

      <div className="flex justify-end mt-3">
        <button 
          className="bg-blue-800 text-white font-bold uppercase px-3 py-1"
          onClick={() => navigate(-1)}
        >
          volver
        </button>
      </div>
        
      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10'>
        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}
        <Form 
          method='post'
          noValidate //elimina la validacion del formulario proveeida por html5
        >
          <Formulario/>

          <input 
            type="submit" 
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
            value='Registrar Cliente'
          />
        </Form>
      </div>
    </>
  )
}

export default NuevoCliente