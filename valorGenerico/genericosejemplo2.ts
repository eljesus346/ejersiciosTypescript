

class Coleccion <C extends number> {
    public elementos:  C[] = [];
    agregar(valor: C):void {
        this.elementos.push(valor);
    }
    obtener(a: C): C {
        return this.elementos[a];
    }
    obtenerArreglo():C[]{
        return this.elementos;
    }
   
}

const dato = new Coleccion()
dato.agregar(2);
dato.agregar(3);
dato.agregar(4);
dato.obtener(0);
dato.obtenerArreglo();
