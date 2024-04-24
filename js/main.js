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
    getAllSpanishClientes
} from "./module/clients.js";

import {
    getAllStates,
    getAllDateTwoThousandEightCodeClient,
    getAllAfterTimeDeliveryCodeAndDate,
    getAllBeforeTimeDeliveryCodeAndDate
} from "./module/requests.js";

// console.log(await getAllOfficesCodeAndCity());
// console.log(await getAllOfficesFromSpainCityAndMovil());
// console.log(await getAllEmployeesWithBossAndCodeSeven());
// console.log(await getBossFullNameAndEmail());
// console.log(await getAllEmployeesWithoutSalesRepresentative());
// console.log(await getAllSpanishClientes());
//console.log(await getAllStates());
//console.log(await getAllDateTwoThousandEightCodeClient());
//console.log(await getAllAfterTimeDeliveryCodeAndDate());
console.log(await getAllBeforeTimeDeliveryCodeAndDate());