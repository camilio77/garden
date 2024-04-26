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
export const getAllDateTwoThousandEightCodeClient = async () =>{
    let res = await fetch("http://localhost:5508/requests?date_request")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        if(val.date_request[3] == "8"){
            if(!dataUpdate.includes(val.code_client)){
                dataUpdate.push(val.code_client)
            }
        }
    })
    return dataUpdate;
}

//9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.
export const  getAllAfterTimeDeliveryCodeAndDate = async () =>{
    let res = await fetch("http://localhost:5508/requests?date_request")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        if(val.date_wait < val.date_delivery){
            dataUpdate.push({
                request: val.code_request,
                client: val.code_client,
                date_wait: val.date_wait,
                date_delivery: val.date_delivery
            })
        }
    })
    return dataUpdate;
}

//10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.
export const  getAllBeforeTimeDeliveryCodeAndDate = async () =>{
    let res = await fetch("http://localhost:5508/requests?status=Entregado")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        if(val.date_delivery == null){
            dataUpdate.push({
                status: val.status,
                request: val.code_request,
                client: val.code_client,
                date_wait: val.date_wait,
                date_delivery: null
            })
        } else{
            let x = Number(val.date_wait[8] + val.date_wait[9]) - Number(val.date_delivery[8] + val.date_delivery[9]);
            let y = Number(val.date_delivery[5] + val.date_delivery[6]) - Number(val.date_wait[5] + val.date_wait[6]);
            if(x >= 2 && y <= 0){
                dataUpdate.push({
                    status: val.status,
                    request: val.code_request,
                    client: val.code_client,
                    date_wait: val.date_wait,
                    date_delivery: val.date_delivery
                })
            }
        }        
    })
    return dataUpdate;
}

//11. Devuelve un listado de todos los pedidos que fueron **rechazados** en `2009`
export const getAllRequestsRefused = async () =>{
    let res = await fetch("http://localhost:5508/requests?status=Rechazado")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        if(val.date_request[3] == "9"){
            dataUpdate.push({
                request: val.code_request,
                client: val.code_client,
                date_wait: val.date_wait,
                date_delivery: val.date_delivery
            })
        }
    })
    return dataUpdate;
}

//12. Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año.
export const getAllRequestsDeliveredInJanuary = async () =>{
    let res = await fetch("http://localhost:5508/requests?status=Entregado")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        if(val.date_delivery == null){
            
        } else {
            if(val.date_request[5] == "0" && val.date_request[6] == "1" ){
                dataUpdate.push({
                    request: val.code_request
                })
            }
        }
    })
    return dataUpdate;
}

//obtener la informacion de un pedido por su cliente
export const getRequestByCode = async (code) => {
    let res = await fetch(`http://localhost:5508/requests?code_client=${code}`);
    let dataClients = await res.json();
    return dataClients;
}