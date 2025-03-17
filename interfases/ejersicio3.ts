interface ControlDispositivos {
    encenderDispositivo(nombre: string): void;
    apagarDispositivo(nombre: string): void;
    obtenerDispositivo(nombre: string): string;
}
interface AutomatizacionHogar {
    crearAutomatizacion(nombre: string, aciones: string[]): void;
    eliminarAutomatizacion(nombre: string): void;
    ejecucionAutomatizacion(nombre: string): void;
}

class Casainteligente implements ControlDispositivos, AutomatizacionHogar {
    public dispositivo: string;
    constructor(dispositivo: string) {
        this.dispositivo = dispositivo;
    }
    encenderDispositivo(nombre: string) {
        this.dispositivo = nombre;
        console.log(`El dispositivo a encender es: ${this.dispositivo}`)
    }
    apagarDispositivo(nombre: string): void {
        this.dispositivo = nombre;
        console.log(`El dispositivo a apagar es: ${this.dispositivo}`)
    }
    obtenerDispositivo(nombre: string): string {
        this.dispositivo = nombre;
        return this.dispositivo;
    }
    crearAutomatizacion(nombre: string, aciones: string[]): void {
        console.log(`La automatizacion creada es: ${nombre} 
            y las aciones son:${aciones}`)

    }
    eliminarAutomatizacion(nombre: string): void {
        console.log(`La automatizacion eliminada es: ${nombre}`)
    }
    ejecucionAutomatizacion(nombre: string): void {
        console.log(`La automatizacion de ejecutar es:${nombre}`)
    }
}
const micasa = new Casainteligente("refrigerador");
micasa.encenderDispositivo("bombillainteligente");

const micasita: ControlDispositivos & AutomatizacionHogar=new Casainteligente("Samduichera")
micasita.encenderDispositivo("Nebecon");