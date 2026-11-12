// PRÁCTICA DE JAVASCRIPT · 27 RETOS
// Escribe tu código debajo de cada enunciado y pruébalo en la consola.
// Cuando el ejercicio pida devolver un valor, usa return y compruébalo
// con console.log desde fuera de la función.

// A · FUNCIONES

// 01. Devuelve la suma de los números impares de un array.
// Tu código:
function devuelveSumaImpares(numeros) {
  let suma = 0;
  numeros.forEach((n) => {
    if (n % 2 !== 0) {
      suma += n;
    }
  });
  return suma;
}
console.log(devuelveSumaImpares([2, 3, 4, 5, 6, 7, 8, 9])); // 24

// 02. Devuelve el número mayor de un array o undefined si está vacío.
// Tu código:
function numeroMayor(numeros) {
  let mayor = numeros[0];
  numeros.forEach((n) => {
    if (n > mayor) {
      mayor = n;
    }
  });
  return mayor;
}
console.log(numeroMayor([24, 3, 55, 5, 46, 97, 8, 9]));

// 03. Devuelve una palabra escrita al revés usando un bucle.
// Tu código:
function devuelveAlReves(palabra) {
  let invertida = "";
  for (let i = palabra.length - 1; i >= 0; i--) {
    invertida += palabra[i];
  }
  return invertida;
}
console.log(devuelveAlReves("Ordenador"));

// 04. Devuelve los números comunes a dos arrays, sin repetirlos y en el orden del primero.
// Tu código:
const numeros1 = [1, 5, 7, 9, 3, 23];
const numeros2 = [5, 2, 3, 7, 10];
function numerosComunes(numeros1, numeros2) {
  const numerosIguales = [];
  numeros1.forEach((n) => {
    if (numeros2.includes(n) && !numerosIguales.includes(n)) {
      numerosIguales.push(n);
    }
  });
  return numerosIguales;
}
console.log(numerosComunes(numeros1, numeros2));

// 05. Comprueba si un entero es primo (mayor que 1 y divisible solo por 1 y por sí mismo).
// Tu código:
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
console.log(esPrimo(5)); // true
console.log(esPrimo(15)); // false
console.log(esPrimo(2)); // true
console.log(esPrimo(1)); // false



// A · FUNCIONES

// 06. Calcula el coste de una reserva a 7 € por persona, con 1 € de descuento por persona si son 5 o más.
// Tu código:
/*
function calcularReserva(numeroPersonas) {
    const precioPorPersona = 7
    let precioFinal = 7 * numeroPersonas
    if (numeroPersonas >= 5) {
        precioFinal -= numeroPersonas 
        
    }
    return precioFinal

}
*/
function calcularReserva(numeroPersonas) {
    const precioPorPersona = numeroPersonas >= 5 ? 6 : 7
    
    return  precioPorPersona * numeroPersonas
    

}
console.log(calcularReserva(5));

// 07. Devuelve un código de sala en mayúsculas y sin espacios en los extremos, o "SAL-00" si falta o queda vacío.
// Tu código:
function limpiarCodigo(codigo) {
    const limpio = codigo.trim().toUpperCase()
    return limpio === "" ? "SAL-00" : limpio
    
}
console.log(limpiarCodigo(" SaL-23   "));
console.log(limpiarCodigo("   "));



// 08. Genera un array desde un entero no negativo, bajando de dos en dos sin pasar de 0 (7 → [7, 5, 3, 1]).
// Tu código:
function cuentaAtrás(numero) {
    const array = []
    for (let i = numero; i > 0; i-=2) {
        
        array.push(i)
        
    }
    return array
    
}
console.log(cuentaAtrás(10));
console.log(cuentaAtrás(15));


// 09. Devuelve el nombre de actividad más largo, conservando el primero en empate, o undefined si la lista está vacía.
// Tu código:
const actividades = ["Futbol", "Boxeo", "Tenis", "Badminton"]
function masLargo (actividades) {
    let masLargo = actividades[0]
    actividades.forEach(a => {
        if (a.length > masLargo.length) {
            masLargo = a
            
        }
        
    });
    return masLargo

    
}
console.log(masLargo(actividades));


// 10. Recibe un array de precios y un callback, y devuelve en otro array el resultado de ajustar cada precio con for...of.
// Tu código:
const precios = [10, 15, 16]
function ajustePrecios(precios, ajustar) {
    const ajustados = []
    for (const p of precios) {
        ajustados.push(ajustar(p))
        
    }
    return ajustados
    
}
console.log(ajustePrecios(precios, (precio) => precio - 5));
console.log(ajustePrecios(precios, (precio) => precio * 3));







// B · OBJETOS

// 11. Crea un objeto libro con titulo, paginas y prestado, y muestra su título.
// Tu código:

// 12. Crea un objeto con nombre y edad, añade un correo y elimina edad con delete.
// Tu código:

// 13. Recorre ["nombre", "activo"] y muestra el valor de cada clave de { nombre: "Nora", activo: false }.
// Tu código:

// 14. Crea un objeto que contenga otro objeto y muestra una propiedad del interior.
// Tu código:

// 15. Crea dos objetos con el mismo nombre y comprueba con === si son el mismo objeto y si sus nombres son iguales.
// Tu código:

// B · OBJETOS

// 16. Crea un turno de Yoga con aforo 10 e inscritos 7, y añade un método que devuelva las plazas libres usando this.
// Tu código:

// 17. Consulta una tarifa por nombre en { yoga: 6, boxeo: 8, prueba: 0 } y muestra "Actividad desconocida" si falta.
// Tu código:

// 18. Crea una reserva con sala y hora dentro de turno, y cambia solo la hora de "17:00" a "18:30".
// Tu código:

// 19. Guarda la misma ficha de socio en dos variables, cambia su estado desde una y compruébalo desde la otra.
// Tu código:

// 20. Crea un array con tres actividades y usa forEach para mostrar el nombre y el aforo de cada una.
// Tu código:

// C Problemas

// 21. Crea una lista de colores y una función que devuelva el hexadecimal de un color por su nombre, o undefined si falta.
// Tu código:

// 22. Comprueba si todos los números de un array aparecen en otro, aunque estén en distinto orden.
// Tu código:

// 23. Crea una lista de autoescuela con nombre y carnet (true o false), añade dos fichas con una función y devuelve con otra las que tienen carnet.
// Tu código:

// 24. Dadas unas sesiones con sala ("Pista" o "Piscina") y asistentes, devuelve un objeto con el total de asistentes por sala.
// Tu código:

// 25. Dada una lista de socios con puntos y activo, devuelve las fichas activas de mayor a menor puntuación sin reordenar la lista original.
// Tu código:

// 26. Con una lista de productos y un saldo, compra en orden los que puedas pagar y devuelve { comprados, saldo }.
// Guarda los nombres en comprados y sigue con el siguiente producto si alguno no cabe.
// Tu código:

// 27. Tramita en orden peticiones de material con codigo y unidades positivas, descontando del stock solo si hay suficientes.
// Devuelve un estado por petición: "Aceptada", "Sin stock" o "Código desconocido".
// Tu código:
