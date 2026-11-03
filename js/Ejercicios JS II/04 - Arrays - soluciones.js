// 04 · ARRAYS EN JAVASCRIPT — SOLUCIONES
// Una solución posible para cada uno de los 10 ejercicios.

// 1. Posiciones
// length cuenta tres elementos, pero el último índice es 2: por eso restamos 1.
const actividadesE1 = ["Yoga", "Boxeo", "Pilates"];
console.log("Primera:", actividadesE1[0]);
console.log("Última:", actividadesE1[actividadesE1.length - 1]);
console.log("Cantidad:", actividadesE1.length);

// 2. Altas y bajas
// pop devuelve el elemento que quita; lo guardamos para mostrarlo después.
const nombresE2 = ["Ana", "Luis"];
nombresE2.push("Eva");
nombresE2.unshift("Mario");
const retiradoE2 = nombresE2.pop();
console.log("Retirado:", retiradoE2);
console.log("Nombres:", nombresE2);

// 3. Una copia y un cambio
// slice copia los índices 1 y 2; splice cambia el array original en el índice 2.
const vistasE3 = ["Inicio", "Clientes", "Reservas", "Personal"];
const centralesE3 = vistasE3.slice(1, 3);
vistasE3.splice(2, 1, "Agenda");
console.log("Copia:", centralesE3);
console.log("Original modificado:", vistasE3);

// 4. Dos listas
// concat produce otro array; join lo convierte en texto. Sus length contarían cosas distintas.
const turnosDiaE4 = ["Mañana", "Tarde"];
const turnosNocheE4 = ["Noche"];
const todosTurnosE4 = turnosDiaE4.concat(turnosNocheE4);
const textoTurnosE4 = todosTurnosE4.join(" / ");
console.log("Cantidad:", todosTurnosE4.length);
console.log("Texto:", textoTurnosE4);
console.log("Tipo:", typeof textoTurnosE4);

// 5. Orden numérico
// sort sin comparador ordenaría los números como texto. a - b compara sus valores.
const tiemposE5 = [18, 4, 12, 30];
tiemposE5.sort(function (a, b) {
  return a - b;
});
console.log("Menor:", tiemposE5[0]);
console.log("Mayor:", tiemposE5[tiemposE5.length - 1]);
tiemposE5.reverse();
console.log("Invertidos:", tiemposE5);

// 6. Plazas de actividades
// En cada vuelta, plazas es el valor e indice su posición; sumamos 1 solo al mostrarla.
// Las dos variables están fuera de forEach para conservar los totales entre vueltas.
const plazasE6 = [3, 0, 5, 2];
let actividadesAbiertasE6 = 0;
let plazasTotalesE6 = 0;
plazasE6.forEach(function (plazas, indice) {
  if (plazas > 0) {
    console.log(`Actividad ${indice + 1}: ${plazas} plazas`);
    actividadesAbiertasE6++;
    plazasTotalesE6 += plazas;
  }
});
console.log("Actividades abiertas:", actividadesAbiertasE6);
console.log("Plazas libres:", plazasTotalesE6);

// 7. Cuotas pendientes
// Cada cuota es un objeto. Solo acumulamos importes cuando pagada vale false.
// every responde a otra pregunta: si todas las cuotas están pagadas.
const cuotasE7 = [
  { cliente: "Nora", importe: 24, pagada: true },
  { cliente: "Joel", importe: 30, pagada: false },
  { cliente: "Iris", importe: 18, pagada: false }
];
let pendienteE7 = 0;
cuotasE7.forEach(function (cuota) {
  if (!cuota.pagada) {
    console.log("Debe pagar:", cuota.cliente);
    pendienteE7 += cuota.importe;
  }
});
const todasPagadasE7 = cuotasE7.every(function (cuota) {
  return cuota.pagada;
});
console.log("Importe pendiente:", pendienteE7);
console.log("Todas pagadas:", todasPagadasE7);

// 8. Reparto de material
// Comparamos cada petición con el stock que queda en ese momento.
// Solo restamos unidades si aceptamos la petición.
const peticionesE8 = [3, 5, 2];
let disponiblesE8 = 7;
peticionesE8.forEach(function (unidades, indice) {
  if (unidades <= disponiblesE8) {
    disponiblesE8 -= unidades;
    console.log(`Petición ${indice + 1}: aceptada`);
  } else {
    console.log(`Petición ${indice + 1}: rechazada`);
  }
});
console.log("Unidades restantes:", disponiblesE8);

// 9. Datos recibidos como JSON
// parse convierte el texto en un array de objetos. sala.sala lee la propiedad
// «sala» del objeto que forEach entrega en esa vuelta.
const textoSalasE9 = '[{"sala":"A","ocupada":true},{"sala":"B","ocupada":false},{"sala":"C","ocupada":true}]';
const salasE9 = JSON.parse(textoSalasE9);
let ocupadasE9 = 0;
salasE9.forEach(function (sala) {
  if (sala.ocupada) {
    console.log("Sala ocupada:", sala.sala);
    ocupadasE9++;
  }
});
console.log("Total ocupadas:", ocupadasE9);
salasE9[0].ocupada = false;
const textoActualizadoE9 = JSON.stringify(salasE9);
console.log("JSON actualizado:", textoActualizadoE9);

// 10. Pedidos pendientes
// sort compara la propiedad unidades de dos objetos. Después recorremos
// los pedidos ya ordenados y sumamos solo los que siguen sin enviar.
const pedidosE10 = [
  { codigo: "P-3", unidades: 4, enviado: false },
  { codigo: "P-1", unidades: 2, enviado: true },
  { codigo: "P-2", unidades: 6, enviado: false }
];
pedidosE10.sort(function (a, b) {
  return a.unidades - b.unidades;
});
let unidadesPendientesE10 = 0;
pedidosE10.forEach(function (pedido) {
  if (!pedido.enviado) {
    console.log("Pendiente:", pedido.codigo);
    unidadesPendientesE10 += pedido.unidades;
  }
});
const quedanPendientesE10 = pedidosE10.some(function (pedido) {
  return !pedido.enviado;
});
console.log("Unidades pendientes:", unidadesPendientesE10);
console.log("Quedan pendientes:", quedanPendientesE10);
