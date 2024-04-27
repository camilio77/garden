import {
    getEmployByCode
} from "./employees.js";

import {
    getOfficesByCode
} from "./offices.js";

import {
    getPaymentByCode
} from "./payments.js";

import {
    getRequestByCode
} from "./requests.js"


//6. Devuelve un listado con el nombre de los todos los clientes españoles.
export const getAllSpanishClientes = async () =>{
    let res = await fetch("http://localhost:5501/clients?country=Spain")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            name: val.contact_name
        })
    })
    return dataUpdate;
}

//16. Devuelve un listado con todos los clientes que sean de la ciudad de `Madrid` y cuyo representante de ventas tenga el código de empleado `11` o `30`.
export const getAllClientsFromMadrid = async () =>{
    let res = await fetch("http://localhost:5501/clients?city=Madrid")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        if(val.code_employee_sales_manager == 11 || val.code_employee_sales_manager == 30){
            dataUpdate.push({
                id: val.id,
                name: val.client_name,
                manager_code: val.code_employee_sales_manager
            })
        }
    })
    return dataUpdate;
}




// 7. Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
export const getClientsEmploy = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    let clientsData = [];
    for (let i = 0; i < clients.length; i++){
        let [employees] = await getEmployByCode(clients[i].code_employee_sales_manager);
        let [offices] = await getOfficesByCode(employees.code_office);
        clientsData.push({
            client_name: clients[i].client_name,
            manager_name: `${employees.name} ${employees.lastname1} ${employees.lastname2}`,
            city: offices.city
        })
    }
    return clientsData;
}

// 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.
export const getClientAndManager = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    let clientsData = [];
    for (let i = 0; i < clients.length; i++){
        let [employees] = await getEmployByCode(clients[i].code_employee_sales_manager);
        clientsData.push({
            client_name: clients[i].client_name,
            manager_name: `${employees.name} ${employees.lastname1} ${employees.lastname2}`
        })
    }
    return clientsData;
}

// 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.
export const getAllClientsWithPaymentsAndManager = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    let clientsData = [];
    for (let i = 0; i < clients.length; i++){
        let [payments] = await getPaymentByCode(clients[i].client_code);
        let [employees] = await getEmployByCode(clients[i].code_employee_sales_manager);
        if(payments){
            clientsData.push({
                client_name: clients[i].client_name,
                manager_name: `${employees.name} ${employees.lastname1} ${employees.lastname2}`
            })
        }
    }
    return clientsData;
}

//3. Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas.
export const getAllClientsWithoutPaymentsAndManager = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    let clientsData = [];
    for (let i = 0; i < clients.length; i++){
        let [payments] = await getPaymentByCode(clients[i].client_code);
        let [employees] = await getEmployByCode(clients[i].code_employee_sales_manager);
        if(payments == undefined){
            clientsData.push({
                client_name: clients[i].client_name,
                manager_name: `${employees.name} ${employees.lastname1} ${employees.lastname2}`
            })
        }
    }
    return clientsData;
}

//4. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
export const getAllClientsWithPaymentsManagerAndCity = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    let clientsData = [];
    for (let i = 0; i < clients.length; i++){
        let [payments] = await getPaymentByCode(clients[i].client_code);
        let [employees] = await getEmployByCode(clients[i].code_employee_sales_manager);
        let [offices] = await getOfficesByCode(employees.code_office);
        if(payments){
            clientsData.push({
                client_name: clients[i].client_name,
                manager_name: `${employees.name} ${employees.lastname1} ${employees.lastname2}`,
                city: offices.city
            })
        }
    }
    return clientsData;
}

//5. Devuelve el nombre de los clientes que **no** hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
export const getAllClientsWithoutPaymentsManagerAndCity = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    let clientsData = [];
    for (let i = 0; i < clients.length; i++){
        let [payments] = await getPaymentByCode(clients[i].client_code);
        let [employees] = await getEmployByCode(clients[i].code_employee_sales_manager);
        let [offices] = await getOfficesByCode(employees.code_office);
        if(payments == undefined){
            clientsData.push({
                client_name: clients[i].client_name,
                manager_name: `${employees.name} ${employees.lastname1} ${employees.lastname2}`,
                city: offices.city
            })
        }
    }
    return clientsData;
}


//obtener info de un cliente por su ciudad
export const getClientsByCode = async () => {
    let res = await fetch(`http://localhost:5501/clients?city=Fuenlabrada`);
    let dataClients = await res.json();
    return dataClients;
}

//obeter info de cliente
export const getClients = async () => {
    let res = await fetch(`http://localhost:5501/clients?client_code`)
    let dataClients = await res.json();
    return dataClients;
}

//10. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.
export const getAllClientsWithRequestsOutOffTime = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    let clientsData = [];
    for (let i = 0; i < clients.length; i++){
        let [requests] = await getRequestByCode(clients[i].client_code);
        if(requests){
            if(requests.date_wait < requests.date_delivery){
                clientsData.push({
                    client_name: clients[i].client_name
                })
            }
        }
    }
    return clientsData;
}