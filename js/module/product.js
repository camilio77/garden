//15. Devuelve un listado con todos los productos que pertenecen a la gama `Ornamentales` y que tienen más de `100` unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.
export const getAllProductsWithGamaOrnamentales = async () =>{
    let res = await fetch("http://localhost:5506/products?gama=Ornamentales")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        if(val.stock > 100){
            dataUpdate.push({
                id: val.id,
                nombre: val.name,
                precio: val.price_sale
            })
            dataUpdate.sort((a, b) => b.precio - a.precio);
        }
    })
    return dataUpdate;
}