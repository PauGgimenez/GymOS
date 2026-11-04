// 04 · ARRAYS EN JAVASCRIPT — ALUMNADO
//
// Resuelve los 10 ejercicios debajo de cada enunciado. Predice el resultado
// antes de ejecutar el código. Usa nombres de variables distintos para que
// puedas ejecutar el archivo completo.
// Puedes utilizar arrays, objetos, condicionales y los métodos vistos en clase.
// No necesitas HTML, prompt, filter, find ni funciones flecha.

// ============================================================
// PARTE A · CINCO EJERCICIOS DIRECTOS
// ============================================================

// 1. Posiciones
// Crea un array con "Yoga", "Boxeo" y "Pilates". Muestra la primera
// actividad, la última sin escribir su índice y el número de actividades.
// Tu código:

const deportes = ["Yoga", "Boxeo", "Pilates"];
console.log("Primera actividad: " + deportes[0]);
console.log("Última actividad: " + deportes[deportes.length - 1]);
console.log("Cantidad de elementos: " + deportes.length);

// 2. Altas y bajas
// Empieza con ["Ana", "Luis"]. Añade "Eva" al final y "Mario" al principio.
// Retira el último nombre, guárdalo y muestra ese nombre y el array final.
// Tu código:
const nombres = ["Ana", "Luis"];

console.log("Array original: " + nombres);

console.log("Añadiendo nombres....");
nombres.push("Eva");
nombres.unshift("Mario");

console.log("Con nombres añadidos: " + nombres);

console.log("Retirando y guardando ultimo elemento......");

const ultimoExtraido = nombres.pop();

console.log(ultimoExtraido);

// 3. Una copia y un cambio
// Dado ["Inicio", "Clientes", "Reservas", "Personal"], copia con slice
// las dos vistas centrales. Después sustituye "Reservas" por "Agenda"
// en el array original con splice. Muestra ambos arrays.
// Tu código:

const apartados = ["Inicio", "Clientes", "Reservas", "Personal"];
console.log("Original: " + apartados);
const dosCentrales = apartados.slice(1, 3);
console.log("Dos elementos centrales: " + dosCentrales);
apartados.splice(2, 1, "Agenda");
console.log("Sustituido: " + apartados);

// 4. Dos listas
// Une ["Mañana", "Tarde"] y ["Noche"] en un array nuevo. Muestra cuántos
// turnos hay. Crea también un texto que los separe con " / " y muestra
// su tipo con typeof.
// Tu código:
const dosTurnos = ["Mañana", "Tarde"];
const turnos = ["Noche"];
const turnosConcat = dosTurnos.concat(turnos);
console.log("Array concatenado: " + turnosConcat);
console.log("Hay " + turnosConcat.length + " turnos");
const textoLimpio = turnosConcat.join(" / ");
console.log(textoLimpio);
console.log("Tipo: " + textoLimpio, typeof textoLimpio);

// 5. Orden numérico
// Ordena [18, 4, 12, 30] de menor a mayor. Muestra el menor y el mayor.
// Invierte después el orden y muestra el array. ¿Por qué sort() sin una
// función de comparación daría un resultado distinto?
// Tu código:
const n = [18, 4, 12, 30];

n.sort(function (a, b) {
  return a - b;
});
console.log(n);
console.log("Menor: " + n[0]);
console.log("Mayor: " + n[n.length - 1]);

console.log("Invertido: " + n.reverse());

/* el método sort() por defecto convierte los elementos a 
cadenas de texto (strings) y los ordena alfabéticamente según su valor Unicode*/

// ============================================================
// PARTE B · CINCO EJERCICIOS PARA PENSAR
// ============================================================

// 6. Plazas de actividades
// Hay [3, 0, 5, 2] plazas libres en cuatro actividades. Con forEach,
// muestra "Actividad 1: 3 plazas", etc., solo si quedan plazas.
// Cuenta cuántas actividades admiten inscripciones y suma las plazas libres.
// Tu código:

// FORMA 1
let plazasLibres = 0;
let admiten = 0;
const plazas = [3, 0, 5, 2];
let j = 1;
console.log("--------- con for normal ---------");
for (let i = 0; i < plazas.length; i++) {
  if (plazas[i] > 0) {
    console.log("Actividad " + j + ": " + plazas[i] + " libres");
    j++;
    admiten++;
    plazasLibres += plazas[i];
  }
}
console.log(admiten + " actividades admiten inscripciones");
console.log("Hay " + plazasLibres + " plazas libres");

// FORMA 2
console.log("--------- Con foreach --------- ");
plazas.forEach(function (plaza, i) {
  if (plaza > 0) {
    console.log("Actividad " + (i + 1) + ": " + plaza + " libres");
  }
});

// 7. Cuotas pendientesstos datos:
// [
//   { cliente: "Nora", importe: 24, pagada: true },
//   { cliente: "Joel", importe: 30, pagada: false },
//   { cliente: "Iris", importe: 18, pagada: false }
// ]
// Con forEach, muestra solo los nombres de quienes deben pagar y calcula
// el importe pendiente total. Comprueba con every si todas están pagadas.
// Tu código:
const cuotas = [
  { cliente: "Nora", importe: 24, pagada: true },
  { cliente: "Joel", importe: 30, pagada: false },
  { cliente: "Iris", importe: 18, pagada: false },
];
let importeTotal = 0;
console.log("Deben pagar: ");

cuotas.forEach(function (p) {
  if (!p.pagada) {
    console.log("- " + p.cliente);
    importeTotal += p.importe;
  }
});
const estanTodasPagadas = cuotas.every(function (cuota) {
  return cuota.pagada;
});
if (estanTodasPagadas) {
  console.log("Están todas pagadas");
} else {
  console.log("No están todas pagadas");
}

console.log("Importe pendiente total: " + importeTotal);

// 8. Reparto de material
// Hay 7 unidades disponibles. Las peticiones, por este orden, son
// [3, 5, 2]. Recorre el array con forEach. Acepta una petición solo si
// cabe con las unidades que queden en ese momento. Muestra si se acepta
// o rechaza cada una y cuántas unidades quedan al final.
// Tu código:
let unidades = 7;
const peticiones = [3, 5, 2];
peticiones.forEach(function (p, i) {
  if (p <= unidades) {
    console.log(i + 1 + "º petición aceptada");
    unidades -= p;
  } else {
    console.log(i + 1 + "º petición rechazada");
  }
});
console.log("Quedan " + unidades + " unidades");

// 9. Datos recibidos como JSON
// Recibes este texto:
// '[{"sala":"A","ocupada":true},{"sala":"B","ocupada":false},{"sala":"C","ocupada":true}]'
// Conviértelo en un array. Con forEach, muestra los nombres de las salas
// ocupadas y cuenta cuántas hay. Después libera la sala A y crea un nuevo
// texto JSON con los datos actualizados.
// Tu código:

const jsonSalas =
  '[{"sala":"A","ocupada":true},{"sala":"B","ocupada":false},{"sala":"C","ocupada":true}]';
let contadorOcu = 0;

const salas = JSON.parse(jsonSalas);

console.log("Salas ocupadas: ");
salas.forEach(function (s) {
  if (s.ocupada) {
    console.log("- Sala:" + s.sala);
    contadorOcu++;
  }
});
console.log("Hay " + contadorOcu + " salas ocupadas");

salas.forEach(function (s) {
  if (s.sala == "A") {
    s.ocupada = false;
  }
});

const textoJson = JSON.stringify(salas);
console.log("JSON actualizado:  " + textoJson);

// 10. Pedidos pendientes
// Usa estos datos:
// [
//   { codigo: "P-3", unidades: 4, enviado: false },
//   { codigo: "P-1", unidades: 2, enviado: true },
//   { codigo: "P-2", unidades: 6, enviado: false }
// ]
// Ordena los pedidos de menor a mayor por unidades. Recorre con forEach
// para mostrar solo los códigos pendientes y sumar sus unidades.
// Comprueba con some si queda algún pedido sin enviar.
// Tu código:
const pedidos = [
  { codigo: "P-3", unidades: 4, enviado: false },
  { codigo: "P-1", unidades: 2, enviado: true },
  { codigo: "P-2", unidades: 6, enviado: false },
];

pedidos.sort(function (a, b) {
  return a.unidades - b.unidades;
});

console.log("Pedidos ordeandos por unidades", pedidos);
console.log(" ");
console.log("Pedidos pendientes: ");


let sumaUnidades = 0
pedidos.forEach(function (pedido) {
    if (!pedido.enviado) {
        console.log("-> " + pedido.codigo);
        sumaUnidades += pedido.unidades
    }
});
console.log("Quedan " + sumaUnidades + " unidades por enviar");

const algunPedido = pedidos.some(function (pedido){
    return !pedido.enviado

})
if (algunPedido) {
    console.log("Queda algun pedido por enviar");
    
} else {
    console.log("No queda ningun pedido por enviar");
    

}

