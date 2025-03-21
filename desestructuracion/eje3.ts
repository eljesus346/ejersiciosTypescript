
//objecto 
const usuario = {
    nombre: "Carlos",
    password: "123"
}
// const{nombre,password}=usuario;
//console.log(nombre);
//funciones
//sin destructuracion
function mostrarInfo(usuario: { nombre: string, password: string }): string {
    return `usuario:${usuario.nombre} y su password es: ${usuario.password}`
}

//llamaria a mi funcion 
//vamos a utilizar destructuracion con mi objecto usuario
function mostrarInfo2({nombre,password}: { nombre: string, password: string }): string {
    return `usuario:${nombre} y su password es: ${password}`;
}

console.log(mostrarInfo(usuario));
console.log(mostrarInfo2(usuario));
