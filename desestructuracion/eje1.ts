const numeros: number[] = [10, 20, 30];
console.log(numeros[0]);//10
const [a, b, c] = numeros;
console.log(a);//10
console.log(b);//20

const [primero,segundo,tercero] = numeros;
console.log(primero);//10
console.log(segundo);//20
console.log(tercero);//30

//rest operador
const [x, ...restoNumeros] = numeros;
console.log(x);//10
console.log(restoNumeros);//[20,30]
