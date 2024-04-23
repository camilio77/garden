//6. Devuelve un listado con el nombre de los todos los clientes españoles.
export const getAllSpanishClientes = async () =>{
    let res = await fetch("http://localhost:5501/clients?country=Spain")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            nombre: val.contact_name
        })
    })
    return dataUpdate;
}