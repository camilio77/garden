import { 
    getAllOfficesCodeAndCity, 
    getAllOfficesFromSpainCityAndMovil,
    getAllDirectionsFromOffices
} from "./module/offices.js";

import { 
    getAllEmployeesWithBossAndCodeSeven, 
    getAllEmployeesWithoutSalesRepresentative,
    getBossFullNameAndEmail,
    getAllEmployeesAndBosses,
    getAllEmployeesAndBossesOfTheBosses
} from "./module/employees.js";

import {
    getAllSpanishClientes,
    getClientsEmploy,
    getAllClientsFromMadrid,
    getAllClientsWithPaymentsAndManager,
    getClientAndManager,
    getAllClientsWithoutPaymentsAndManager,
    getAllClientsWithPaymentsManagerAndCity,
    getAllClientsWithoutPaymentsManagerAndCity,
    getAllClientsWithRequestsOutOffTime,
    getAllClientsWithoutPayments,
    getAllClientsWithoutRequests,
    getAllClientsWithoutRequestsAndPayments
} from "./module/clients.js";

import {
    getAllStates,
    getAllDateTwoThousandEightCodeClient,
    getAllAfterTimeDeliveryCodeAndDate,
    getAllBeforeTimeDeliveryCodeAndDate,
    getAllRequestsRefused,
    getAllRequestsDeliveredInJanuary
} from "./module/requests.js";

import {
    getAllPaymentsFromTwoThousandEight,
    getAllPayments
} from "./module/payments.js";

import {
    getAllProductsWithGamaOrnamentales
} from "./module/product.js"

import {
    getAll
} from "./module/gama.js"



// console.log(await getAllOfficesCodeAndCity());
// console.log(await getAllOfficesFromSpainCityAndMovil());
// console.log(await getAllEmployeesWithBossAndCodeSeven());
// console.log(await getBossFullNameAndEmail());
// console.log(await getAllEmployeesWithoutSalesRepresentative());
// console.log(await getAllSpanishClientes());
//console.log(await getAllStates());
//console.log(await getAllDateTwoThousandEightCodeClient());
//console.log(await getAllAfterTimeDeliveryCodeAndDate());
// console.log(await getAllBeforeTimeDeliveryCodeAndDate());
//console.log(await getClienteEmploy());
// console.log(await getAllRequestsRefused());
// console.log(await getAllRequestsDeliveredInJanuary());
//console.log(await getAllPaymentsFromTwoThousandEight());
//console.log(await getAllPayments());
//console.log(await getAllProductsWithGamaOrnamentales());
// console.log(await getAllClientsFromMadrid());
//console.log(await getAllClientsWithPaymentsAndManager());
//console.log(await getClientAndManager());
//console.log(await getAllClientsWithoutPaymentsAndManager());
//console.log(await getAllClientsWithPaymentsManagerAndCity());
//console.log(await getAllClientsWithoutPaymentsManagerAndCity());
//console.log(await getAllDirectionsFromOffices());
//console.log(await getAllEmployeesAndBosses());
//console.log(await getAllEmployeesAndBossesOfTheBosses());
//console.log(await getAllClientsWithRequestsOutOffTime());
//console.log(await getAll());
//console.log(await getAllClientsWithoutPayments());
//console.log(await getAllClientsWithoutRequests());
console.log(await getAllClientsWithoutRequestsAndPayments());