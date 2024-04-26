//13. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor.
export const getAllPaymentsFromTwoThousandEight = async () =>{
    let res = await fetch("http://localhost:5505/payments?payment=PayPal")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        if(val.date_payment[3] == "8"){
            dataUpdate.push({
                id: val.id,
                monto: val.total,
                fecha: val.date_payment
            })
            dataUpdate.sort((a, b) => b.monto - a.monto);
        }
    })
    return dataUpdate;
}

//14. Devuelve un listado con todas las formas de pago que aparecen en la tabla `pago`. Tenga en cuenta que no deben aparecer formas de pago repetidas.
export const getAllPayments = async () =>{
    let res = await fetch("http://localhost:5505/payments")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        if(!dataUpdate.includes(val.payment)){
            dataUpdate.push(val.payment);
        }
    })
    return dataUpdate;
}


//obtener codigo de cliente que haya realizado un pago por su codigo
export const getPaymentByCode = async (code) => {
    let res = await fetch(`http://localhost:5505/payments?code_client=${code}`);
    let dataClients = await res.json();
    return dataClients;
}
