const nombres:string[]=["ana","carlos","michelle"];
//const [primero,segundo,tercero]=nombres
//console.log(primero);//ana
//console.log(segundo);//carlos
//console.log(tercero);//michelle
function imprimirValores([primero,...resto]:string[]):string{
    return `valor 1:${primero} valor 2:${resto}`;
}

console.log(imprimirValores(nombres));