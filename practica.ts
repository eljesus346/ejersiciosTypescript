//esto solo es practica ...

// aplicamos aqui clase,metodo,estructura de control condicional
//,operadores aritmetricos, creamos dos objectos.
class Calculadora {
    numerox: number = 0;
    numeroz: number = 0;
    constructor(numerox: number, numeroz: number) {
        this.numerox = numerox;
        this.numeroz = numeroz;
    }
    sumar(): number {
        return this.numerox + this.numeroz;
    }
    restar(): number {
        return this.numerox - this.numeroz;
    }
    multiplicar(): number {
        return this.numerox * this.numeroz;
    }
    dividir(): number | string {
        if(this.numeroz===0){
            return"Error: No se puede dividir por 0";
        }
        return this.numerox / this.numeroz;
    
}

}

const miCalculadora = new Calculadora(10,5);

console.log("suma:", miCalculadora.sumar());
console.log("resta:", miCalculadora.restar());      
console.log("multiplicacion:",miCalculadora.multiplicar());
console.log("division:", miCalculadora.dividir());

const miCalculadora2 = new Calculadora(10,0);
console.log("divicion*0:", miCalculadora2.dividir());
