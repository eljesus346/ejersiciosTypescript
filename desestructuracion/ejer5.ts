//destructuracion en clases pueden estar dentro de ella y fuera de ella .
class Rectangulo{
//ya no hay que escribir en class ancho:number y altura:number solo se hace 
//en el constructor
    constructor(public ancho:number,public alto:number){}

    obtenerDimenciones():{}{
       const {ancho,alto}=this;
        return`ancho:${ancho} y alto:${alto}`;
    }

    obtenerDimenciones2():{}{
        const [ancho,alto]=[this.ancho,this.alto]
        return `ancho:${ancho}, alto:${alto}`;
    }
}
//objecto instancia 
const rectangulito=new Rectangulo(10,20);
//imprimir o ver
console.log(rectangulito.obtenerDimenciones());
//aplicarle destructuracion
//primero al constructor