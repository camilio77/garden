import { 
    getAllOfficesCodeAndCity, 
    getAllOfficesFromSpainCityAndMovil 
} from "./module/offices.js";

import { 
    getAllEmployeesWithBossAndCodeSeven, 
    getAllEmployeesWithoutSalesRepresentative,
    getBossFullNameAndEmail
} from "./module/employees.js";

import {
    getAllSpanishClientes,
    getClienteEmploy,
    getAllClientsFromMadrid
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
// console.log(await getClienteEmploy());
// console.log(await getAllRequestsRefused());
// console.log(await getAllRequestsDeliveredInJanuary());
//console.log(await getAllPaymentsFromTwoThousandEight());
//console.log(await getAllPayments());
//console.log(await getAllProductsWithGamaOrnamentales());
console.log(await getAllClientsFromMadrid());