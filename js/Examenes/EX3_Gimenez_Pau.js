// PRÁCTICA DE PREPARACIÓN · EXAMEN FINAL DE JAVASCRIPT
//
// Resuelve los siete ejercicios debajo de cada enunciado y comprueba
// los resultados con console.log(). Cuando se pida devolver un valor,
// usa return y muestra el resultado al probar la función.


// ============================================================
// 1. TARIFA DE UNA VISITA
// ============================================================

// Crea una variable edad con un número entero y muestra el mensaje
// que corresponda.
// - Si es menor que 0 o mayor que 120, muestra "Edad no válida".
// - De 0 a 5, muestra "Entrada gratuita".
// - De 6 a 17, muestra "Tarifa infantil".
// - De 18 a 64, muestra "Tarifa general".
// - De 65 a 120, muestra "Tarifa reducida".
//
// Prueba con -1, 5, 6, 17, 18 y 65.

// Tu código:
const edad = 121;
if (edad > 0 && edad < 120) {
  if (edad <= 5) {
    console.log("Entrada gratuita");
  } else if (edad >= 6 && edad <= 17) {
    console.log("Tarifa infantil");
  } else if (edad >= 18 && edad <= 64) {
    console.log("Tarifa general");
  } else if (edad >= 65) {
    console.log("Tarifa reducida");
  }
} else {
  console.log("Edad no válida");
}


// ============================================================
// 2. ESCALERA DE NÚMEROS PARES
// ============================================================

// Usa bucles para generar estas cinco filas, sin espacios. La primera
// contiene el 2. Cada fila añade el siguiente número par a la derecha.
//
// 2
// 24
// 246
// 2468
// 246810

// Tu código:
for (let f = 1; f <= 5; f++) {
  let linea = "";
 
  for (let par = 2; par <= f * 2; par += 2) {
    linea += par; 
  }
  console.log(linea);
}



// ============================================================
// 3. COSTE DE UN PEDIDO
// ============================================================

// Crea calcularImporte(cantidad, precioUnidad, envio = 0). Devuelve
// el coste de todas las unidades más los gastos de envío.
// Prueba con tres unidades a 8 euros, primero sin indicar el envío
// y después con un envío de 4 euros.

// Tu código:

function calcularImporte(cantidad, precioUnidad, envio = 0) {
  return cantidad * precioUnidad + envio
}

console.log("-> 3 unidades, 8€, gastos de envío 0");
console.log( calcularImporte(3, 8));

console.log("-> 3 unidades, 8€, gastos de envío 4");
console.log( calcularImporte(3, 8, 4));






// ============================================================
// 4. TIEMPOS DE ENTREGA
// ============================================================

// Realiza estas operaciones en orden.
// 1. Añade 20 al principio del array.
// 2. Elimina el último elemento.
// 3. Ordena los tiempos de mayor a menor.
// 4. Crea y muestra otro array con los tiempos de 12 minutos o menos.
// 5. Muestra el array tiemposE4 y cuántos elementos tiene al terminar.
let tiempos = [18, 7, 12, 25, 9, 15];
// Tu código:
tiempos.unshift(20)
tiempos.pop()
tiempos.sort(function(a, b) {
  return b - a
})
const tiemposMenos12 = []
tiempos.forEach(t => {
  if (t <= 12) {
      tiemposMenos12.push(t)
  }
  
});
console.log("Tiempos menores de 12 -> " + tiemposMenos12);

console.log("Array tiempos al terminar: " + tiempos);
console.log(tiempos.length + " elementos");





// ============================================================
// 5. MONEDERO Y SUS MÉTODOS
// ============================================================

// Crea un objeto monedero con las propiedades titular y saldo.
// Empieza con un saldo de 10 euros y añade estos métodos:
// - mostrarSaldo() muestra el titular y el saldo.
// - recargar(cantidad) añade esa cantidad al saldo.
// - puedePagar(precio) devuelve true si el saldo alcanza para pagar,
//   incluido cuando es igual al precio, y false si no alcanza.
//
// Muestra el saldo inicial. Comprueba si se puede pagar algo de 15 euros,
// recarga 5 euros, muestra el nuevo saldo y vuelve a comprobarlo.

// Tu código:
const monedero = {titular: "Juan", saldo: 10}
function mostrarSaldo() {
  return "Titular: " + monedero.titular + ", saldo: " + monedero.saldo 
}

function recargar(cantidad) {
  monedero.saldo += cantidad
  return monedero.saldo
}

function puedePagar(precio) {
  return precio <= monedero.saldo ? true : false

}

console.log("SALDO INICIAL: " + mostrarSaldo());


console.log("RECARGA DE 5€");
console.log("Saldo actualizado: " + recargar(5));
console.log("Precio 15€, puede? " + puedePagar(15));






// ============================================================
// 6. VISITAS A UN MUSEO
// ============================================================

// Convierte el siguiente texto JSON en un array llamado salas.

// 1. Muestra cuántas salas hay y la duración media de todas las visitas.
// 2. Encuentra y muestra el nombre de la sala con la visita más corta.
// 3. Usa filter() con un callback para obtener las salas abiertas cuya
//    visita dure 30 minutos o menos. Muestra sus nombres.
// 4. Ordena el array de salas de menor a mayor duración y muéstralo.
const textoSalas =
  '[' +
  '{"nombre":"Cerámica","abierta":true,"minutos":25},' +
  '{"nombre":"Pintura","abierta":true,"minutos":45},' +
  '{"nombre":"Fotografía","abierta":false,"minutos":20},' +
  '{"nombre":"Escultura","abierta":true,"minutos":30},' +
  '{"nombre":"Mapas","abierta":true,"minutos":15}' +
  ']';
// Tu código:
const salas = JSON.parse(textoSalas)
let nSalas = 0
let media = 0
let corta = ""

salas.sort(function (a, b) {
  return a.minutos - b.minutos
})
console.log(salas);
corta = salas[0].nombre
salas.forEach(sala => {
  nSalas++
  media += sala.minutos
});

media /= nSalas


console.log("Media de minutos por visita " + media + " minutos");
console.log("La visita mas corta fue en la sala " + corta);





// ============================================================
// 7. AÑADIR UNA PUNTUACIÓN A LA CLASIFICACIÓN
// ============================================================

// Crea insertarPuntuacion(clasificacion, puntos). El primer parámetro
// es un array ya ordenado de mayor a menor. Devuelve un array nuevo con
// los mismos valores y la nueva puntuación colocada en su sitio.
// Conserva las puntuaciones repetidas. El array de entrada debe quedar igual.
//
// Prueba con [30, 20, 10] e inserta 25, 10 y 5 en llamadas separadas.
// Muestra los tres resultados y comprueba que la lista inicial conserva
// sus valores y su orden.
//
// En este ejercicio no se permite usar sort(), toSorted() ni
// librerías externas para ordenar.

// Tu código:

const puntuaciones = [30, 20, 10]
function insertarPuntuacion(clasificacion, puntos) {
  for (let i = 0; i < clasificacion.length; i++) {
    if (clasificacion[i] > puntos) {
      clasificacion[i].
    }
    
  }
  return clasificacion

}
puntuaciones.

console.log(insertarPuntuacion(puntuaciones, 25));
