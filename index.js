// Write your solution in this file!
let employee = {name: "evan",
address: "123 Bliss"}

function updateEmployeeWithKeyAndValue(employee, key, value){
const employeeUpdate = {...employee}
employeeUpdate[key]=value;
return employeeUpdate;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}