import {
    getClients
} from "./clients.js"

import {
    getRequestByCode
} from "./requests.js"

import {
    getProductByCode
} from "./request_details.js"

import {
    getProductInfoByCode
} from "./product.js"

//11. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.
export const getAll = async () => {
    let res = await fetch(`http://localhost:5503/gama`);
    let gama = await res.json();
    let GamaInfo = [];
    for (let i = 0; i < gama.length; i++){
        let [clients] = await getClients();
        let [request] = await getRequestByCode(clients.client_code);
        let [request_details] = await getProductByCode(request.code_request);
        let [product] = await getProductInfoByCode(request_details.product_code);
        GamaInfo.push(
            product.gama
        )
    }
    return GamaInfo;
}