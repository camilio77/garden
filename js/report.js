import "./components/clock.js";
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
    getAllClientsWithRequestsOutOffTime
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


const queryAboutTable1 = document.querySelector("#queryAboutTable1");
queryAboutTable1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable1.children
    if(!report__container.innerHTML){
        let data = await getAllOfficesCodeAndCity();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.code}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Ciudad: </b>${val.city}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

const queryAboutTable2 = document.querySelector("#queryAboutTable2");
queryAboutTable2.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable2.children
    if(!report__container.innerHTML){
        let data = await getAllOfficesFromSpainCityAndMovil();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.city}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>movil: </b>${val.movil}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

const queryAboutTable3 = document.querySelector("#queryAboutTable3");
queryAboutTable3.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable3.children
    if(!report__container.innerHTML){
        let data = await getAllEmployeesWithBossAndCodeSeven();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Apellidos: </b>${val.lastnames}</p>
                        <p><b>Correo: </b>${val.email}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

const queryAboutTable4 = document.querySelector("#queryAboutTable4");
queryAboutTable4.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable4.children
    if(!report__container.innerHTML){
        let data = await getBossFullNameAndEmail();
        let plantilla = "";
        console.log(data);
        plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${data.position}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del jefe: </b>${data.name}</p>
                        <p><b>Apellidos: </b>${data.lastnames}</p>
                        <p><b>Correo: </b>${data.email}</p>
                    </div>
                </div>
            </div>
            `;
        report__container.innerHTML = plantilla;
    }
})

const queryAboutTable5 = document.querySelector("#queryAboutTable5");
queryAboutTable5.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable5.children
    if(!report__container.innerHTML){
        let data = await getAllEmployeesWithoutSalesRepresentative();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Apellidos: </b>${val.lastnames}</p>
                        <p><b>Posicion: </b>${val.position}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

const queryAboutTable6 = document.querySelector("#queryAboutTable6");
queryAboutTable6.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable6.children
    if(!report__container.innerHTML){
        let data = await getAllSpanishClientes();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Clientes Españoles</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del cliente: </b>${val.nombre}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

const queryAboutTable7 = document.querySelector("#queryAboutTable7");
queryAboutTable7.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable7.children
    if(!report__container.innerHTML){
        let data = await getAllStates();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Diferentes estados</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Estado: </b>${val}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

const queryAboutTable8 = document.querySelector("#queryAboutTable8");
queryAboutTable8.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable8.children
    if(!report__container.innerHTML){
        let data = await getAllDateTwoThousandEightCodeClient();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Realizaron pagos en 2008</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del cliente: </b>${val}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

const queryAboutTable9 = document.querySelector("#queryAboutTable9");
queryAboutTable9.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable9.children
    if(!report__container.innerHTML){
        let data = await getAllAfterTimeDeliveryCodeAndDate();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Pedido ${val.request}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del cliente: </b>${val.client}</p>
                        <p><b>fecha esperada: </b>${val.date_wait}</p>
                        <p><b>fecha de entrega: </b>${val.date_delivery}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

const queryAboutTable10 = document.querySelector("#queryAboutTable10");
queryAboutTable10.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable10.children
    if(!report__container.innerHTML){
        let data = await getAllBeforeTimeDeliveryCodeAndDate();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Pedido ${val.request}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del cliente: </b>${val.client}</p>
                        <p><b>Estado: </b>${val.status}</p>
                        <p><b>Fecha esperada: </b>${val.date_wait}</p>
                        <p><b>Fecha de entrega: </b>${val.date_delivery}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

const queryAboutTable11 = document.querySelector("#queryAboutTable11");
queryAboutTable11.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable11.children
    if(!report__container.innerHTML){
        let data = await getAllRequestsRefused();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Pedido ${val.request}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del cliente: </b>${val.client}</p>
                        <p><b>Fecha esperada: </b>${val.date_wait}</p>
                        <p><b>Fecha de entrega: </b>${val.date_delivery}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

const queryAboutTable12 = document.querySelector("#queryAboutTable12");
queryAboutTable12.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable12.children
    if(!report__container.innerHTML){
        let data = await getAllRequestsDeliveredInJanuary();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Pedido entregado</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo: </b>${val.request}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})