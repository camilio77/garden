//entrega codigo de producto a partir de un codigo de pedido
export const getProductByCode = async (code) =>{
    let res = await fetch(`http://localhost:5507/request_details?code_request=${code}`);
    let dataClients = await res.json();
    return dataClients;
}