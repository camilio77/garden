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
            dataUpdate.sort(function(a,b){return a,b});
        }
    })
    return dataUpdate;
}