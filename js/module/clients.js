import {
    getEmployByCode
} from "./employees.js";

import {
    getOfficesByCode
} from "./offices.js";

import {
    getPaymentByCode
} from "./payments.js";


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

//16. Devuelve un listado con todos los clientes que sean de la ciudad de `Madrid` y cuyo representante de ventas tenga el código de empleado `11` o `30`.
export const getAllClientsFromMadrid = async () =>{
    let res = await fetch("http://localhost:5501/clients?city=Madrid")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        if(val.code_employee_sales_manager == 11 || val.code_employee_sales_manager == 30){
            dataUpdate.push({
                id: val.id,
                nombre: val.client_name,
                codigo_representante: val.code_employee_sales_manager
            })
        }
    })
    return dataUpdate;
}




// 7. Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
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

// 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.
export const getClientAndManager = async () => {
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

        let data = {...clientsUpdate, ...employUpdate};
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
        dataUpdate.manager_name = `${name} ${lastname1} ${lastname2}`
        clients[i] = dataUpdate;
    }
    return clients;
}

// 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.
export const getClienteEmployWithPaymentsAndManager = async () => {
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

        let [payment] = await getPaymentByCode(clientsUpdate.client_code);
        if (payment){
            let {
                code_client,
                payment:paymentName,
                id_transaction,
                date_payment,
                total,
                ...paymentUpdate
            } = payment        
            if (payment.code_client == clientsUpdate.client_code){
                let data = {...clientsUpdate, ...employUpdate, ...paymentUpdate};
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
                dataUpdate.manager_name = `${name} ${lastname1} ${lastname2}`
                clients[i] = dataUpdate;
            }
        }
    }
    return clients;
}