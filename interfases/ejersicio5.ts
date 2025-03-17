interface Reptil {
    mostrarInfos(): void;
}

interface Volador {
    mostrarInfos(): void;

}

interface Animalitos extends Reptil {
    //va ser la hija de reptil...
    nombre: string;
    mostrarInfos(): void;
}

class Animal implements Animalitos, Volador {
    public nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    mostrarInfos(): void {
        console.log(`El nombre del animal es: ${this.nombre}`)
    }

}
let perrito: Animalitos = new Animal(`Golden Retriver...`)
console.log(perrito);
let largartija: Reptil = new Animal(`Lagartija de los aires...`)
console.log(largartija)
let pajarito: Volador = new Animal(`El gallinazo dorado...`)
console.log(pajarito);

const animalitos1: Animalitos & Volador = new Animal("pinguino de los aries");
animalitos1.mostrarInfos();
const animalitos2 = new Animal("murcielagito");
animalitos2.mostrarInfos();

