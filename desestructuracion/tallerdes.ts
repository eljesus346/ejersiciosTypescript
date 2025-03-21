//1-Crea una función que reciba un objeto de tipo
//  Libro con propiedades titulo, autor y
//añoPublicacion, y retorne una cadena
//  con esta información utilizando desestructuración.

const Libro = {
    titulo: "El librito",
    autor: "anonimo",
    aniopubli: 2024,
}

function infoLibro1({ titulo, autor, aniopubli }: { titulo: string, autor: string, aniopubli: number }): string {
    return `Libro:${titulo} autor:${autor} Año publicacion:${aniopubli}`;
}

console.log(infoLibro1(Libro));

//2-Dado un arreglo de nombres de colores, 
// usa la desestructuración 
// para obtener el primer y
//el último color del arreglo.

const colores: string[] = ["rojo", "azul", "verde", "amarillo", "morado"];
const [z, g, f, v, k] = colores;

const [pri, segu, terc, cuar, quin] = colores;
console.log(pri);
console.log(quin);

//3-Crea una función que reciba un objeto con 
// propiedades nombre y edad, pero si no se
//proporciona edad, debe asignar un valor por 
//defecto de 18. Usa desestructuración.

function mostrarUsuario({ nombre, edad = 18 }: 
    { nombre: string; edad?: number }): string {
    return `Nombre: ${nombre}, Edad: ${edad}`;
}

console.log(mostrarUsuario({ nombre: "Carlos", edad: 25 }));
console.log(mostrarUsuario({ nombre: "Ana" }));

//4-Crea un objeto persona con las propiedades 
// nombreCompleto y edad. Usa la
//desestructuración para renombrar nombreCompleto
// a nombre y edad a años.







//5-Define una función que reciba un
// objeto con propiedades base y altura y retorne el área
//del triángulo, utilizando desestructuración en los parámetros
function calcularAreaTriangulo({ base, altura }: { base: number; altura: number }): number {
    return (base * altura) / 2;
}
const dimensiones = { base: 10, altura: 5 };
console.log(`El área del triángulo es: ${calcularAreaTriangulo(dimensiones)}`);




 











