import {
    getEmployByCode
} from "./employees.js";

import {
    getOfficesByCode
} from "./offices.js";


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

export const getClienteEmploy = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    for (let i = 0; i < clients.length; i++) {
        let {
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1:address1Client,
            address2:address2Client,
            city,
            region:regionClient,
            country:countryClient,
            postal_code:postal_codeClient,
            limit_credit,
            id:idClients,
            ...clientsUpdate
        } = clients[i]

        let [employ] = await getEmployByCode(clientsUpdate.code_employee_sales_manager);
        let {
            extension,
            email,
            code_boss,
            position,
            id:idEmploy,
            ...employUpdate
        } = employ
        
        let [office] = await getOfficesByCode(employUpdate.code_office)

        let {
            country:countryOffice,
            region:regionOffice,
            postal_code:postal_codeOffice,
            movil,
            address1:address1Office,
            address2:address2Office,
            id:idOffice,
            ...officeUpdate
        } = office

        //employUpdate.code_office = officeUpdate
        //clientsUpdate.code_employee_sales_manager = employUpdate;
        let data = {...clientsUpdate, ...employUpdate, ...officeUpdate};
        let {
            client_code,
            code_employee_sales_manager,
            employee_code,
            code_office,
            name,
            lastname1,
            lastname2,
            ...dataUpdate
        } = data;
        dataUpdate.name_employee = `${name} ${lastname1} ${lastname2}`


        clients[i] = dataUpdate;
    }
    return clients;
}