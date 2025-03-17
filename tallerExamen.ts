//crea una funcion login que reciba un nombre de usuario y una contraseña
//la funcion debe validar que ambos campos no esten vacios y que la contraseña
//tenga almenos 8 caracteres
//si la validacion es correcta, debe volver un mensaje "inicio de sesion exitoso".
//de lo contrario  "usuario o contraseña incorrectos"

function login<Z extends string>(usuario: Z, contraseña: Z): string {
    if (usuario.length > 0 && contraseña.length > 8) {
        return "inicio de sesion exitoso";
    } else {
        return "usuario o contraseña incorrectos";
    }
}
console.log(login("jesus", "123"));
console.log(login("h", "123456789"));

//Escribe una función calcularIMC que reciba el peso (kg) y la altura (m) de una persona.
//La función debe calcular el IMC con la fórmula IMC = peso / (altura * altura).
//Devuelve un mensaje indicando la categoría de la persona: bajo peso (<18.5), normal (18.5-24.9), sobrepeso (25-29.9) o obesidad (≥30).
//Puntos extra si utiliza un arreglo de objetos.

function calcularIMC(peso: number, altura: number): string {
    let imc = peso / (altura * altura);
    if (imc < 18.5) {
        return "bajo peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "sobrepeso";
    } else {
        return "obesidad";
    }
}
console.log(calcularIMC(22, 2.00));
console.log(calcularIMC(60, 1.80));
console.log(calcularIMC(100, 1.80));

//Implementa una función analizar Temperaturas que reciba un arreglo de objetos donde cada objeto represente una ciudad con su temperatura en Celsius.
//Cada objeto debe tener las propiedades { ciudad: string, temperatura: number }.
//La función debe devolver un nuevo objeto con: 
//La ciudad más caliente.
//La ciudad más fría.
//El promedio de temperatura de todas las ciudades.  typescript 

type Ciudad = {
    ciudad: string;
    temperatura: number;
};

function analizarTemperaturas(datos: Ciudad[]): {
    ciudadMasCaliente: Ciudad;
    ciudadMasFria: Ciudad;
    promedioTemperatura: number;
} {
    if (datos.length === 0) {
        throw new Error("El arreglo de datos no puede estar vacío");
    }

    let ciudadMasCaliente = datos[0];
    let ciudadMasFria = datos[0];
    let sumaTemperaturas = 0;

    for (const ciudad of datos) {
        if (ciudad.temperatura > ciudadMasCaliente.temperatura) {
            ciudadMasCaliente = ciudad;
        }
        if (ciudad.temperatura < ciudadMasFria.temperatura) {
            ciudadMasFria = ciudad;
        }
        sumaTemperaturas += ciudad.temperatura;
    }

    const promedioTemperatura = sumaTemperaturas / datos.length;

    return {
        ciudadMasCaliente,
        ciudadMasFria,
        promedioTemperatura,
    };
}

// Ejemplo de uso
const ciudades: Ciudad[] = [
    { ciudad: "Bogotá", temperatura: 15 },
    { ciudad: "Medellín", temperatura: 22 },
    { ciudad: "Cali", temperatura: 30 },
    { ciudad: "Pasto", temperatura: 10 }
];

console.log(analizarTemperaturas(ciudades));
