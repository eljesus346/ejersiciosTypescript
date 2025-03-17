//realizar una clase que tenga un metodo que 
// sume 3 numeros cuyas propiedades son 
// los 3 numeros utilice el tipo generico para manejo de tipós

class Sumanumeros<Z extends number> {
    public num1: Z;
    public num2: Z;
    public num3: Z;
    constructor(num1: Z, num2: Z, num3: Z) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
    }
    obtenerSuma(): number {
        return this.num1 + this.num2 + this.num3;
    }
}
const sumar = new Sumanumeros<number>(5, 4, 3);
sumar.obtenerSuma();
console.log(sumar.obtenerSuma());
