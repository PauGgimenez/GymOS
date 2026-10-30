console.log("Hola, este es un mensaje de repaso en JavaScript.");
console.log(5);
console.log(5 + 23);

var antigua = "no se usa"; // desuso
const constante = "no cambia"; // variable que no puede cambiar
let incidencia = "abierta"; // variable que puede cambiar

console.log(antigua);
console.log(constante);
console.log(incidencia);

// ----- TIPOS DE DATOS -----
const nombre = "Juan"; // string
const edad = 30; // Integer
const altura = 1.75; // Float
const esEstudiante = true; // Boolean

console.log(nombre, typeof nombre); // typeof nos dice el tipo de dato
console.log(edad, typeof edad);
console.log(altura, typeof altura);
console.log(esEstudiante, typeof esEstudiante);

let nodato;
console.log(nodato, typeof nodato); // undefined

let nulo = null;
console.log(nulo, typeof nulo); // object (es un error de JS, debería ser null)

// ----- OPERADORES DE COMPARACIÓN -----
console.log(10 === "10"); // false, === compara valor y tipo de dato
console.log(10 !== "10"); // true, !== compara valor y tipo de dato

console.log(10 == "10"); // true, == compara solo el valor
console.log(10 != "10"); // false, != compara solo el valor

// Concatenación igual que en java
let mensaje = "Hola, " + nombre + "!";
console.log(mensaje);
// Otra opción
console.log(`Hola, ${nombre}!`); // Template literals, permite usar variables dentro de un string

// ----- PROPIEDADES -----
const nombre2 = "Juan";
console.log(nombre2.length); // 4, nos dice la longitud de un string
console.log(nombre2[0]); // J, nos da el primer caracter del string
console.log(nombre2.charAt(0)); // J, nos da el primer caracter del string
console.log(nombre2[nombre2.length - 1]); // n, nos da el último caracter del string

const avisoEntrega = "Paquete listo para recoger";
console.log(avisoEntrega.includes("Paquete")); // true, nos dice si el string contiene la palabra "Paquete"
console.log(avisoEntrega.indexOf("Paquete")); // 0, nos dice la posición de la palabra "Paquete" en el string

console.log(nombre2.toUpperCase()); // JUAN, convierte a mayúsculas
console.log(nombre2.toLowerCase()); // juan, convierte a minúsculas

const codigo = " 12345 ";
console.log(codigo);
const codigoSinEspacios = codigo.trim(); // elimina espacios al inicio y al final del string
console.log(codigoSinEspacios);
console.log(codigoSinEspacios.slice(0, 2)); // 12, nos da los primeros 2 caracteres del string

//replace, reemplaza un valor por otro
const mensaje2 = "Hola, Juan!";
console.log(mensaje2.replace("Juan", "Pedro")); // Hola, Pedro!
console.log(mensaje2.replaceAll("a", "o")); // Holo, Juon!

const documento = true;
const validado = documento ? "Documento validado" : "Documento no validado"; // operador ternario, si validado es true derecha ? sino izquierda :
console.log(validado); // Documento validado

// --------------- ARRAYS --------------------

const lecturas = [];
lecturas[0] = 12;
lecturas[2] = 16;
console.log(lecturas);

const colaReparaciones = ["Proyector", "Impresora"];
colaReparaciones.push("Pantalla"); /* Añade elemento al final */
colaReparaciones.unshift("Router"); /* Añade al principio */
console.log(colaReparaciones);

const ultimaRetirada =
  colaReparaciones.pop(); /* selecciona y quita el ultimo elemento */
const primerRetirada =
  colaReparaciones.shift(); /* selecciona y quita el primer elemento*/
console.log(ultimaRetirada);
console.log(primerRetirada);
console.log(colaReparaciones);

// Slice y splash

const etapas = ["Entrada", "Registro", "Revisión", "Pago", "Salida"];

const etapasCentrales = etapas.slice(
  1,
  4,
); /* Imprime en elemento en indice uno incluido y hasta el 4 no incluido */
console.log(etapas);
console.log(etapasCentrales);

const retiradas = etapas.splice(2, 1); /* Lo extrae del array*/
console.log(retiradas);

const tareasMañana = ["Abrir edificio", "Revisar equipos"];
const tareasTarde = ["Cerrar aulas", "Activar alarma"];
const concatArr = tareasMañana.concat(tareasTarde); /* Concatenar arrays */
console.log(concatArr);

const tareasLimpio =
  concatArr.join(" - "); /* Unir elementos del array por un elemento indicado */
console.log(tareasLimpio);

const nombreSalas = ["Taller", "Archivo", "Biblioteca"];
nombreSalas.sort();
console.log(nombreSalas);
nombreSalas.reverse();
console.log(nombreSalas);

const tiempos = [6, 42, 11, 3];
tiempos.sort();
console.log(tiempos); /* los ordena solo por el primer digitos de los numeros */

tiempos.sort(function (a, b) {
  return a - b;

});

console.log(tiempos);

// foreach

const equipos = ["Portatil", "Tableta", "Monitor"]
equipos.forEach(function(equipo, i) {
    console.log(`Equipo ${i + 1}: ${equipo}`)
    /* console.log("Equipo " + i + " : "+ equipo) */ 


})

// every y some

const nivelesBateria = [80, 55, 21];

const todosCargados = nivelesBateria.every(function (nivel) {
    return nivel >= 20;
})
console.log("Todos con bateria suficiente: " + todosCargados)

const todosNoCargados = nivelesBateria.every(function (nivel) {
    return nivel < 20;
})
console.log("Todos con bateria suficiente: " + todosNoCargados)
