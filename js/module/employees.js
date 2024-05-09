//3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.
export const getAllEmployeesWithBossAndCodeSeven = async () =>{
    let res = await fetch("http://localhost:5502/employees?code_boss=7")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            name: val.name,
            lastnames: `${val.lastname1} ${val.lastname2}`,
            email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
        })
    })
    return dataUpdate;
}
//4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.
export const getBossFullNameAndEmail = async () =>{
    let res = await fetch("http://localhost:5502/employees")
    let data = await res.json();
    let dataUpdate = {};
    data.forEach(val => {
        if(val.code_boss == null){
            dataUpdate.position = val.position;
            dataUpdate.name = val.name;
            dataUpdate.lastnames = `${val.lastname1} ${val.lastname2}`;
            dataUpdate.email = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0];
        }
    })
    return dataUpdate;
}

//5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.
export const getAllEmployeesWithoutSalesRepresentative = async () =>{
    let res = await fetch("http://localhost:5502/employees?position_ne=Representante%20Ventas")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            name: val.name,
            lastnames: `${val.lastname1} ${val.lastname2}`,
            position: val.position
        })
    })
    return dataUpdate;
}





//obtener la informacion de un empleado por su codigo
export const getEmployByCode = async (code) => {
    let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`);
    let dataClients = await res.json();
    return dataClients;
}
//obtener la informacion de un empleado por su codigo
export const getEmployByOffice = async (office) => {
    let res = await fetch(`http://localhost:5502/employees?code_office=${office}`);
    let dataClients = await res.json();
    return dataClients;
}


//8. Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.
export const getAllEmployeesAndBosses = async () => {
    let res = await fetch("http://localhost:5502/employees");
    let employees = await res.json();
    let employeesData = [];
    for (let i = 0; i < employees.length; i++){
        let [boss] = getEmployByCode(employees[i].code_boss);
        if (employees[i].code_boss == null){
            employeesData.push({
                employe_name: employees[i].name,
                code_boss: employees[i].code_boss
            })
        } else {
            employeesData.push({
                employe_name: employees[i].name,
                code_boss: employees[i].code_boss,
                boss_name: employees[(employees[i].code_boss) - 1].name
            })
        }
    }
    return employeesData;
}

//9. Devuelve un listado que muestre el nombre de cada empleados, el nombre de su jefe y el nombre del jefe de sus jefe.
export const getAllEmployeesAndBossesOfTheBosses = async () => {
    let res = await fetch("http://localhost:5502/employees");
    let employees = await res.json();
    let employeesData = [];
    for (let i = 0; i < employees.length; i++){
        if (employees[i].code_boss == null){
            employeesData.push({
                employe_name: employees[i].name,
                code_boss: employees[i].code_boss
            })
        } else if(employees[(employees[i].code_boss) - 1].code_boss == null){
            employeesData.push({
                employe_name: employees[i].name,
                code_boss: employees[i].code_boss,
                boss_name: employees[(employees[i].code_boss) - 1].name,
                code_boss_from_boss: employees[(employees[i].code_boss) - 1].code_boss
            })
        } else {
            employeesData.push({
                employe_name: employees[i].name,
                code_boss: employees[i].code_boss,
                boss_name: employees[(employees[i].code_boss) - 1].name,
                code_boss_from_boss: employees[(employees[i].code_boss) - 1].code_boss,
                boss_name_from_boss: employees[(employees[(employees[i].code_boss) - 1].code_boss) - 1].name
            })
        }
    }
    return employeesData;
}



//4. Devuelve un listado que muestre solamente los empleados que no tienen una oficina asociada.
export const getAllEmployeesWithoutOffice = async () =>{
    let res = await fetch("http://localhost:5502/employees")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        if (val.code_office == null){
            dataUpdate.push({
                name: val.name,
            })
        }
    })
    return dataUpdate;
}