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
    getAll
} from "./module/requests.js";

// console.log(await getAllOfficesCodeAndCity());
// console.log(await getAllOfficesFromSpainCityAndMovil());
// console.log(await getAllEmployeesWithBossAndCodeSeven());
// console.log(await getBossFullNameAndEmail());
// console.log(await getAllEmployeesWithoutSalesRepresentative());
// console.log(await getAllSpanishClientes());
// console.log(await getAllStates());
console.log(await getAll());