
const Cliente = ({cliente}) => {

    const {nombre, empresa, email, telefono} = cliente

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
                <button className="text-blue-800 hover:text-blue-700 uppercase font-bold text-xs">
                    editar
                </button>
                <button className="text-red-600 hover:text-red-700 uppercase font-bold text-xs">
                    eliminar
                </button>
            </td>
        </tr>
    </>
  )
}

export default Cliente