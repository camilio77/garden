import {
    getEmployByOffice
} from "./employees.js"

import {
    getClientsByCode
} from "./clients.js"


//1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.
export const getAllOfficesCodeAndCity = async () =>{
    let res = await fetch("http://localhost:5504/offices")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            codigo: val.code_office,
            ciudad: val.city
        })
    });
    return dataUpdate;
}
//2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
export const getAllOfficesFromSpainCityAndMovil = async () =>{
    let res = await fetch("http://localhost:5504/offices?country=España")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            // id: val.id,
            ciudad: val.city,
            telefono: val.movil
        })
    });
    return dataUpdate;
}



//obtener info de una oficina por su codigo
export const getOfficesByCode = async (code) => {
    let res = await fetch(`http://localhost:5504/offices?code_office=${code}`);
    let dataClients = await res.json();
    return dataClients;
}


//6. Lista la dirección de las oficinas que tengan clientes en `Fuenlabrada`.
export const getAllDirectionsFromOffices = async () => {
    let res = await fetch("http://localhost:5504/offices");
    let offices = await res.json();
    let officesData = [];
    for (let i = 0; i < offices.length; i++){
        let [employees] = await getEmployByOffice(offices[i].code_office);
        let [clients] = await getClientsByCode(employees.employee_code);
        officesData.push({
            client_city: clients.city,
            offices: offices[i].code_office,
            address: `${offices[i].address1} ${offices[i].address2}`
        })
    }
    return officesData;
}