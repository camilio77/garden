export const getAllProductsBill = async() => {
    let conection = await fetch("http://localhost:5600/camper");
    let data = await conection.json();
    return data;
}