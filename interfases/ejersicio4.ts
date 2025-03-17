//?:opcional 
//&:interseccion

interface Automovil {
    marca: string;
    modelo?: string; //indicandole a la propiedad modelo que es opcional
    precio?: number;
    mostrarInfo(): void;
}
class Moto implements Automovil {
    public _marca: string = '';
    public _precio: number = 45;


    get marca(): string {
        return this._marca
    }
    set marca(nuevaMarca: string) {
        this._marca = nuevaMarca;
    }
    get precio(): number {
        return this._precio
    }
    set precio(nuevoPrecio: number) {
        this._precio = nuevoPrecio;
    }
    mostrarInfo(): void {
        console.log(`MMi marca es: ${this.marca}`)
    }
}
const auto: Automovil = new Moto();
auto.marca = "Hyundai"
console.log(auto);
console.log(auto.marca);
