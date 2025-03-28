//1-declara una variable de tipo string y asignale un valor
let namex = "jesus";
console.log(namex);

//2-crea una varible edad de tipo number e inicializala con tu edad
let age: number = 24;
console.log(age);

//3-declara una variable estudiante de tipo boolean e inicializala con true
let estudiante: boolean = true;
console.log(estudiante);

//4-crea una funcion doblarNumero que reciba un nuimber y retorne su doble
function doblarNumero(num: number): number {
  return num * 2;
}
console.log(doblarNumero(5));
//5-crea una funcion concatenarPalabras que reciba dos string y los una en una sola frace
//contatenada.
function concatenarPalabras(pala1: string, pala2: string): string {
  return pala1 + " " + pala2;
}
console.log(concatenarPalabras("hola", "mundo"));

//6-crea una funcion esPar que reciba un numero y retorne true si es par y false si no lo es.
function esPar(numc: number): boolean {
  return numc % 2 === 0;
}
console.log(esPar(4));
console.log(esPar(5));

//7-crea una funcion evaluarEdad que reciba una edad y retorne "es menor de edad" si la edad es menor a 18 y "es mayor de edad" si la edad es 18 o mayor.
function evaluarEdad(persona: number): string {
  if (persona <= 18) {
    return "es menor de edad";
  } else {
    return "es mayor de edad";
  }
}
console.log(evaluarEdad(15));
console.log(evaluarEdad(20));

//otro caso pero con void

function evaluarEdad2(personita: number): void {
  if (personita < 18) {
    console.log("es menor de edad");
  } else {
    console.log("ës mayor de edad");
  }
}
evaluarEdad2(20);
evaluarEdad2(15);

//8-crear una funcion comparNumeros que reciba dos numeros y retorne el mayor de los dos.
function compararNumeros(num1: number, num2: number): number {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(compararNumeros(10, 5));
console.log(compararNumeros(3, 8));
console.log(compararNumeros(7, 7));

//9-escribe una funcion que determine si un numero es multiplo de otro
function esMultiplo(nume1: number, nume2: number): boolean {
  return nume1 % nume2 === 0;
}
console.log(esMultiplo(10, 5)); //10 es multiplo de 5.
console.log(esMultiplo(13, 7)); //13 no es multiplo de 7.

//10- crea una funcion diaSemana que reciba un numero del 1 al 7 y retorne el dia de la semana correspondiente.
function diaSemana(numeroDia: number): string {
  switch (numeroDia) {
    case 1:
      return "Lunes";
    case 2:
      return "Martes";
    case 3:
      return "Miércoles";
    case 4:
      return "Jueves";
    case 5:
      return "Viernes";
    case 6:
      return "Sábado";
    case 7:
      return "Domingo";
    default:
      return "Número inválido";
  }
}
console.log(diaSemana(1));
console.log(diaSemana(2));
console.log(diaSemana(3));
console.log(diaSemana(4));
console.log(diaSemana(5));
console.log(diaSemana(6));
console.log(diaSemana(7));

function personitas(nombres: number): string {
  switch (nombres) {
    case 1:
      return "jesus";
    case 2:
      return "carlos";
    case 3:
      return "andres";
    default:
      return "Numero no existe";
  }
}
console.log(personitas(1));
console.log(personitas(2));
console.log(personitas(3));

//11- crea una funcion imprimirNumeros que reciba un numero y nos imprima los numeros hasta ese valor ingresado.
function imprimirNumeros(numeritos: number): void {
  for (let i = 1; i <= numeritos; i = i + 1) {
    console.log(i);
  }
}
imprimirNumeros(5);

//12-declara una funcion sumarNumerez que reciba un numero n
//y retorne y que sume todos los numero de 1 hasta n.

function sumarNumeroz(n: number): number {
  let suma = 0;

  for (let i = 1; i <= n; i = i + 1) {
    suma += i;
  }
  return suma;
}
console.log(sumarNumeroz(10));

function sumarPares(pares: number): number {
  let suma = 0;
  for (let v = 2; v <= pares; v = v + 2) {
    suma += v;
  }
  return suma;
}
console.log(sumarPares(10));

//13-dado un array [3,6,9,12] usa for para multiplicar cada elemento
// por 2 y imprimelo.

let multi: number[] = [3, 6, 9, 12];

for (let h = 0; h <= 3; h = h + 1) {
  console.log(multi[h] * 2);
}

//14-crea una funcion que reciba un array de numeros y retorne un los numeros mayores a 10.
let mayoraDiez: number[] = [1, 2, 3, 56, 97, 34, 12];
for (let j = 0; j <= 6; j = j + 1) {
  if (mayoraDiez[j] > 10) {
    console.log("Este numero es mayor a 10:", mayoraDiez[j]);
  } else {
    console.log("Este numero es menor a 10:", mayoraDiez[j]);
  }
}

//15-  crea una funcion que reciba un array y devuelva el numero mas grande del mismo.
function numeroGrande(numeritos: number[]): number {
  if (numeritos.length === 0) {
    throw new Error("El array esta vacio");
  }
  let maximo = numeritos[0];
  for (let d = 1; d < numeritos.length; d = d + 1) {
    if (numeritos[d] > maximo) {
      maximo = numeritos[d];
    }
  }
  return maximo;
}
console.log(
  "El numero maximo dentro de nuestro arreglo es:",
  numeroGrande([1, 2, 3, 4, 5, 6, 8, 9, 54, 13, 87, 132])
);

//16- crea buscarElemento que reciba un array de numbers y un número, y devuelva true si el número está en el array.
function buscarElemento(numbers: number[], numeroBuscar: number): boolean {
  for (let y = 0; y < numbers.length; y = y + 1) {
    if (numbers[y] === numeroBuscar) {
      return true;
    }
  }
  return false;
}
console.log(buscarElemento([1, 2, 3, 4, 5, 6, 8, 9, 54, 13, 87, 132], 132));

//17- dado un array de strings, usa map para crear un nuevo array con las mismas palabras pero en mayusculas.

const frutas: string[] = ["manzana", "banana", "uva", "pera"];
const enMayusculas = frutas.map((fruta) => fruta.toUpperCase());

console.log(enMayusculas);

//18- dado un array [2,4,5,7,10] para obtener solo los pares sin utilizar .filter

let numerosa: number[] = [2, 4, 5, 7, 10];
let pares: number[] = [];

for (let i = 0; i < numerosa.length; i++) {
  if (numerosa[i] % 2 === 0) {
    pares.push(numerosa[i]);
  }
}
console.log(pares);

//19- escribe una funcion promedio que reciba una array de numeros y devuelva el promedio de los numeros.

function promedio(numeroz: number[]): number {
  let suma = 0;
  for (let i = 0; i < numeroz.length; i = i + 1) {
    suma += numeroz[i];
  }
  return suma / numeroz.length;
}
console.log(promedio([1, 2, 3, 4, 5, 12, 8, 9, 54, 13, 87, 132]));

//20- dado un array[3,5,7,6] para obtener la suma total sin usar .reduce() y una con .reduce()
//sin .reduce();
let sumaTotal: number[] = [3, 5, 7, 9];
let sumita = 0;
for (let i = 0; i < sumaTotal.length; i = i + 1) {
  sumita = sumita + sumaTotal[i];
}
console.log(sumita);
//con .reduce();

let sumitaTotal: number[] = [3, 5, 7, 9];

let sumito = sumaTotal.reduce(
  (acumulador, elemento) => acumulador + elemento,
  0
);

console.log(sumita);

//21-crea un objecto persona con nombre, edad,ciuad

let personita = {
  nombreg: "jesus",
  edadg: 24,
  ciudadg: "popayan"
}
console.log(personita);

//22- crear una funcion actualizarCiudad que reciba un objecto persona y una nueva ciudad, y la modifique

//23- crea un array de objectos autos, cada uno con marca ano, y muestre solo los autos fabricados despues del 2015

let autos = [
  { marca: "ford", ano: 2010 },
  { marca: "chevrolet", ano: 2018 },
  { marca: "honda", ano: 2017 },
  { marca: "toyota", ano: 2015 },
  { marca: "mazda", ano: 2013 }
]

let autosNuevos = autos.filter(auto => auto.ano > 2015)

console.log(autosNuevos);

//24- crea una funcion buscarAuto que reciba un array de autos y una marca, y devuelva los autos de esa marca

interface Auto {
  marca: string;
  modelo: string;
  año: number;
}


function buscarAuto(autos: Auto[], marcaBuscada: string): Auto[] {
  return autos.filter(auto => auto.marca.toLowerCase() === marcaBuscada.toLowerCase());
}


const autoso: Auto[] = [
  { marca: "Toyota", modelo: "Corolla", año: 2020 },
  { marca: "Honda", modelo: "Civic", año: 2019 },
  { marca: "Toyota", modelo: "Yaris", año: 2021 },
  { marca: "Ford", modelo: "Focus", año: 2018 }
];

const resultado = buscarAuto(autoso, "Toyota");


console.log("Autos encontrados:", resultado);

//25- crea una funcion contarPropiedades que reciba un objeto y devuelva el número de propiedades que tiene

function contarPropiedades(objeto: object): number {
  return Object.keys(objeto).length;
}


const personaa = {
  nombre: "Jesús",
  edad: 25,
  ciudad: "Bogotá",
  profesion: "Ingeniero"
};

console.log("Número de propiedades:", contarPropiedades(personaa));

//26- crea una funcion que reciba otra funcion como argumento y la ejecute

function ejecutarFuncion(funcion: Function): void {
  funcion();
}

function saludo(): void {
  console.log("Hola Mundo!");
}

//27-  crea una funcion multiplicarPor que recib un numero x y lo devuelva en un anueva funcion que multiplique por x

function multiplicarPor(x: number): Function {
  return (y: number): number => y * x;
}

const multiplicarPorDos = multiplicarPor(2);
console.log(multiplicarPorDos);

//28-crea una funcion crearContador que devuelva una funcion que incremente un contaodor cada vez que se llame 

function crearContador(): Function {
  let contador = 0;

  return (): number => {
    contador++;
    return contador;
  };
}

const contadorUno = crearContador();

console.log(contadorUno());
console.log(contadorUno()); 

//29- escribe una funcion que tome un array de strings y devuelva otro con los nombres

function obtenerNombres(nombres: string[]): string[] {
  return nombres.map(nombre => nombre.split(" ")[0]);
}

console.log(obtenerNombres(["Juan Perez", "Maria Garcia", "Pedro Lopez"])); 

//30- crea una funcion intercalarArrays que reciba dos arrays y los mezcle alternando sus elementos 

    function intercalarArrays(arr1: any[], arr2: any[]): any[] {
    let intercalado = [];

    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
      if (i < arr1.length) {
        intercalado.push(arr1[i]);
      }
      if (i < arr2.length) {
        intercalado.push(arr2[i]);
      }
    }

    return intercalado;
  }
  console.log(intercalarArrays([1, 2, 3], ["a", "b", "c"]));
  console.log(intercalarArrays([5, 6], [1, 2, 3, 4])); 

  //31-crear una funcion clonarObjecto que reciba un objeto y devuelva una copia exacta de este  sin modificar el original
  function clonarObjecto(objeto: object): object {
    return JSON.parse(JSON.stringify(objeto));
  }
  const objetoOriginal = { nombre: "Juan", edad: 25, ciudad: "Bogotá" };
  const objetoCopia = clonarObjecto(objetoOriginal);
  console.log(objetoCopia);

  //32- crea una funcion mergeObjectos que reciba dos objectos y los combine en uno solo, sin modificar los originales
  function mergeObjectos(objeto1: object, objeto2: object): object {
    return { ...objeto1, ...objeto2 };
  }
  const objeto1 = { nombre: "Juan", edad: 25 };
  const objeto2 = { ciudad: "Bogotá", profesión: "Ingeniero" };
  const objetoCombinado = mergeObjectos(objeto1, objeto2);
  console.log(objetoCombinado);

  //33- crea una funcion filtrarporPropiedad que reciba un array de objectos y un nombre de propiedad, y retorne solo los objectos que contengan esapropiedad

  function filtrarPorPropiedad(objetos: any[], propiedad: string): any[] {
    return objetos.filter(objeto => Object.keys(objeto).includes(propiedad));
  }
  const objetos = [
    { nombre: "Juan", edad: 25, ciudad: "Bogotá" },
    { nombre: "Maria", edad: 30, ciudad: "Medellín" },
    { nombre: "Pedro", edad: 28, ciudad: "Bogotá" }
  ];
  const objetosFiltrados = filtrarPorPropiedad(objetos, "ciudad");
  console.log(objetosFiltrados);

  //34-escribe una funcion contarElementos que reciba un array de strings y retorne un objecto con cantidad de veces que aparece cada string 

  function contarElementos(array: string[]): Record<string, number> {
    const conteo: Record<string, number> = {};
  
    for (const elemento of array) {
      conteo[elemento] = (conteo[elemento] || 0) + 1;
    }
  
    return conteo;
  }
  
  const frutaz = ["manzana", "pera", "manzana", "naranja", "pera", "manzana"];
  const resultadi = contarElementos(frutas);
  
  console.log(resultado);

  //35-  crea una funcion sumarValores que reciba un array de objectos con la propiedad valor y devuelva la suma total de los valores 
  function sumarValores(objetos: any[]): number {
    return objetos.reduce((acumulado, objeto) => acumulado + objeto.valor, 0);
  }
  const objetosConValor = [
    { nombre: "Juan", edad: 25, valor: 100 },
    { nombre: "Maria", edad: 30, valor: 200 },
    { nombre: "Pedro", edad: 28, valor: 150 }
  ];
  const sumaDeValores = sumarValores(objetosConValor);
  console.log(sumaDeValores);
  


  