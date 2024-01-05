/*
let a: string;
let b: number;
let c: boolean;

let d: any; //istenilen değer atanabilinir.

a = "hello world";
b = 22;
c = true;

console.log(a,b,c);

let langs : string[]; //string array olacak
let numbers : Array<number>
let a : Array<number> = [1,2,3,4,5,6,7,8,9]

numbers = [2,3,4];
 langs = ["php", "java"];
 console.log(langs);
 console.log(...numbers);
 console.log(a);

function addNumber(num1: number, num2?: number) : number { //? : opsiyonel demektir

    if(typeof num2 === "undefined") {
        return num1
    }
    
   return num1 + num2
}

console.log(addNumber(10))
console.log(addNumber(10,10))

function addNumber(num1: number, num2: number = 100) : number { //num2 varsayılan değer verildi
    
   return num1 + num2
}

console.log(addNumber(10))
console.log(addNumber(10,10))

function addNumber(num1: number, num2: number) : void {  //void donüş tipi herhangi bir şey dönemeyecegini belirtiyor
    
    console.log(num1+num2)
 }

 addNumber(10,20)

 class Person {
    name: string;
    age: number;
    phone: string;

    constructor(name:string, age:number, phone:string) {
        this.name = name;
        this.age = age;
        this.phone = phone;


        console.log("kişi oluşturuldu");
    }

    showInfo() {
        console.log(`isim: ${this.name} Yaş: ${this.age} Tel: ${this.phone}`);
    }
 }

 class Employee extends Person{
    salary: number;

    constructor(name:string, age:number, phone:string, salary:number) {
        super(name, age, phone);

        this.salary = salary;
    }

    showInfo() {
        super.showInfo()
        console.log("maaş: " + this.salary)
    }
    changeDepartment() {
        console.log("departman değiştiriliyor")
    }
 }

 let employee1 = new Employee("mustafa", 25, "123456789", 10000);
 employee1.showInfo();
 employee1.changeDepartment();
 
 interface IDatabase {
    add();
    get();
    delete();
    update();
 }

 class MySql implements IDatabase {
    add() {
        console.log("Mysql add");
    }get() {
        console.log("Mysql get");

    }
    delete() {
        console.log("Mysql delete");

    }
    update() {
        console.log("Mysql update");

    }
 }

 class MongoDB implements IDatabase {
    add() {
        console.log("MongoDB add");
    }get() {
        console.log("MongoDB get");

    }
    delete() {
        console.log("MongoDB delete");

    }
    update() {
        console.log("MongoDB update");

    }
 }

 function addDatabase(database: IDatabase) {
        database.add();
 }

addDatabase(new MySql());
addDatabase(new MongoDB());

abstract class Database { //abstract classlardan object üretilemez
    get() {
        console.log("database get")
    }
    add() {
        console.log("database add")
    }
    abstract delete(); //soyut gövdesiz method
    abstract update();
}

class MySql extends Database {

    delete() {
        console.log("Mysql delete");

    }
    update() {
        console.log("Mysql update");

    }
}

class MongoDB extends Database {

    delete() {
        console.log("MongoDB delete");

    }
    update() {
        console.log("MongoDB update");

    }
}

function AddDatabase(database: Database) {
    database.delete();
}

AddDatabase(new MySql());
AddDatabase(new MongoDB());
*/ 
