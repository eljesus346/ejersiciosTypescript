interface Empleado {
    nombre: string;
    salario: number;
    informacion(): void;
}
class Genrente implements Empleado {
    nombre: string;
    salario: number;
    departamento: string;
    constructor(nombre: string, salario: number, departamento: string) {
        this.nombre = nombre;
        this.salario = salario;
        this.departamento = departamento;
    }
    informacion() {
        console.log(`La informacion del gerente es: 
            nombre:${this.nombre}
            salario:${this.salario}
            departamento:${this.departamento}`)
    }
    bonificacion(valor: number): number {
        let bonificacion = this.salario = this.salario * valor;
        return bonificacion;
    }

}

class Desarrollador implements Empleado {
    nombre: string;
    salario: number;
    lenguaje: string;
    constructor(nombre: string, salario: number, lenguaje: string) {
        this.nombre = nombre;
        this.salario = salario;
        this.lenguaje = lenguaje;
    }
    informacion(): void {
        console.log(`La informacion del desarrollador es...
            nombre:${this.nombre}
            salario:${this.salario}
            lenguaje:${this.lenguaje}`)
    }
}
class Diseñador implements Empleado {
    nombre: string;
    salario: number;
    especialidad: string
    constructor(nombre: string, salario: number, especialidad: string) {
        this.nombre = nombre;
        this.salario = salario;
        this.especialidad = especialidad;
    }
    informacion(): void {
        console.log(`La informacion del desarrollador es...
                nombre:${this.nombre}
                salario:${this.salario}
                especialidad:${this.especialidad}`)
    }

}
const esclavitos: Empleado[] = [
    new Genrente("Carlos", 1234, "Ventas"),
    new Desarrollador("Camilo", 3000, "Typescript"),
    new Diseñador("Luis", 2500, "UI")

];
esclavitos.forEach((emp) => {
    emp.informacion();
});

const gerentesito = new Genrente("Pedro", 7000, "Produccion");
const desarrolladorsito = new Desarrollador("Carlos", 2000, "tipescript");
const empleados2: Empleado[] = [
    gerentesito,
    desarrolladorsito
];
empleados2.forEach((emp) => {
    emp.informacion()
});
console.log(gerentesito.bonificacion(0.12));