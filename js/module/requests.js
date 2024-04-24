//7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.
export const getAllStates = async () =>{
    let res = await fetch("http://localhost:5508/requests?status")
    let data = await res.json();
    const dataUpdate = data.reduce(function (status, client){
        return Array.from(new Set([...status, client.status]))
    }, [])
    return dataUpdate;
}

//8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos.
export const getAll = async () =>{
    let res = await fetch("http://localhost:5508/requests?date_request")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            pedido: val.date_request
        })
    })
    return dataUpdate;
}