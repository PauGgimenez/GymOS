// SIMULACRO FINAL · FUNCIONES Y OBJETOS EN JAVASCRIPT
//
// Tiempo orientativo: 90 minutos. Reserva los últimos 5 para revisar.
// Resuelve cada ejercicio debajo de su enunciado y pruébalo en la consola.
// Cuando se pida devolver un valor, usa return y muestra el resultado
// al probar la función. Los ejercicios son independientes.

"use strict"

// ============================================================
// 1. PESO DE UN ENVÍO · 10 minutos
// ============================================================

// Crea calcularPesoEnvio(caja, pesoEmbalaje = 0). La caja indica cuántas
// piezas lleva y cuánto pesa cada una. Devuelve el peso de todas las
// piezas más el del embalaje. Todos los pesos están en gramos.
// Prueba con 80 gramos de embalaje y omitiendo ese argumento.

const cajaE1 = { piezas: 4, pesoPorPieza: 250 };

// Tu código:

function calcularPesoEnvio(caja, pesoEmbalaje = 0) {
  const pesoPiezas = caja.piezas * caja.pesoPorPieza;
  return pesoPiezas + pesoEmbalaje;

}
console.log( calcularPesoEnvio(cajaE1, 80));



// ============================================================
// 2. PLAZO DE PRÉSTAMO · 10 minutos
// ============================================================

// Crea estadoPrestamo(libro, dias). dias es un número entero.
// Si el libro no está disponible, devuelve "No disponible".
// Si está disponible pero dias es menor que 1 o supera diasMaximos,
// devuelve "Plazo no válido". En los demás casos, devuelve "Permitido".
// Prueba los dos libros y, con el primero, los plazos de 7 y 8 días.

const libroDisponibleE2 = { titulo: "Atlas", disponible: true, diasMaximos: 7 };
const libroPrestadoE2 = { titulo: "Guía de aves", disponible: false, diasMaximos: 7 };

function estadoPrestamo(libro, dias) {



}

// Tu código:


// ============================================================
// 3. MARCADOR DE UN EQUIPO · 15 minutos
// ============================================================

// Crea crearMarcador(equipo). La función devuelve un objeto con el
// nombre del equipo y una propiedad puntos que empieza en 0.
//
// Añade dos métodos que usen this:
// - anotar(cantidad) suma esa cantidad a los puntos del equipo.
// - reiniciar() vuelve a dejar los puntos en 0.
//
// Crea un marcador, anota 3 puntos y luego 2. Muestra los puntos antes
// y después de reiniciar el marcador.

// Tu código:


// ============================================================
// 4. RECUENTO DE CASILLEROS · 15 minutos
// ============================================================

// Cada fila del armario contiene varios casilleros. El número de cada
// casillero indica cuántos paquetes contiene. Si vale 0, está vacío.
//
// Crea resumirArmario(armario). Usa bucles para recorrer las filas y
// sus casilleros. Devuelve un objeto con el nombre del armario, el
// número de casilleros vacíos y el total de paquetes.
// Usa las propiedades nombre, vacios y paquetes. Prueba con estos datos.

const armarioE4 = {
  nombre: "Almacén norte",
  filas: [
    [2, 0, 1],
    [0, 0],
    [4, 1, 0]
  ]
};

// Tu código:


// ============================================================
// 5. RETIRADA DE MATERIAL · 15 minutos
// ============================================================

// Crea retirarMaterial(inventario, codigo, cantidad). Quita los espacios
// de los extremos del código recibido y pásalo a mayúsculas. Busca la
// ficha correspondiente recorriendo el inventario. cantidad es un
// entero positivo.
//
// Si encuentras la ficha y hay unidades suficientes, resta la cantidad
// de su stock y devuelve true. Si el código no existe o el stock es
// insuficiente, devuelve false y deja el inventario como estaba.
//
// Prueba a retirar 3 unidades de "  m-01 ", luego otras 3 de "M-01"
// y por último 1 de "M-99". Muestra el resultado de cada llamada y
// el inventario final.

const inventarioE5 = [
  { codigo: "  M-01", nombre: "Cables", stock: 5 },
  { codigo: "M-02", nombre: "Adaptadores", stock: 2 }
];

// Tu código:
function retirarMaterial(inventario, codigo, cantidad) {
  inventarioE5.forEach(e => {
    e.codigo.trim().toUpperCase()
    
  });


}


// ============================================================
// 6. PLAN DE MANTENIMIENTO · 20 minutos
// ============================================================

// Crea prepararMantenimiento(textoJSON, zona). Convierte el JSON en un
// array de avisos. Usa filter() con un callback para seleccionar solo
// los avisos pendientes de la zona indicada. Ordena los seleccionados
// de mayor a menor prioridad.
//
// Devuelve un objeto con dos propiedades:
// - tareas: un array con los nombres de las tareas, en ese orden.
// - minutosTotales: la suma de los minutos de esas tareas.
//
// Prueba con "Patio" y con "Entrada". Si una zona no tiene avisos
// pendientes, devuelve un array vacío y un total de 0.

const avisosJSONE6 =
  '[' +
  '{"tarea":"Ajustar banco","zona":"Patio","pendiente":true,"prioridad":1,"minutos":20},' +
  '{"tarea":"Revisar puerta","zona":"Entrada","pendiente":false,"prioridad":3,"minutos":10},' +
  '{"tarea":"Cambiar rejilla","zona":"Patio","pendiente":true,"prioridad":3,"minutos":25},' +
  '{"tarea":"Reponer pintura","zona":"Patio","pendiente":false,"prioridad":2,"minutos":30}' +
  ']';

// Tu código:

const avisos = JSON.parse(avisosJSONE6)
function prepararMantenimiento(textoJSON, zona) {
  avisos.filter()


}
