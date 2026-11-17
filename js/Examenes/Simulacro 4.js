// ============================================================
//         SIMULACRO DEFINITIVO PLUS: GYMOS (MODO PROFESIONAL)
// ============================================================

"use strict";

// ============================================================
// 1. ALTA DE SOCIO (Strings y Condicionales)
// ============================================================
// Crea la función registrarSocio(codigo, edad, cuotaAbonada).
// 1. Limpia el código de espacios a los lados y pásalo a mayúsculas.
// 2. Para aceptar el alta, el código debe empezar por "SOC-" Y además,
//    la persona debe tener 18 años o más, O tener la cuotaAbonada en true.
// 3. Devuelve "Alta completada" si cumple todo, o "Alta denegada" si no.
// Prueba con ("  soc-1092 ", 16, true) y ("  CLI-99 ", 25, true).

// Tu código:
/**
 *
 * @param {String} codigo
 * @param {number} edad
 * @param {boolean} cuotaAbonada
 */
function registrarSocio(codigo, edad, cuotaAbonada) {

  const codLimpio = codigo.trim().toUpperCase();

  if (codLimpio.startsWith("SOC-") && (edad >= 18 || cuotaAbonada)) {

    return "Alta completada";

  }
  return "Alta denegada";
}
console.log(registrarSocio("  soc-1092 ", 16, true));
console.log(registrarSocio("  CLI-99 ", 25, true));
console.log(registrarSocio("  CLI-99 ", 25, false));

// ============================================================
// 2. GESTIÓN DE CAJA (Objetos y this)
// ============================================================
// Crea el objeto cajaDiaria con 3 propiedades: fecha ("17/11/2026"),
// saldo (empezando en 100), y movimientos (un array vacío []).
// Añade un método usarThis llamado cobrar(concepto, importe):
// - Añade el concepto al array movimientos usando .push()
// - Suma el importe al saldo de la caja.
// - Devuelve un mensaje: "Cobro de [concepto] realizado. Saldo actual: [saldo]"
// Cóbale una "Mensualidad Pilates" por 45 y comprueba el objeto.

// Tu código:
const cajaDiario = {}


// ============================================================
// 3. FILTRADO DE CLASES (JSON, filter, sort)
// ============================================================
// Crea organizarClases(textoJSON). Convierte el texto a array.
// 1. filter para quedarte SOLO con las clases
//    que tengan plazas libres (plazas > 0) y duren 60 minutos o menos.
// 2. sortt para ordenar esas clases válidas por
//    plazas, de MAYOR a MENOR.
// 3. Devuelve un array nuevo que contenga SOLO los nombres de las clases ordenadas.
const clasesJSON =
  "[" +
  '{"nombre":"Yoga Express","plazas":5,"minutos":45},' +
  '{"nombre":"Crossfit","plazas":0,"minutos":60},' +
  '{"nombre":"Pilates","plazas":12,"minutos":50},' +
  '{"nombre":"Maratón Ciclo","plazas":20,"minutos":120}' +
  "]";

// Tu código:

// ============================================================
// 4. CONTROL DE ACCESOS (every, some, forEach)
// ============================================================
// Tienes una lista de clientes entrando al gimnasio por el torno.
// 1. Usa .every() para comprobar si TODOS tienen la tarjeta activa.
// 2. Usa .some() para comprobar si ALGUNO tiene un pago pendiente.
// 3. Usa .forEach() para imprimir: "Bienvenido/a, [nombre]".
// Guarda las comprobaciones en variables y muestra un console.log de cada una.
const accesos = [
  { nombre: "Leo", tarjetaActiva: true, pagoPendiente: false },
  { nombre: "Mia", tarjetaActiva: true, pagoPendiente: true },
  { nombre: "Zoe", tarjetaActiva: false, pagoPendiente: false },
];

// Tu código:

// ============================================================
// 5. REPARTO DE TAQUILLAS (Bucles, restas y break/return)
// ============================================================
// Crea asignarTaquillas(grupos). El vestuario tiene 10 taquillas libres.
// Recorre el array de grupos (que indica cuántas personas vienen juntas)
// En cada vuelta, resta el tamaño del grupo a las taquillas libres.
//
// - Si un grupo es más grande que las taquillas que quedan, sal del bucle
//   inmediatamente (con return) y devuelve "Taquillas agotadas. Quedan [X] libres."
// - Si se terminan de ubicar todos los grupos del array y sobra espacio,
//   devuelve "Todos ubicados. Sobran [X] taquillas."
//
// Prueba con [4, 3, 2] y con [5, 4, 3].

// Tu código:
