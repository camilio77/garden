import {getAllProductsBill} from "./component/shopBillCamper.js"
let myBill = document.querySelector("#myBill");
let data = await getAllProductsBill();
let row = ""
data.forEach((val, id) => {
    val.products.forEach(product=>{
        row += `
            <tr>
                <td>${product.description}</td>
                <td>${product.quantity}</td>
                <td>${product.price}</td>
                <td>${product.total}</td>
            </tr>
                `
    });
});
myBill.innerHTML = row;