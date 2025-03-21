//objectos
const persona = {
    nombre: "ana",
    edad: 25,
    pais: "colombia"
}

console.log(persona.nombre);//ana// vamos con destructuracion
//const[]=nombrearreglo;
const { nombre, edad } = persona;
console.log(nombre);//ana

//tener mas nombres o llamarlos de otra manera 

const { nombre: nombrePersona, edad: nuevaEdad } = persona;
console.log(nombrePersona);//ana
console.log(nuevaEdad);//25