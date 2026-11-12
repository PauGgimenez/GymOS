// SOLUCIONES DE JAVASCRIPT · 27 RETOS
// Cada bloque contiene un enunciado, una solución y ejemplos de prueba.
// Puedes ejecutar el archivo completo o probar cada bloque por separado.

"use strict";

// A · FUNCIONES 

// 01. Devuelve la suma de los números impares de un array.
{
  function sumarImpares(numeros) {
    let suma = 0;
    for (const numero of numeros) {
      // Un impar negativo también deja un resto distinto de cero.
      if (numero % 2 !== 0) {
        suma += numero;
      }
    }
    return suma;
  }
  console.log(sumarImpares([2, 5, 8, -3])); // 2
  console.log(sumarImpares([])); // 0
}


// 02. Devuelve el número mayor de un array o undefined si está vacío.
{
  function buscarMayor(numeros) {
    let mayor = numeros[0]; // El primer valor también puede ser negativo.
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > mayor) {
        mayor = numeros[i];
      }
    }
    return mayor;
  }
  console.log(buscarMayor([-9, -2, -5])); // -2
  console.log(buscarMayor([])); // undefined
}


// 03. Devuelve una palabra escrita al revés usando un bucle.
{
  function invertirPalabra(palabra) {
    let invertida = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
      invertida += palabra[i];
    }
    return invertida;
  }
  console.log(invertirPalabra("SALA")); // ALAS
}


// 04. Devuelve los números comunes a dos arrays, sin repetirlos y en el orden del primero.
{
  function buscarComunes(primero, segundo) {
    const comunes = [];
    for (const numero of primero) {
      if (segundo.includes(numero) && !comunes.includes(numero)) {
        comunes.push(numero);
      }
    }
    return comunes;
  }
  console.log(buscarComunes([4, 2, 4, 7], [2, 4, 9])); // [4, 2]
}


// 05. Comprueba si un entero es primo (mayor que 1 y divisible solo por 1 y por sí mismo).
{
  function esPrimo(numero) {
    if (numero < 2) {
      return false;
    }
    for (let divisor = 2; divisor < numero; divisor++) {
      if (numero % divisor === 0) {
        return false; // Encontramos un divisor distinto de 1 y del propio número.
      }
    }
    return true;
  }
  console.log(esPrimo(7)); // true
  console.log(esPrimo(9)); // false
  console.log(esPrimo(1)); // false
}


// A · FUNCIONES 

// 06. Calcula el coste de una reserva a 7 € por persona, con 1 € de descuento por persona si son 5 o más.
{
  function costeReserva(personas) {
    const precioPorPersona = personas >= 5 ? 6 : 7;
    return personas * precioPorPersona;
  }
  console.log(costeReserva(4)); // 28
  console.log(costeReserva(5)); // 30
}


// 07. Devuelve un código de sala en mayúsculas y sin espacios en los extremos, o "SAL-00" si falta o queda vacío.
{
  function prepararCodigo(codigo = "") {
    const limpio = codigo.trim().toUpperCase();
    return limpio === "" ? "SAL-00" : limpio;
  }
  console.log(prepararCodigo("  sal-07 ")); // SAL-07
  console.log(prepararCodigo()); // SAL-00
  console.log(prepararCodigo("   ")); // SAL-00
}


// 08. Genera un array desde un entero no negativo, bajando de dos en dos sin pasar de 0 (7 → [7, 5, 3, 1]).
{
  function prepararTurnos(inicio) {
    const turnos = [];
    for (let turno = inicio; turno >= 0; turno -= 2) {
      turnos.push(turno);
    }
    return turnos;
  }
  console.log(prepararTurnos(7)); // [7, 5, 3, 1]
  console.log(prepararTurnos(6)); // [6, 4, 2, 0]
}


// 09. Devuelve el nombre de actividad más largo, conservando el primero en empate, o undefined si la lista está vacía.
{
  function actividadMasLarga(nombres) {
    let elegido = nombres[0];
    for (let i = 1; i < nombres.length; i++) {
      // > conserva el nombre anterior cuando miden lo mismo.
      if (nombres[i].length > elegido.length) {
        elegido = nombres[i];
      }
    }
    return elegido;
  }
  console.log(actividadMasLarga(["Yoga", "Boxeo", "Tenis"])); // Boxeo
  console.log(actividadMasLarga([])); // undefined
}


// 10. Recibe un array de precios y un callback, y devuelve en otro array el resultado de ajustar cada precio con for...of.
{
  function ajustarPrecios(precios, ajustar) {
    const ajustados = [];
    for (const precio of precios) {
      ajustados.push(ajustar(precio)); // Aquí se ejecuta el callback.
    }
    return ajustados;
  }
  const precios = [10, 20];
  console.log(ajustarPrecios(precios, (precio) => precio - 2)); // [8, 18]
  console.log(ajustarPrecios(precios, (precio) => precio * 2)); // [20, 40]
  console.log(precios); // [10, 20]
}


// B · OBJETOS 

// 11. Crea un objeto libro con titulo, paginas y prestado, y muestra su título.
{
  const libro = { titulo: "Matilda", paginas: 240, prestado: false };
  console.log(libro.titulo); // Matilda
}


// 12. Crea un objeto con nombre y edad, añade un correo y elimina edad con delete.
{
  const ficha = { nombre: "Nora", edad: 19 };
  ficha.correo = "nora@ejemplo.com";
  delete ficha.edad;
  console.log(ficha); // { nombre: "Nora", correo: "nora@ejemplo.com" }
}


// 13. Recorre ["nombre", "activo"] y muestra el valor de cada clave de { nombre: "Nora", activo: false }.
{
  const ficha = { nombre: "Nora", activo: false };
  for (const clave of ["nombre", "activo"]) {
    console.log(ficha[clave]); // Los corchetes usan el valor guardado en clave.
  }
  // Salida: Nora y false.
}


// 14. Crea un objeto que contenga otro objeto y muestra una propiedad del interior.
{
  const usuario = { nombre: "Luis", direccion: { ciudad: "Valencia" } };
  console.log(usuario.direccion.ciudad); // Valencia
}


// 15. Crea dos objetos con el mismo nombre y comprueba con === si son el mismo objeto y si sus nombres son iguales.
{
  const primera = { nombre: "Alex" };
  const segunda = { nombre: "Alex" };
  // Cada par de llaves crea un objeto distinto, aunque los textos coincidan.
  console.log(primera === segunda); // false
  console.log(primera.nombre === segunda.nombre); // true
}


// B · OBJETOS 

// 16. Crea un turno de Yoga con aforo 10 e inscritos 7, y añade un método que devuelva las plazas libres usando this.
{
  const turno = {
    nombre: "Yoga",
    aforo: 10,
    inscritos: 7,
    plazasLibres: function () {
      return this.aforo - this.inscritos;
    }
  };
  console.log(turno.plazasLibres()); // 3
  turno.inscritos = 10;
  console.log(turno.plazasLibres()); // 0
}


// 17. Consulta una tarifa por nombre en { yoga: 6, boxeo: 8, prueba: 0 } y muestra "Actividad desconocida" si falta.
{
  const tarifas = { yoga: 6, boxeo: 8, prueba: 0 };
  for (const actividad of ["boxeo", "prueba", "tenis"]) {
    const precio = tarifas[actividad];
    // 0 es una tarifa válida. undefined indica que falta en estas pruebas.
    console.log(precio === undefined ? "Actividad desconocida" : precio);
  }
  // Salida: 8, 0 y Actividad desconocida.
}


// 18. Crea una reserva con sala y hora dentro de turno, y cambia solo la hora de "17:00" a "18:30".
{
  const reserva = { id: 8, turno: { sala: "Pista 1", hora: "17:00" } };
  reserva.turno.hora = "18:30";
  console.log(reserva.turno); // { sala: "Pista 1", hora: "18:30" }
}


// 19. Guarda la misma ficha de socio en dos variables, cambia su estado desde una y compruébalo desde la otra.
{
  const socio = { id: 4, activo: false };
  const fichaEnEdicion = socio;
  fichaEnEdicion.activo = true;
  // Ambas variables hacen referencia al mismo objeto.
  console.log(socio.activo); // true
}


// 20. Crea un array con tres actividades y usa forEach para mostrar el nombre y el aforo de cada una.
{
  const actividades = [
    { nombre: "Yoga", aforo: 10 },
    { nombre: "Boxeo", aforo: 8 },
    { nombre: "Tenis", aforo: 4 }
  ];
  actividades.forEach(function (actividad) {
    console.log(actividad.nombre + ": " + actividad.aforo);
  });
  // Salida: Yoga: 10, Boxeo: 8 y Tenis: 4, en líneas separadas.
}


// Problemas

// 21. Crea una lista de colores y una función que devuelva el hexadecimal de un color por su nombre, o undefined si falta.
{
  const colores = [
    { nombre: "rojo", hexadecimal: "#f00" },
    { nombre: "verde", hexadecimal: "#0f0" },
    { nombre: "azul", hexadecimal: "#00f" }
  ];
  function buscarHexadecimal(lista, nombre) {
    const color = lista.find((ficha) => ficha.nombre === nombre);
    // Comprueba el resultado antes de leer hexadecimal.
    return color === undefined ? undefined : color.hexadecimal;
  }
  console.log(buscarHexadecimal(colores, "verde")); // #0f0
  console.log(buscarHexadecimal(colores, "naranja")); // undefined
}


// 22. Comprueba si todos los números de un array aparecen en otro, aunque estén en distinto orden.
{
  function estanTodos(primero, segundo) {
    return primero.every((numero) => segundo.includes(numero));
  }
  console.log(estanTodos([3, 1], [1, 2, 3])); // true
  console.log(estanTodos([3, 4], [1, 2, 3])); // false
  console.log(estanTodos([], [1, 2, 3])); // true, porque no hay ningún número que falte.
}


// 23. Crea una lista de autoescuela con nombre y carnet (true o false), añade dos fichas con una función y devuelve con otra las que tienen carnet.
{
  function agregarPersona(lista, nombre, carnet) {
    lista.push({ nombre: nombre, carnet: carnet });
  }
  function personasConCarnet(lista) {
    return lista.filter((persona) => persona.carnet);
  }
  const personas = [{ nombre: "Ana", carnet: false }];
  agregarPersona(personas, "Luis", true);
  agregarPersona(personas, "Eva", false);
  console.log(personasConCarnet(personas)); // [{ nombre: "Luis", carnet: true }]
}


// 24. Dadas unas sesiones con sala ("Pista" o "Piscina") y asistentes, devuelve un objeto con el total de asistentes por sala.
{
  function sumarAsistencia(sesiones) {
    const totales = { Pista: 0, Piscina: 0 };
    for (const sesion of sesiones) {
      // El nombre de la sala indica qué propiedad se acumula.
      totales[sesion.sala] += sesion.asistentes;
    }
    return totales;
  }
  const sesiones = [
    { sala: "Pista", asistentes: 8 },
    { sala: "Piscina", asistentes: 2 },
    { sala: "Pista", asistentes: 5 }
  ];
  console.log(sumarAsistencia(sesiones)); // { Pista: 13, Piscina: 2 }
  console.log(sumarAsistencia([])); // { Pista: 0, Piscina: 0 }
}


// 25. Dada una lista de socios con puntos y activo, devuelve las fichas activas de mayor a menor puntuación sin reordenar la lista original.
{
  function clasificarActivos(socios) {
    // filter crea un array nuevo que sort puede reordenar.
    const activos = socios.filter((socio) => socio.activo);
    return activos.sort((a, b) => b.puntos - a.puntos);
  }
  const socios = [
    { nombre: "Ana", puntos: 10, activo: true },
    { nombre: "Luis", puntos: 50, activo: false },
    { nombre: "Eva", puntos: 20, activo: true }
  ];
  console.log(clasificarActivos(socios)); // Fichas de Eva y Ana, en ese orden.
  console.log(socios); // La lista original sigue en el orden Ana, Luis, Eva.
}


// 26. Con una lista de productos y un saldo, compra en orden los que puedas pagar y devuelve { comprados, saldo }.
// Guarda los nombres en comprados y sigue con el siguiente producto si alguno no cabe.
{
  function hacerCompra(productos, presupuesto) {
    const comprados = [];
    let saldo = presupuesto;
    for (const producto of productos) {
      if (producto.precio <= saldo) {
        comprados.push(producto.nombre);
        saldo -= producto.precio;
      }
    }
    return { comprados: comprados, saldo: saldo };
  }
  const productos = [
    { nombre: "Conos", precio: 6 },
    { nombre: "Red", precio: 7 },
    { nombre: "Pelota", precio: 4 }
  ];
  console.log(hacerCompra(productos, 10)); // { comprados: ["Conos", "Pelota"], saldo: 0 }
  console.log(hacerCompra(productos, 3)); // { comprados: [], saldo: 3 }
}


// 27. Tramita en orden peticiones de material con codigo y unidades positivas, descontando del stock solo si hay suficientes.
// Devuelve un estado por petición: "Aceptada", "Sin stock" o "Código desconocido".
{
  function tramitarPeticiones(inventario, peticiones) {
    const estados = [];
    for (const peticion of peticiones) {
      const material = inventario.find((ficha) => ficha.codigo === peticion.codigo);
      if (material === undefined) {
        estados.push("Código desconocido");
      } else if (peticion.unidades > material.stock) {
        estados.push("Sin stock");
      } else {
        // La siguiente petición verá el stock actualizado.
        material.stock -= peticion.unidades;
        estados.push("Aceptada");
      }
    }
    return estados;
  }
  const inventario = [{ codigo: "MAT-1", stock: 5 }];
  const peticiones = [
    { codigo: "MAT-1", unidades: 3 },
    { codigo: "MAT-1", unidades: 3 },
    { codigo: "MAT-9", unidades: 1 },
    { codigo: "MAT-1", unidades: 2 }
  ];
  console.log(tramitarPeticiones(inventario, peticiones));
  // ["Aceptada", "Sin stock", "Código desconocido", "Aceptada"]
  console.log(inventario[0].stock); // 0
}
