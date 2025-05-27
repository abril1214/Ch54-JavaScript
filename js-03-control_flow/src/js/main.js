/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.

*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    } else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias; +recomendable
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/

/*
    Crear un arrow function que reciba el valor de edad.
    Si la edad es mayor o igual a 18, la función debe retornar el mensaje: eres mayor de edad.

    En cas contrario, retornar el mensaje: eres menor de edad.
    -Realizar la versión de if else SIN usar el bloque de código
*/
const calcularEdad = (edad) => {
    if (edad >= 18) return "Eres mayor de edad.";
    else return "Eres menor de edad.";
};

const resultado = calcularEdad(18);
console.log(resultado);


/*
 Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o igual a 18 y menor o igual a 30
                 ( evalur con 18 Y(&&) evaluar con 30        )
 la función debe retornar el mensaje "Tu luchador es Místico".
 Si es mayor o igual a 31 el mensaje "Tu luchador es el perro Aguayo".
 Si es menor a 18 el mensaje "Tu luchador es Penta"
*/
const verificarEdad = (edad) => {
    if (edad >= 18 && edad <= 30) return "Tu luchador es místico.";
    else if (edad >= 31) return "Tu luchador es el perro guayo.";
    else return "Tu luchador es penta.";
};
console.log(verificarEdad(25));

// ------------------- Bloque de código
{
    let myVarLet = 30;
    const myVarConst = 40;
    var myVarVar = 50;
    console.log(myVarLet, myVarConst, myVarVar) // 30,40,50
    {
        let myVarLet = 100;
        const myVarConst = 110;
        var myVarVar = 120;
        console.log(myVarLet, myVarConst, myVarVar) // 100,110,120
    }
    console.log(myVarLet, myVarConst, myVarVar) // 30,40,120
}


// ======================== Ejercicios mentales
let active = false
if (active === true); { // El ; mata la sentencia lo acaba, entonces el if y el bloque de código del console.log son cosas distintas. Los condicionales pueden o no llevar {}
    console.log("Esta activo")
}
console.log("Fin del programa");

//------------------- #2
active = false;
if (active === true)
    console.log("Está activo"); // (x) Esta no se imprime porque no cumple con el condicional; los if solo cumplen con 1 sola condición
console.log("Tiene autorización"); // (|) se imprime porque es una línea de código independiente

console.log("Fin del programa"); // (|) se imprime porque es una línea de código independiente


// -------------- #3
active = false;
if (active); console.log("Está activo"); // (|) se imprime
// else console.log("No está activo"); // (x) unexpected token else: No se imprime porque el else no puede estar solo; tiene un error de síntasis porque le falta el if (lo matamos con el ;)
// console.log("Fin del programa"); //(x) tampoco se imprime porque el else ya le dió en la madre jajaja



//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Para comparar la condicional switch usa el operador estricto ===

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/
const evaluarNombre = (nombre) => {
    let resultado;
    switch (nombre) {
        case "Lua":
            resultado = "Es de Abril";
            break;
        case "Borrego":
        case "Besito":
        case "Frijol":
        case "Paco":
            resultado = "Es de Yessica";
            break;
        case "Milo":
            resultado = "Es de Carlos";
            break;
        case "Cuchara":
            resultado = "Es de Ricardo";
            break;
        default:
            resultado = "No se sabe de quién es";

    }
    return resultado;
}
console.log(evaluarNombre("Lua")); // Es de Abril
console.log(evaluarNombre("Milo")); // "No se sabe de quién es"; si es que no se ponen los breaks
console.log(evaluarNombre("Borrego"));
const nombreMascota = "Lua";



/**
 * Función que reciba la velocidad de un ventilador y devuelva el mensaje
 * de la velocidad del ventilador en:
 * Velocidad 0: Apagado
 * Velocidad 1: Baja
 * Velocidad 2: Media
 * Velocidad 3: Alta
 * Cualquier otro valor: Velocidad desconocida
 * @param {number} velocidad
 * @returns {string} mensaje
 * 
 * Realizar dos versiones, una versión con switch y otra con if-else
 */

const saberVelocidad = (velocidad) => {
    let opc;
    if (velocidad === 0) opc = "Apagado.";
    else if (velocidad === 1) opc = "Baja.";
    else if (velocidad === 2) opc = "Media.";
    else if (velocidad === 3) opc = "Alta.";
    return opc;
};
console.log(saberVelocidad(1));


// ---------- # Versión 2

const obtenerVelocidad = (velocidad) => {
    let resultado;
    switch (velocidad) {
        case 0:
            resultado = "Apagado";
            break;
        case 1:
            resultado = "Baja";
            break;
        case 2:
            resultado = "Media";
            break;
        case 3:
            resultado = "Alta";
            break;
        default:
            resultado = "El ventilador no está conectado";
    };
    return resultado;
};
console.log(obtenerVelocidad(4));


// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 
*/
const pagoTarjetaDeCredito = (estaPagado) => {
    let msj;
    if (estaPagado) {
        msj = "La tarjeta ha sido pagada";
    } else {
        msj = "La tarjeta ha sido pagada";
    }
    return msj;
}
console.log(pagoTarjetaDeCredito(true));
console.log(pagoTarjetaDeCredito(false));


// -----------versión ternaria
const verificarPagoDeTarjetaUsandoTernario = (estaPagado) => {
    return estaPagado ? "La tarjeta ha sido pagada" : "La tarjeta ha sido pagada";
}
console.log(verificarPagoDeTarjetaUsandoTernario(true)); // La tarjeta ha sido pagada
console.log(verificarPagoDeTarjetaUsandoTernario(false)); // La tarjeta no ha sido pagada

/*
Dado un número entero, imprimir:

"Negativo": si el número es menor a 0.
"Cero": si el numero es 0.
"Positivo" si el número es mayor a cero pero menor a 100.
"Grande" si el número es mayor o igual a 100.
- Realizar una función que reciba el número y retorne el mensaje.
- El retorno debe ser impreso en la consola.
- Realizar una versión if-else, switch y operador ternario.
*/
const validarEImprimir = (numero) => {
    let opc;
    if (numero < 0) mensaje = "Negativo.";
    else if (numero === 0) opc = "Cero.";
    else if (numero >= 1 && numero < 100) opc = "Positivo.";
    else if (numero >= 100) opc = "Grande.";
    return opc;
};
console.log(validarEImprimir(10));


// -----------#2
const validarSwitch = (numero) => {
    let mensaje;
    switch (true) {
        case (numero < 0):
            mensaje = "Negativo.";
            break;
        case (numero === 0):
            mensaje = "Cero.";
            break;
        case (numero > 0 && numero < 100):
            mensaje = "Positivo.";
            break;
        case (numero >= 100):
            mensaje = "Grande.";
            break;
        default:
            mensaje = "No sé, aiuda.";
    }
    return mensaje;
};
console.log(validarSwitch(150));


// -------------#3
const validarTernario = (numero) =>
    numero < 0 ? "Negativo." :
    numero === 0 ? "Cero." :
    numero < 100 ? "Positivo." :
    "Grande.";

console.log(validarTernario(5));

/**
 *  Función que reciba la edad de una persona y devuelva el mensaje:
 *  Si la edad es mayor o igual a 18 años: Eres mayor de edad
 *  En caso contraio: Eres menor de edad
 *  @param {number} edad
 *  @returns {string} mensaje
 */




// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.

*/


