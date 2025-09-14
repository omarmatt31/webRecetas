const urlRecetas = import.meta.env.VITE_API_RECETAS
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
