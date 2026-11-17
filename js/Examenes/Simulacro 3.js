// ============================================================
// SIMULACRO FINAL: FUNCIONES Y OBJETOS (EDICIÓN REPASO)
// ============================================================
// Resuelve cada ejercicio debajo de su enunciado y pruébalo en la consola.
// Cuando se pida devolver un valor, usa return y muestra el resultado.
"use strict";

// ============================================================
// 1. PRESUPUESTO DE HARDWARE
// ============================================================
// Crea calcularPresupuesto(componentes, montaje = 0). El parámetro
// componentes indica el número de piezas y su precio medio.
// Devuelve el coste total sumando el coste del montaje.
// Prueba con 5 componentes a 120 euros, primero con un montaje de
// 50 euros y después omitiendo el argumento del montaje.
const pcE1 = { piezas: 5, precioMedio: 120 };

// Tu código:

function calcularPresupuesto(componentes, montaje = 0) {
  let total = componentes.piezas * componentes.precioMedio + montaje;
  return total;
}

console.log(calcularPresupuesto(pcE1));
console.log(calcularPresupuesto(pcE1, 50));

// ============================================================
// 2. ATRIBUTOS DE PERSONAJE (Objetos y this)
// ============================================================
// Crea crearPersonaje(nombre). Devuelve un objeto con el nombre,
// nivel en 1, y runas en 0. Añade dos métodos que usen this:
// - ganarRunas(cantidad): Suma la cantidad a las runas actuales.
// - subirNivel(coste): Si tiene runas suficientes (>= coste), resta las
//   runas, suma 1 al nivel y devuelve true. Si no, devuelve false.
//
// Crea un personaje, añádele 1500 runas y comprueba si puede
// subir de nivel con un coste de 800. Muestra el objeto final.

// Tu código:
function crearPersonaje(nombre) {
  const personaje = {
    nombre: nombre,
    nivel: 1,
    runas: 0,
    ganarRunas: function (cantidad) {
      return (this.runas += cantidad);
    },

    subirNivel: function (coste) {
      const suficiente = this.runas >= coste ? true : false;
      //    const suficiente = this.runas >= coste
      if (suficiente) {
        this.runas -= coste;
        this.nivel++;
      }
      return suficiente;
    },
  };
  return personaje;
}

const pj = crearPersonaje("Juan");

pj.ganarRunas(1500);
const haSubido = pj.subirNivel(800);

console.log("¿Pudo subir de nivel? " + haSubido);
console.log(pj);

// ============================================================
// 3. ASISTENCIA EN EL GIMNASIO (Bucles anidados)
// ============================================================
// Cada fila de la sala contiene las edades de los asistentes.
// Un 0 significa que el asiento está vacío.
// Crea resumenClase(sala). Usa bucles for...of para recorrer las filas.
// Devuelve un objeto con el total de asistentes y el total de asientos vacíos.
// Usa las propiedades asistentes y vacios.
const salaE3 = {
  nombre: "Sala Norte",
  filas: [
    [25, 0, 32],
    [0, 0],
    [19, 45, 0],
  ],
};

// Tu código:
function resumenClase(sala) {
  let asistentes = 0;
  let vacios = 0;
  for (const fila of sala.filas) {
    for (const asiento of fila) {
      if (asiento == 0) {
        vacios++;
      } else {
        asistentes++;
      }
    }
  }
  const datos = { vacios: vacios, asistentes: asistentes };
  return datos;
}

console.log(resumenClase(salaE3));

// ============================================================
// 4. FILTRADO DE TAREAS DE ESTUDIO (JSON, filter, sort)
// ============================================================
// Crea organizarEstudio(textoJSON, modulo). Convierte el JSON a array.
// Usa filter() para seleccionar SOLO las tareas pendientes (completada: false)
// que coincidan con el modulo indicado (por ejemplo, "PSP" o "TAI").
// Ordena las seleccionadas de MAYOR a MENOR urgencia usando sort().
//
// Devuelve un objeto con dos propiedades:
// - nombres: un array con los nombres de las tareas ordenadas.
// - tiempoTotal: la suma de los minutos de esas tareas.
//
// Prueba llamando a la función con el módulo "PSP".
const tareasJSONE4 =
  "[" +
  '{"nombre":"Hilos Java","modulo":"PSP","completada":false,"urgencia":5,"minutos":45},' +
  '{"nombre":"Procesos C","modulo":"PSP","completada":true,"urgencia":3,"minutos":30},' +
  '{"nombre":"Hardware","modulo":"TAI","completada":false,"urgencia":2,"minutos":20},' +
  '{"nombre":"Sincronización","modulo":"PSP","completada":false,"urgencia":4,"minutos":60}' +
  "]";

// Tu código:
function organizarEstudio(textoJSON, modulo) {
  let sumaTotal = 0;
  const nombresOrdenados = [];

  const tareas = JSON.parse(textoJSON);

  const tareasPendientes = tareas.filter(
    (e) => e.completada === false && e.modulo === modulo,
  );

  tareasPendientes.sort(function (a, b) {
    return b.urgencia - a.urgencia;
  });

  for (const e of tareasPendientes) {
    sumaTotal += e.minutos;
    nombresOrdenados.push(e.nombre);
  }

  return { nombre: nombresOrdenados, tiempoTotal: sumaTotal };
}
console.log(organizarEstudio(tareasJSONE4, "PSP"));

// ============================================================
// 5. GESTIÓN DE ARMERÍA (Búsqueda y actualización)
// ============================================================
// Crea procesarVenta(inventario, articulo, unidades).
// Limpia de espacios los extremos del artículo y pásalo a minúsculas.
// Busca en el inventario recorriéndolo con un for...of.
//
// - Si existe la ficha y el stock es suficiente, resta las unidades del
//   stock y devuelve "Venta completada".
// - Si no hay stock suficiente, devuelve "Stock insuficiente".
// - Si se recorre todo el array y no existe, devuelve "Artículo no encontrado".
//
// Prueba pidiendo 1 " ESPADA ", luego 3 "katana" y por último 1 "arco".
// Muestra el inventario al final.
const tiendaE5 = [
  { articulo: "espada", stock: 2, precio: 150 },
  { articulo: "escudo ", stock: 0, precio: 50 },
];

// Tu código:
function procesarVenta(inventario, articulo, unidades) {
  const artLimpio = articulo.trim().toLowerCase();

  for (const e of inventario) {
    if (e.articulo === artLimpio) {
    
      if (e.stock >= unidades) {
        e.stock -= unidades; 
        return "Venta completada";
      } else {
        return "Stock insuficiente";
      }
    }
  }

  return "Artículo no encontrado";
}
console.log(tiendaE5);

console.log(procesarVenta(tiendaE5, " ESPADA ", 1));
console.log(procesarVenta(tiendaE5, "espada", 3));   
console.log(procesarVenta(tiendaE5, "arco", 1));    


console.log(tiendaE5);

console.log("Holi soy bobo")

