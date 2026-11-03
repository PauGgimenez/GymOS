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
console.log("Primera actividad: " + deportes[0])
console.log("Última actividad: " + deportes[deportes.length -1]);
console.log("Cantidad de elementos: " + deportes.length)

// 2. Altas y bajas
// Empieza con ["Ana", "Luis"]. Añade "Eva" al final y "Mario" al principio.
// Retira el último nombre, guárdalo y muestra ese nombre y el array final.
// Tu código:
const nombres = ["Ana", "Luis"];

console.log("Array original: " + nombres)

console.log("Añadiendo nombres....")
nombres.push("Eva")
nombres.unshift("Mario")

console.log("Con nombres añadidos: " + nombres)

console.log("Retirando y guardando ultimo elemento......")

const ultimoExtraido = nombres.splice(3, 1)

 console.log(ultimoExtraido)





// 3. Una copia y un cambio
// Dado ["Inicio", "Clientes", "Reservas", "Personal"], copia con slice
// las dos vistas centrales. Después sustituye "Reservas" por "Agenda"
// en el array original con splice. Muestra ambos arrays.
// Tu código:

const apartados = ["Inicio", "Clientes", "Reservas", "Personal"];
console.log("Original: " + apartados)
const dosCentrales = apartados.slice(1, 2)
console.log("Dos elementos centrales: " + dosCentrales)






// 4. Dos listas
// Une ["Mañana", "Tarde"] y ["Noche"] en un array nuevo. Muestra cuántos
// turnos hay. Crea también un texto que los separe con " / " y muestra
// su tipo con typeof.
// Tu código:


// 5. Orden numérico
// Ordena [18, 4, 12, 30] de menor a mayor. Muestra el menor y el mayor.
// Invierte después el orden y muestra el array. ¿Por qué sort() sin una
// función de comparación daría un resultado distinto?
// Tu código:


// ============================================================
// PARTE B · CINCO EJERCICIOS PARA PENSAR
// ============================================================

// 6. Plazas de actividades
// Hay [3, 0, 5, 2] plazas libres en cuatro actividades. Con forEach,
// muestra "Actividad 1: 3 plazas", etc., solo si quedan plazas.
// Cuenta cuántas actividades admiten inscripciones y suma las plazas libres.
// Tu código:


// 7. Cuotas pendientes
// Usa estos datos:
// [
//   { cliente: "Nora", importe: 24, pagada: true },
//   { cliente: "Joel", importe: 30, pagada: false },
//   { cliente: "Iris", importe: 18, pagada: false }
// ]
// Con forEach, muestra solo los nombres de quienes deben pagar y calcula
// el importe pendiente total. Comprueba con every si todas están pagadas.
// Tu código:


// 8. Reparto de material
// Hay 7 unidades disponibles. Las peticiones, por este orden, son
// [3, 5, 2]. Recorre el array con forEach. Acepta una petición solo si
// cabe con las unidades que queden en ese momento. Muestra si se acepta
// o rechaza cada una y cuántas unidades quedan al final.
// Tu código:


// 9. Datos recibidos como JSON
// Recibes este texto:
// '[{"sala":"A","ocupada":true},{"sala":"B","ocupada":false},{"sala":"C","ocupada":true}]'
// Conviértelo en un array. Con forEach, muestra los nombres de las salas
// ocupadas y cuenta cuántas hay. Después libera la sala A y crea un nuevo
// texto JSON con los datos actualizados.
// Tu código:


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
