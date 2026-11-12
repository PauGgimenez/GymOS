// PRÁCTICA DE PREPARACIÓN · EXAMEN FINAL DE JAVASCRIPT · SOLUCIONES
//
// Cada ejercicio incluye su solución y los resultados esperados.
// Puedes ejecutar el archivo completo o probar los bloques por separado.


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

const edadesE1 = [-1, 5, 6, 17, 18, 65];

for (const edad of edadesE1) {
  // La edad debe ser válida antes de comprobar la tarifa.
  if (edad < 0 || edad > 120) {
    console.log("Edad no válida");
  } else if (edad <= 5) {
    console.log("Entrada gratuita");
  } else if (edad <= 17) {
    console.log("Tarifa infantil");
  } else if (edad <= 64) {
    console.log("Tarifa general");
  } else {
    console.log("Tarifa reducida");
  }
}
// Salida: Edad no válida, Entrada gratuita, Tarifa infantil,
// Tarifa infantil, Tarifa general y Tarifa reducida.


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

for (let fila = 1; fila <= 5; fila++) {
  let linea = "";
  // El último número es el doble del número de fila.
  for (let par = 2; par <= fila * 2; par += 2) {
    linea += par; // Como linea es texto, el número se añade a la derecha.
  }
  console.log(linea);
}
// Salida: 2, 24, 246, 2468 y 246810, cada una en una línea.


// ============================================================
// 3. COSTE DE UN PEDIDO
// ============================================================

// Crea calcularImporte(cantidad, precioUnidad, envio = 0). Devuelve
// el coste de todas las unidades más los gastos de envío.
// Prueba con tres unidades a 8 euros, primero sin indicar el envío
// y después con un envío de 4 euros.

function calcularImporte(cantidad, precioUnidad, envio = 0) {
  return cantidad * precioUnidad + envio;
}

// Al omitir el tercer argumento, envio vale 0.
console.log(calcularImporte(3, 8)); // 24
console.log(calcularImporte(3, 8, 4)); // 28


// ============================================================
// 4. TIEMPOS DE ENTREGA
// ============================================================

let tiemposE4 = [18, 7, 12, 25, 9, 15];

// Realiza estas operaciones en orden.
// 1. Añade 20 al principio del array.
// 2. Elimina el último elemento.
// 3. Ordena los tiempos de mayor a menor.
// 4. Crea y muestra otro array con los tiempos de 12 minutos o menos.
// 5. Muestra el array tiemposE4 y cuántos elementos tiene al terminar.

tiemposE4.unshift(20);
tiemposE4.pop();
// La resta coloca primero los tiempos mayores.
tiemposE4.sort((a, b) => b - a);

const tiemposCortosE4 = [];
for (const tiempo of tiemposE4) {
  if (tiempo <= 12) {
    tiemposCortosE4.push(tiempo);
  }
}
console.log(tiemposCortosE4); // [12, 9, 7]
console.log(tiemposE4); // [25, 20, 18, 12, 9, 7]
console.log(tiemposE4.length); // 6


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

const monedero = {
  titular: "Nora",
  saldo: 10,
  mostrarSaldo: function () {
    console.log(this.titular + ": " + this.saldo + " €");
  },
  recargar: function (cantidad) {
    this.saldo += cantidad;
  },
  puedePagar: function (precio) {
    return this.saldo >= precio;
  }
};

// En monedero.recargar(5), this se refiere a monedero.
monedero.mostrarSaldo(); // Nora: 10 €
console.log(monedero.puedePagar(15)); // false
monedero.recargar(5);
monedero.mostrarSaldo(); // Nora: 15 €
console.log(monedero.puedePagar(15)); // true


// ============================================================
// 6. VISITAS A UN MUSEO
// ============================================================

// Convierte el siguiente texto JSON en un array llamado salas.
const textoSalas =
  '[' +
  '{"nombre":"Cerámica","abierta":true,"minutos":25},' +
  '{"nombre":"Pintura","abierta":true,"minutos":45},' +
  '{"nombre":"Fotografía","abierta":false,"minutos":20},' +
  '{"nombre":"Escultura","abierta":true,"minutos":30},' +
  '{"nombre":"Mapas","abierta":true,"minutos":15}' +
  ']';

// 1. Muestra cuántas salas hay y la duración media de todas las visitas.
// 2. Encuentra y muestra el nombre de la sala con la visita más corta.
// 3. Usa filter() con un callback para obtener las salas abiertas cuya
//    visita dure 30 minutos o menos. Muestra sus nombres.
// 4. Ordena el array de salas de menor a mayor duración y muéstralo.

const salas = JSON.parse(textoSalas);
let totalMinutosE6 = 0;
let visitaMasCortaE6 = salas[0];

for (const sala of salas) {
  totalMinutosE6 += sala.minutos;
  if (sala.minutos < visitaMasCortaE6.minutos) {
    visitaMasCortaE6 = sala;
  }
}

console.log("Número de salas:", salas.length); // 5
console.log("Duración media:", totalMinutosE6 / salas.length); // 27
console.log("Visita más corta:", visitaMasCortaE6.nombre); // Mapas

// filter llama al callback por cada sala. Conserva las que cumplen ambas condiciones.
const salasSeleccionadasE6 = salas.filter(function (sala) {
  return sala.abierta && sala.minutos <= 30;
});

for (const sala of salasSeleccionadasE6) {
  console.log(sala.nombre); // Cerámica, Escultura y Mapas, en líneas separadas.
}

salas.sort((a, b) => a.minutos - b.minutos);
console.log(salas);
// Orden: Mapas (15), Fotografía (20), Cerámica (25), Escultura (30) y Pintura (45).


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

function insertarPuntuacion(clasificacion, puntos) {
  const resultado = clasificacion.slice(); // Crea una copia del array.
  let posicion = 0;

  // Saltamos las puntuaciones mayores o iguales a la nueva.
  // Si todas son mayores o iguales, posicion termina al final del array.
  while (posicion < resultado.length && resultado[posicion] >= puntos) {
    posicion++;
  }

  // El 0 indica cuántos elementos se borran al insertar.
  resultado.splice(posicion, 0, puntos);
  return resultado;
}

const clasificacionE7 = [30, 20, 10];
console.log(insertarPuntuacion(clasificacionE7, 25)); // [30, 25, 20, 10]
console.log(insertarPuntuacion(clasificacionE7, 10)); // [30, 20, 10, 10]
console.log(insertarPuntuacion(clasificacionE7, 5)); // [30, 20, 10, 5]
console.log(clasificacionE7); // [30, 20, 10]
