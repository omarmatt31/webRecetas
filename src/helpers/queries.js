const urlRecetas = import.meta.env.VITE_API_RECETAS
const urlUsuarios = import.meta.env.VITE_API_USUARIOS
//get, post, put, delete


export const leerRecetas = async()=>{
    try{
        const respuesta = await fetch(urlRecetas)
        return respuesta
    }catch(error){
        console.error(error);
        return null
    }
}

export const obtenerRecetasPorId = async(id)=>{
    try{
        const respuesta = await fetch(urlRecetas+`/${id}`)
        return respuesta
    }catch(error){
        console.error(error);
        return null
    }
}

export const crearReceta = async(recetaNueva)=>{
    try{
        const respuesta = await fetch(urlRecetas, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recetaNueva)
        })
        return respuesta
    }catch(error){
        console.error(error);
        return null
    }
}

export const editarReceta = async(recetaEditada, id)=>{
    try{
        const respuesta = await fetch(urlRecetas+`/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recetaEditada)
        })
        return respuesta
    }catch(error){
        console.error(error);
        return null
    }
}

export const borrarRecetaPorId = async(id)=>{
    try{
        const respuesta = await fetch(urlRecetas+`/${id}`, {
            method: 'DELETE',
        })
        return respuesta
    }catch(error){
        console.error(error);
        return null
    }
}

export const leerUsuarios = async()=>{
    try{
        const respuesta = await fetch(urlUsuarios)
        return respuesta
    }catch(error){
        console.error(error);
        return null
    }
}

export const obtenerUsuarioPorId = async(id)=>{
    try{
        const respuesta = await fetch(urlUsuarios+`/${id}`)
        return respuesta
    }catch(error){
        console.error(error);
        return null
    }
}

export const crearUsuario = async(usuarioNuevo)=>{
    try{
        const respuesta = await fetch(urlUsuarios, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuarioNuevo)
        })
        return respuesta
    }catch(error){
        console.error(error);
        return null
    }
}

export const editarUsuario = async(usuarioEditado, id)=>{
    try{
        const respuesta = await fetch(urlUsuarios+`/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuarioEditado)
        })
        return respuesta
    }catch(error){
        console.error(error);
        return null
    }
}

export const borrarUsuarioPorId = async(id)=>{
    try{
        const respuesta = await fetch(urlUsuarios+`/${id}`, {
            method: 'DELETE',
        })
        return respuesta
    }catch(error){
        console.error(error);
        return null
    }
}