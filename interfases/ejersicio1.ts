import { info } from "console";

interface Person {
    name: string;
    address: string;
    age: number;
    //metodo... que no retorna nada.
    info(): void;
}
//debe implementar las mismas propiedades de la interfaz
//clase a la cual le implementamos la interfaz..
class Employe implements Person {
    name: string;
    address: string;
    age: number;
    constructor(name: string, address: string, age: number) {
        this.name = name;
        this.address = address;
        this.age = age;
    }
    info() {
        console.log(`esta es la informacion del empleado
            name:${this.name}
            address:${this.address}
            age:${this.age}`)
    }
}
let diego = new Employe("Diego", "123", 25)
diego.info();