class Caja<T extends string> {
    public contenido: T;
    
    constructor(contenido: T) {
        this.contenido = contenido;
    }

    obtenerContenido(): T {
        return this.contenido;
    }
}

const cajita = new Caja("hola"); // ✅ Funciona
// const cajitaNumero = new Caja(123); // ❌ Error, solo acepta strings
console.log(cajita.obtenerContenido());
