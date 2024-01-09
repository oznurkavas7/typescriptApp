
/*
function sayHello(message: string) {
    console.log(message);
}

sayHello("selam");


interface Person {
    name: string;
    age: number;

}

interface Employee extends Person {
    readonly empCode: number
}

let newEmployee: Employee

newEmployee = {
    name: "didem",
    age: 25,
    empCode: 222
}
*/


interface IEmployee {
    empCode: number;
    name: string;
    age: number;
    getSalary: (number) => number;
}

class Employee implements IEmployee {
    empCode: number;
    name: string;
    age: number;

    constructor(
        empCode: number,
        name: string,
        age: number) {
    }

    getSalary = (empCode: number) => {
        return 1000;
    }
}

let newEmployee = new Employee(22, "öznur", 25);
console.log(newEmployee.getSalary(1));