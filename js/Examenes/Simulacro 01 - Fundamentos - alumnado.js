// SIMULACRO 01 · FUNDAMENTOS DE JAVASCRIPT — ALUMNADO
// Resuelve los cinco ejercicios debajo de su enunciado.
// Ejecuta el archivo en la consola. No necesitas prompt, HTML ni DOM.
// Utiliza nombres de variables diferentes en cada ejercicio.

// 1. Ventilación de una sala
// Datos: temperatura = 29 y sensorActivo = true.
// Si el sensor está activo y la temperatura supera los 28 grados, muestra
// "Activar ventilación". En cualquier otro caso, "Ventilación apagada".
// Cambia los datos y comprueba ambas situaciones.
// Tu código:
const temperatura = 29; // const temperatura = 26
const sensorActivo = true; // const sensorActivo = false
if (sensorActivo && temperatura > 28) {
  console.log("Activar ventilación");
} else {
  console.log("Ventlación apagada");
}

// 2. Una semana de temperaturas
// Datos: [18, 22, 30, 27, 33]. Calcula la media y cuenta cuántos días
// llegaron a 30 grados o más. Si fueron al menos dos, muestra también
// "Semana calurosa". Prueba después con otros valores.
// Tu código:
const temperaturas = [18, 22, 30, 27, 33];
let diasMas30 = 0;
media = 0;

temperaturas.forEach((temp) => {
  media += temp;
  if (temp >= 30) {
    diasMas30++;
  }
});

media /= temperaturas.length;

console.log("La media de temperaturas de esta semana es: " + media);
console.log(diasMas30 + " dias con mas de 30 grados");

if (diasMas30 >= 2) {
  console.log("Semana calurosa");
}

// 3. Selección de titulares
// Datos: ["  Festival de jazz ", "NUEVA biblioteca",
// "  Taller de Jazz", "Exposición de fotografía"].
// Crea otro array con los titulares que contengan JAZZ, aunque cambien
// las mayúsculas o haya espacios en los extremos. Guárdalos sin esos
// espacios y en mayúsculas. Muestra cuántos hay y únelos con " | ".
// Tu código:
const eventos = [
  "  Festival de jazz ",
  "NUEVA biblioteca",
  "  Taller de Jazz",
  "Exposición de fotografía",
];
let contador = 0;

const eventosLimpio = [];
const eventosJazz = [];
eventos.forEach((e) => {
  eventosLimpio.push(e.trim().toUpperCase());
});

eventosLimpio.forEach((e) => {
  if (e.includes("JAZZ")) {
    eventosJazz.push(e);
    contador++;
  }
});

console.log("Hay " + contador + " eventos de jazz, " + eventosJazz.join(" | "));

// 4. Concurso de fotografía
// Cada puntuación es jurado × 2 + publico. Las fotos descalificadas no
// participan. Encuentra quien gana, muestra su nombre y puntuación, y
// cuenta cuántas fotos han participado. Si hay empate, gana quien aparece
// antes en el array.
const fotografias = [
  { autor: "Ana", jurado: 7, publico: 12, descalificada: false },
  { autor: "Bruno", jurado: 9, publico: 8, descalificada: false },
  { autor: "Carla", jurado: 10, publico: 15, descalificada: true },
  { autor: "Diego", jurado: 6, publico: 10, descalificada: false },
];
// Tu código:

const validos = [];
const puntuaciones = [];
let participaciones = 0;

fotografias.forEach((foto) => {
  participaciones++;
  if (!foto.descalificada) {
    validos.push(foto);
    puntuaciones.push(foto.jurado * 2 + foto.publico);
  }
});
console.log("Han participado " + participaciones + " autores");

console.log("CLASIFICAIÓN SIN DESCALIFICADOS");
validos.forEach((a, i) => {
  console.log(i + 1 + "º Autor: " + a.autor + ", puntuación -> " + puntuaciones[i] + " puntos");
});
console.log("===== GANADOR =====");
console.log(validos[0].autor + " (aparece antes)");

// 5. Datos de una colección
// Convierte el texto JSON en un array. Ordena las piezas de mayor a menor
// antigüedad y muestra la primera. Comprueba si hay alguna de más de 100
// años. Convierte el array ordenado de nuevo a JSON y muestra su tipo.
const textoJSONE5 =
  '[{"pieza":"Mapa","antiguedad":80},{"pieza":"Reloj","antiguedad":140},{"pieza":"Cámara","antiguedad":60}]';
// Tu código:

const piezas = JSON.parse(textoJSONE5);
piezas.sort(function (a, b) {
  return b.antiguedad - a.antiguedad;
});
console.log("PIEZAS MAS ANTIGÜAS");

piezas.forEach(function (p, i) {
  console.log(i + 1 + ". " + p.pieza + ", " + p.antiguedad + " años");
});

console.log("- Pieza mas antigüa: " + piezas[0].pieza + " con " + piezas[0].antiguedad + " años",);

const json = JSON.stringify(piezas);
console.log(piezas, typeof piezas);

// Compras con presupuesto
// Tienes 20 euros y los productos aparecen en este orden:

// Recorre los precios con while. Compra cada producto si te alcanza el dinero. Cuando llegues a uno que no
// puedas pagar, detén el recorrido con break: no debes probar los productos siguientes.
// Muestra cuántos productos has comprado y cuánto dinero queda. Con estos datos, el producto de 9 euros detiene la compra.
const precios = [6, 7, 9, 4, 6];
let sinDinero = false;
const dinero = 20;
comprado = 0;
let i = 0;
while (!sinDinero) {
  comprado += precios[i];
  i++;
  console.log(i + ". Llevas gastado: " + comprado);
  if (comprado > dinero || i == precios.length) {
    sinDinero = true;
  }
}

console.log("Has comprado " + (i - 1) + " productos");
if (i == precios.length) {
  console.log("Has comprado todo");
} else {
  console.log(
    "No puedes comprar mas productos, el siguiente costaba " + precios[i - 1] + " y se te quedaría con " + comprado);
}
console.log("Te quedan: " + (dinero - (comprado - precios[i - 1])) + "€");
