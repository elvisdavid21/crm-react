//Listar todos los clientes
export async function obtenerClientes() {
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()
    return resultado
}

//Editar un cliente
export async function obtenerCliente(id) {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const resultado = await respuesta.json()
    console.log(resultado)
    return resultado
}

//Crear un cliente
export async function agregarCliente(datos) {//los datos que viene de NuevoCliente
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(datos),//método estático convierte un valor de JavaScript en una cadena JSON
            headers: {//se especifica que se envia un peticion de tipo json
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()//retornara true o false
    } catch (error) {
        console.log(error)
    }
}
//Actualizar cliente
export async function actualizarCliente(id, datos) {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),//método estático convierte un valor de JavaScript en una cadena JSON
            headers: {//se especifica que se envia un peticion de tipo json
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()//retornara true o false
    } catch (error) {
        console.log(error)
    }
}

//Eliminar un cliente
export async function eliminarCliente(id) {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE'
        })
        await respuesta.json()//retornara true o false
    } catch (error) {
        console.log(error)
    }
}