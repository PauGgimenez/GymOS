// SIMULACRO FINAL · FUNCIONES Y OBJETOS EN JAVASCRIPT · SOLUCIONES
//
// Cada ejercicio incluye la solución y pruebas con su resultado esperado.
// Puedes ejecutar todo el archivo o probar cada ejercicio por separado.


// ============================================================
// 1. PESO DE UN ENVÍO · 10 minutos
// ============================================================

// Crea calcularPesoEnvio(caja, pesoEmbalaje = 0). La caja indica cuántas
// piezas lleva y cuánto pesa cada una. Devuelve el peso de todas las
// piezas más el del embalaje. Todos los pesos están en gramos.
// Prueba con 80 gramos de embalaje y omitiendo ese argumento.

const cajaE1 = { piezas: 4, pesoPorPieza: 250 };

function calcularPesoEnvio(caja, pesoEmbalaje = 0) {
  const pesoPiezas = caja.piezas * caja.pesoPorPieza;
  return pesoPiezas + pesoEmbalaje;
}

// Si omitimos el segundo argumento, pesoEmbalaje vale 0.
console.log(calcularPesoEnvio(cajaE1, 80)); // 1080
console.log(calcularPesoEnvio(cajaE1)); // 1000


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
  if (!libro.disponible) {
    return "No disponible";
  }

  // Los límites válidos son 1 y libro.diasMaximos, ambos incluidos.
  if (dias < 1 || dias > libro.diasMaximos) {
    return "Plazo no válido";
  }

  return "Permitido";
}

console.log(estadoPrestamo(libroDisponibleE2, 7)); // Permitido
console.log(estadoPrestamo(libroDisponibleE2, 8)); // Plazo no válido
console.log(estadoPrestamo(libroPrestadoE2, 3)); // No disponible


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

function crearMarcador(equipo) {
  return {
    equipo: equipo,
    puntos: 0,
    anotar: function (cantidad) {
      this.puntos += cantidad;
    },
    reiniciar: function () {
      this.puntos = 0;
    }
  };
}

// Cuando llamamos a marcadorE3.anotar(), this se refiere a marcadorE3.
const marcadorE3 = crearMarcador("Equipo azul");
marcadorE3.anotar(3);
marcadorE3.anotar(2);
console.log(marcadorE3.puntos); // 5
marcadorE3.reiniciar();
console.log(marcadorE3.puntos); // 0


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

function resumirArmario(armario) {
  let vacios = 0;
  let paquetes = 0;

  // El primer bucle recorre las filas. El segundo recorre los números
  // de la fila actual, aunque cada fila tenga una longitud diferente.
  for (const fila of armario.filas) {
    for (const cantidad of fila) {
      if (cantidad === 0) {
        vacios++;
      }
      paquetes += cantidad;
    }
  }

  return { nombre: armario.nombre, vacios: vacios, paquetes: paquetes };
}

console.log(resumirArmario(armarioE4)); // { nombre: "Almacén norte", vacios: 4, paquetes: 8 }


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
  { codigo: "M-01", nombre: "Cables", stock: 5 },
  { codigo: "M-02", nombre: "Adaptadores", stock: 2 }
];

function retirarMaterial(inventario, codigo, cantidad) {
  const codigoLimpio = codigo.trim().toUpperCase();

  for (const ficha of inventario) {
    if (ficha.codigo === codigoLimpio) {
      if (ficha.stock < cantidad) {
        return false;
      }

      // ficha es el mismo objeto que está en el array. El cambio
      // se conserva y lo verá la siguiente llamada.
      ficha.stock -= cantidad;
      return true;
    }
  }

  // Si llegamos aquí, se ha recorrido el array sin encontrar el código.
  return false;
}

console.log(retirarMaterial(inventarioE5, "  m-01 ", 3)); // true
console.log(retirarMaterial(inventarioE5, "M-01", 3)); // false
console.log(retirarMaterial(inventarioE5, "M-99", 1)); // false
console.log(inventarioE5); // M-01 y M-02 quedan con 2 unidades cada uno.


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

function prepararMantenimiento(textoJSON, zona) {
  const avisos = JSON.parse(textoJSON);

  // filter llama al callback para cada aviso. Solo conserva los que
  // cumplen las dos condiciones: estar pendientes y ser de esa zona.
  const seleccionados = avisos.filter(function (aviso) {
    return aviso.pendiente && aviso.zona === zona;
  });

  seleccionados.sort(function (a, b) {
    return b.prioridad - a.prioridad;
  });

  const tareas = [];
  let minutosTotales = 0;
  for (const aviso of seleccionados) {
    tareas.push(aviso.tarea);
    minutosTotales += aviso.minutos;
  }

  // Si el array está vacío, el bucle no entra y se devuelven [] y 0.
  return { tareas: tareas, minutosTotales: minutosTotales };
}

console.log(prepararMantenimiento(avisosJSONE6, "Patio"));
// { tareas: ["Cambiar rejilla", "Ajustar banco"], minutosTotales: 45 }
console.log(prepararMantenimiento(avisosJSONE6, "Entrada"));
// { tareas: [], minutosTotales: 0 }
