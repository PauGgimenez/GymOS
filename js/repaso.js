// ============================================================
// 1. CONSOLA, COMENTARIOS, VARIABLES Y TIPOS DE DATOS
// ============================================================

// Comentario de una sola línea
/* Comentario de
   varias líneas */

// --- Declaración de variables ---
var antigua = "no se usa";      // En desuso
const constante = "no cambia";  // Constante: no se puede reasignar (daría error)
let incidencia = "abierta";     // Variable: permite cambiar su valor más adelante
incidencia = "cerrada";


// --- Tipos de datos primitivos y typeof ---
const nombre = "Juan";          // string (texto)
const edad = 30;                // number (entero)
const altura = 1.75;            // number (decimal / float)
const esEstudiante = true;      // boolean (true o false)


console.log(nombre, typeof nombre);             // "string"
console.log(edad, typeof edad);                 // "number"
console.log(esEstudiante, typeof esEstudiante); // "boolean"

let nodato;
console.log(nodato, typeof nodato); // undefined (declarada pero sin valor asignado)

let nulo = null;
console.log(nulo, typeof nulo);     // "object" (fallo histórico de JS, representa valor nulo)

const tokenUsuario = Symbol("id_unico");       // symbol (identificador único)
const numeroGrande = 9876543210987654321n;     // bigint (termina en 'n', para enteros enormes)
console.log(typeof tokenUsuario, typeof numeroGrande);

// --- Tipado dinámico ---
// Una variable declarada con 'let' puede cambiar de tipo de dato:
let datoCambiante = 20;      // Ahora es number
datoCambiante = "veinte";    // Ahora pasa a ser string

// ============================================================
// 2. OPERADORES
// ============================================================

// --- Aritméticos y prioridad ---
console.log(17 + 5);  // Suma: 22
console.log(17 - 5);  // Resta: 12
console.log(17 * 5);  // Multiplicación: 85
console.log(17 / 5);  // División: 3.4
console.log(17 % 5);  // Resto de la división (módulo): 2 (útil para saber pares: n % 2 === 0)
console.log(3 ** 4);  // Potencia (3 elevado a 4): 81

// Los paréntesis alteran la prioridad matemática:
console.log(2 + 3 * 4);   // 14 (primero multiplica)
console.log((2 + 3) * 4); // 20 (primero suma el paréntesis)

// --- Asignación, incremento y decremento ---
let caja = 10;
caja += 5; // Equivale a: caja = caja + 5 (15)
caja -= 3; // Equivale a: caja = caja - 3 (12)
caja *= 2; // Equivale a: caja = caja * 2 (24)
caja /= 4; // Equivale a: caja = caja / 4 (6)

let reservas = 8;
reservas++; // Incrementa en 1 (9)
reservas--; // Resta 1 (8)


// --- Comparación ---
console.log(10 === "10"); // false -> Estricto: compara valor Y tipo de dato (recomendado)
console.log(10 !== "10"); // true  -> Estricto: ¿son de distinto valor o distinto tipo?
console.log(10 == "10");  // true  -> Débil: compara SOLO el valor (convierte el tipo)
console.log(10 != "10");  // false -> Débil: compara SOLO el valor
console.log(18 >= 18);    // true  -> Mayor o igual (también existen >, <, <=)

// --- Lógicos (&&, ||, !) ---
const tieneReserva = true;
const haPagado = false;

// && (AND): Devuelve true SOLO si AMBAS condiciones se cumplen
console.log(tieneReserva && haPagado); // false

// || (OR): Devuelve true si AL MENOS UNA condición se cumple
console.log(tieneReserva || haPagado); // true

// ! (NOT): Invierte el valor booleano
console.log(!tieneReserva); // false

// Valores Falsy (se evalúan como false: 0, "", null, undefined, NaN) y Truthy (el resto):
console.log(!0);      // true (porque 0 es falsy, su contrario es true)
console.log(!"");     // true (cadena vacía es falsy)
console.log(!"hola"); // false (texto con contenido es truthy)

// --- Operador Ternario ---
// Estructura: condicion ? valorSiTrue : valorSiFalse
const documento = true;
const validado = documento ? "Documento validado" : "Documento no validado";
console.log(validado);


/// ============================================================
// 3. CADENAS DE TEXTO (STRINGS) Y SUS MÉTODOS
// ============================================================
// Nota: Los métodos de string NO modifican el texto original, devuelven uno nuevo.

// --- Concatenación y Plantillas (Template Literals) ---
console.log("Hola, " + nombre + "!"); // Concatenación clásica con +
console.log(`Hola, ${nombre}!`);      // Template literals (comillas invertidas ` ` y ${})

// Las comillas invertidas respetan los saltos de línea sin usar \n:
const mensajeMultilinea = `Actividad: Yoga
Sala: Norte
Hora: 18:00`;

// --- Propiedades y acceso a caracteres ---
const palabraDemo = "Juan";
console.log(palabraDemo.length);                  // 4 (longitud; los espacios también cuentan)
console.log(palabraDemo[0]);                      // "J" (primer carácter, índice 0)
console.log(palabraDemo.charAt(0));               // "J" (alternativa con método)
console.log(palabraDemo[palabraDemo.length - 1]); // "n" (último carácter dinámico)

// --- Búsqueda dentro de cadenas ---
const avisoEntrega = "Paquete listo para recoger";
console.log(avisoEntrega.includes("Paquete")); // true (devuelve booleano si existe)
console.log(avisoEntrega.indexOf("Paquete"));  // 0 (devuelve el índice donde empieza)
console.log(avisoEntrega.indexOf("urgente"));  // -1 (devuelve -1 cuando NO lo encuentra)

// --- Transformación, extracción y reemplazo ---
console.log(palabraDemo.toUpperCase()); // "JUAN" (a mayúsculas)
console.log(palabraDemo.toLowerCase()); // "juan" (a minúsculas, útil para comparar textos)

const codigo = "  SALA-204  ";
const codigoLimpio = codigo.trim();     // "SALA-204" (elimina espacios al inicio y al final)
console.log(codigoLimpio.slice(0, 4));  // "SALA" (extrae desde índice 0 hasta el 4 sin incluirlo)
console.log(codigoLimpio.slice(5));     // "204" (sin 2º parámetro, extrae hasta el final)

const frase = "sala norte sala sur";
console.log(frase.replace("sala", "aula"));    // "aula norte sala sur" (solo cambia la 1ª aparición)
console.log(frase.replaceAll("sala", "aula")); // "aula norte aula sur" (cambia todas)

// Encadenamiento de métodos (ejecutar varios seguidos en una línea):
const textoPreparado = "   yoga para principiantes   "
  .trim()
  .toUpperCase()
  .replace("PRINCIPIANTES", "INICIO");
console.log(textoPreparado); // "YOGA PARA INICIO"


// ============================================================
// 4. CONDICIONALES (IF / ELSE IF / ELSE Y SWITCH)
// ============================================================

// --- if / else if / else ---
const puntuacion = 82;

if (puntuacion < 0 || puntuacion > 100) {
  console.log("Puntuación no válida");
} else if (puntuacion < 50) {
  console.log("Nivel Inicial");
} else if (puntuacion < 80) {
  console.log("Nivel Intermedio");
} else {
  console.log("Nivel Avanzado");
}

// --- switch ---
// Evalúa casos exactos (usa comparación estricta ===). Requiere 'break' en cada caso.
const modoEnvio = "express";
let costeEnvio;

switch (modoEnvio) {
  case "normal":
    costeEnvio = 4;
    break;
  case "express":
    costeEnvio = 8;
    break;
  case "recogida":
    costeEnvio = 0;
    break;
  default:
    costeEnvio = -1; // Si no coincide con ninguno de los anteriores
    console.log("Modo de envío no válido");
}


// ============================================================
// 5. ARRAYS, OBJETOS Y JSON
// ============================================================

// --- Creación y acceso ---
const deportes = ["Yoga", "Boxeo", "Pilates"];
console.log(deportes[0]);                   // "Yoga" (primero)
console.log(deportes[deportes.length - 1]); // "Pilates" (último)
console.log(deportes.length);               // 3 (cantidad de elementos)

// --- Añadir y retirar elementos en los extremos ---
const colaReparaciones = ["Proyector", "Impresora"];
colaReparaciones.push("Pantalla");   // Añade al FINAL
colaReparaciones.unshift("Router");  // Añade al PRINCIPIO

const ultimo = colaReparaciones.pop();     // Extrae y elimina el ÚLTIMO ("Pantalla")
const primero = colaReparaciones.shift();  // Extrae y elimina el PRIMERO ("Router")

// --- Copiar (slice) y modificar/extraer (splice) ---
const etapas = ["Entrada", "Registro", "Revisión", "Pago", "Salida"];

// slice(inicio, fin): Copia un tramo SIN modificar el array original (fin no incluido)
const etapasCentrales = etapas.slice(1, 4); // ["Registro", "Revisión", "Pago"]

// splice(inicio, cantidadABorrar, nuevosElementos...): SÍ modifica el array original
const extraidos = etapas.splice(2, 1);        // Elimina 1 elemento en el índice 2 ("Revisión")
etapas.splice(1, 1, "Agenda");                // En índice 1, borra 1 ("Registro") y mete "Agenda"

// --- Unir arrays (concat) y convertir a texto (join) ---
const tareasManana = ["Abrir edificio", "Revisar equipos"];
const tareasTarde = ["Cerrar aulas", "Activar alarma"];
const todasLasTareas = tareasManana.concat(tareasTarde); // Une ambos arrays en uno nuevo
const tareasTexto = todasLasTareas.join(" - ");          // Crea un string separando con " - "

// --- Ordenación (sort y reverse) ---
const nombreSalas = ["Taller", "Archivo", "Biblioteca"];
nombreSalas.sort();    // Orden alfabético: ["Archivo", "Biblioteca", "Taller"]
nombreSalas.reverse(); // Invierte el orden: ["Taller", "Biblioteca", "Archivo"]

// Para números, sort() por defecto falla porque los ordena como texto (Unicode: 11 va antes que 3).
// Se necesita una función de comparación:
const tiempos = [6, 42, 11, 3];
tiempos.sort(function (a, b) {
  return a - b; // De menor a mayor (para mayor a menor sería: b - a)
});

// --- Recorrer con forEach ---
const equipos = ["Portátil", "Tableta", "Monitor"];

// Con función tradicional:
equipos.forEach(function (equipo, i) {
  console.log(`Equipo ${i + 1}: ${equipo}`);
});

// Con función flecha (equivalente más corto):
equipos.forEach((equipo, i) => console.log(`Equipo ${i + 1}: ${equipo}`));

// --- Comprobaciones con every y some ---
const nivelesBateria = [80, 55, 21];

// every: Devuelve true solo si TODOS los elementos cumplen la condición
const todosCargados = nivelesBateria.every(function (nivel) {
  return nivel >= 20;
}); // true

// some: Devuelve true si AL MENOS UNO cumple la condición
const algunoCritico = nivelesBateria.some(function (nivel) {
  return nivel < 15;
}); // false

// --- Arrays de Objetos ---
const pedidos = [
  { codigo: "P-3", unidades: 4, enviado: false },
  { codigo: "P-1", unidades: 2, enviado: true },
  { codigo: "P-2", unidades: 6, enviado: false }
];

// Ordenar objetos por una propiedad numérica:
pedidos.sort(function (a, b) {
  return a.unidades - b.unidades;
});

// Acceder y filtrar propiedades dentro de forEach:
let unidadesPendientes = 0;
pedidos.forEach(function (pedido) {
  if (!pedido.enviado) { // Equivale a: pedido.enviado === false
    unidadesPendientes += pedido.unidades;
  }
});

// --- Conversión JSON ---
const jsonRecibido = '[{"sala":"A","ocupada":true},{"sala":"B","ocupada":false}]';

// JSON.parse(): Convierte texto JSON en un array/objeto de JavaScript manipulable
const salasArray = JSON.parse(jsonRecibido);
salasArray[0].ocupada = false; // Modificamos el objeto normalmente

// JSON.stringify(): Convierte un array/objeto de JavaScript en texto JSON
const nuevoJson = JSON.stringify(salasArray);


// ============================================================
// 6. BUCLES (FOR, FOR...OF, WHILE, DO...WHILE)
// ============================================================

// --- Bucle for clásico ---
for (let mesa = 1; mesa <= 4; mesa++) {
  console.log("Revisar mesa: " + mesa);
}

// Recorrer un array usando su índice (útil cuando necesitas la posición i):
const edificios = ["Central", "Anexo", "Biblioteca"];
for (let i = 0; i < edificios.length; i++) {
  console.log(`Edificio ${i + 1}: ${edificios[i]}`);
}

// Recorrer un texto o array al revés (desde el último índice hasta el 0):
const palabraOriginal = "SALA";
let palabraInvertida = "";
for (let i = palabraOriginal.length - 1; i >= 0; i--) {
  palabraInvertida += palabraOriginal[i];
}
console.log(palabraInvertida); // "ALAS"

// --- Bucle for...of ---
// Toma el valor directamente sin usar índices (sirve para arrays y para strings):
const destinos = ["Almacén", "Recepción", "Oficina"];
for (const destino of destinos) {
  console.log("Enviar a: " + destino);
}

const textoVocales = "deporte activo";
let contadorVocales = 0;
for (const letra of textoVocales) {
  if ("aeiou".includes(letra)) {
    contadorVocales++;
  }
}

// --- Bucle while ---
// Se ejecuta mientras la condición sea true (cuando no sabemos cuántas vueltas dará):
let ahorro = 0;
let semanas = 0;
while (ahorro < 25) {
  semanas++;
  ahorro += 6;
}
console.log(`Objetivo alcanzado en la semana ${semanas} con ${ahorro}€`);

// --- Bucle do...while ---
// Garantiza que el bloque se ejecute AL MENOS UNA VEZ antes de comprobar la condición:
let intentos = 0;
do {
  intentos++;
  console.log("Intento número: " + intentos);
} while (intentos < 3);

// --- Bucles anidados (Ejemplo: Pirámide centrada del Ejercicio 10 de Bucles) ---
const alturaPiramide = 5;
const caracter = "#";

for (let fila = 1; fila <= alturaPiramide; fila++) {
  let linea = "";

  // 1º bucle interno: añade los espacios a la izquierda para centrar
  for (let s = 1; s <= alturaPiramide - fila; s++) {
    linea += " ";
  }
  // 2º bucle interno: añade los caracteres impares (1, 3, 5, 7, 9)
  for (let c = 1; c <= 2 * fila - 1; c++) {
    linea += caracter;
  }

  console.log(linea);
}