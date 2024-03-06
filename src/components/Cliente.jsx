import { useNavigate, Form, redirect } from 'react-router-dom'
import {eliminarCliente} from '../data/clientes'

export async function action({params}) {
    await eliminarCliente(params.clienteId)
    return redirect('/')
}

const Cliente = ({cliente}) => {

    //Para la nevegacion con el boton editar/eliminar
    const navigate = useNavigate()

    const {nombre, empresa, email, telefono, id} = cliente

  return (
    <>
        <tr className="border-b ">
            <td className="p-4 space-y-2">
                <p className="text-2xl text-gray-800">{nombre}</p>
                <p className="font-bold text-blue-800">{empresa}</p>
            </td>
            <td className="p-4 space-y-2">
                <p className="text-1xl text-gray-800"><span className="text-gray-800 uppercase font-bold">email: </span>{email}</p>
                <p className="font-bold text-blue-800"><span className="text-blue-800 uppercase font-bold">Tel: </span> {telefono}</p>
            </td>
            <td className="p-4 flex space-x-4 space-text-center">
                <button 
                    className="text-blue-800 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/clientes/${id}/editar`)}
                >
                    editar
                </button>
                <Form 
                    method='post'
                    action={`/clientes/${id}/eliminar`}
                    onSubmit={e => {
                        if(!confirm('Deseas eliminar el registro?')) {
                            e.preventDefault()/*para evitar la ejecucion automatica del action*/
                        }
                    }}  
                >
                    <button 
                        type='submit'
                        className="text-red-600 hover:text-red-700 uppercase font-bold text-xs">
                        eliminar
                    </button>
                </Form>
                
            </td>
        </tr>
    </>
  )
}

export default Cliente