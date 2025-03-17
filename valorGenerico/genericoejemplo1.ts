function obtenerContenido<T extends number>(a: T) {
    console.log(`Mi numero es  ${a}`);
}
obtenerContenido(2);

const sumaNumeros = <N extends number> (numero1: N, numero2: N): Number => {
    return numero1 + numero2;
}
sumaNumeros(3, 5); 
console.log(sumaNumeros(3, 5));

