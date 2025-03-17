
//1
interface Pelicula {
    titulo: string;
    director: string;
    anioEstreno?: number; // Opcional
}

// Función para imprimir información de una película
function imprimirPelicula(pelicula: Pelicula): void {
    console.log(`Título: ${pelicula.titulo}`);
    console.log(`Director: ${pelicula.director}`);

    if (pelicula.anioEstreno !== undefined) {
        console.log(`Año de estreno: ${pelicula.anioEstreno}`);
    } else {
        console.log("Año de estreno: No disponible");
    }
}

// Objetos de tipo Película (definidos FUERA de la función)
const pelicula1: Pelicula = {
    titulo: "Interstellar",
    director: "Christopher Nolan",
    anioEstreno: 2014
};

const pelicula2: Pelicula = {
    titulo: "Inception",
    director: "Christopher Nolan"
};

// Llamamos la función de manera correcta
imprimirPelicula(pelicula1);
console.log("------");
imprimirPelicula(pelicula2);

console.log(pelicula1);
console.log(pelicula2);
console.log(imprimirPelicula);

//2.
interface recargable {
    recargar(): void;
}
interface disparable {
    disparar(): void;
}

class PistoLaser implements recargable, disparable {
    municion: number;
    bateria: number;
    constructor(municion: number, bateria: number) {
        this.municion = municion;
        this.bateria = bateria;
    }
    recargar(): void {
        console.log("Recargando...");
        this.municion += 10;
        this.bateria += 10;
    }
    disparar(): void {
        if (this.municion > 0 && this.bateria > 0) {
            console.log("Disparando...");
            this.municion -= 1;
            this.bateria -= 1;
        } else {
            console.log("Sin municion ni bateria para disparar.")
        }
    }

}
console.log("Pistola laser");
const miPistola = new PistoLaser(10, 10);
console.log(miPistola);
miPistola.disparar();
miPistola.recargar();

//3. 
interface Dispositivo {
    nombre: string;
}
interface SmartPhone extends Dispositivo {
    tienePantallaTactil: boolean;
}
const miTelefonito: SmartPhone = {
    nombre: "iPhone 11",
    tienePantallaTactil: true
}
console.log("Informacion del SmartPhone:");
console.log(`Nombre:${miTelefonito.nombre}`);
console.log(`🔹 ¿Tiene pantalla táctil?: ${miTelefonito.tienePantallaTactil ? "Sí" : "No"}`);

//ejercicio cualquiera...
interface Vehiculo {
    nombre: string;
}
interface Bici extends Vehiculo {
    precio: number;
}
const miBici: Bici = {
    nombre: "Venzo",
    precio: 1.100,
}
console.log("Informacion de la Bicicleta:");
console.log(`Nombre:${miBici.nombre}`);
console.log(`precio:${miBici.precio}`);

//4.
interface VideoJuego {
    titulo: string;
    plataforma: string;
}

interface VideoJuego {
    titulo: string;
    plataforma: string;
}
class Juego implements VideoJuego {
    titulo: string = "";
    plataforma: string = "";
}
const miJuego = new Juego();
miJuego.titulo = "Las flipantes aventuras de river",
    miJuego.plataforma = "Ps4 slim";

console.log("Nuevo Juego:");
console.log(`El nombre es:${miJuego.titulo}`);
console.log(`La plataforma es:${miJuego.plataforma}`);

//6. las interfaces nos permiten definir 
// l}a forma que deben tener los objectos

class Persona {
    nombre: string;
    apellido: string;

    constructor(nombre:string,apellido:string){
        this.nombre=nombre;
        this.apellido=apellido;
    }

    saludar():void{
        console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
    }
}

const persona1 = new Persona("Jesus","castro");
const persona2 = new Persona("fiufiu","fresa");

console.log(persona1);
console.log(persona2);

persona1.saludar();
persona2.saludar();