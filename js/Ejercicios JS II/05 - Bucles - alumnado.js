// 05 - BUCLES EN JAVASCRIPT
//
// Resuelve los ejercicios debajo de cada enunciado y comprueba la consola.
// Antes de ejecutar, intenta predecir cuántas vueltas dará cada bucle.
// Puedes utilizar for, while, do while y for...of según convenga.
// Trabaja con lo visto hasta ahora: variables, arrays, objetos, textos,
// operadores, condicionales y métodos básicos. No necesitas HTML ni DOM.
// Usa nombres distintos en cada ejercicio si ejecutas el archivo completo.
// El ejercicio 10 usa prompt: pruébalo en el navegador.

// ============================================================
// ONCE EJERCICIOS PARA PRACTICAR
// ============================================================

// 1. Números de turno
// Muestra los números de turno del 1 al 12 con un bucle for.
// Después muestra cuántos turnos has escrito en total.
// Tu código:
let cantidad = 0;
for (let i = 1; i <= 12; i++) {
  console.log("Turno: " + i);
  cantidad++;
}
console.log("Total de turnos: " + cantidad);

// 2. Recuento de una semana
// Un centro abrió durante 7 días. Suma los números del 1 al 7 y muestra
// el total. Usa una variable acumuladora que empiece en 0.
// En cada vuelta, muestra también el día y el total acumulado hasta ese día.
// Tu código:
let total = 0;
for (let i = 1; i <= 7; i++) {
  console.log("Dia " + i + ", total acumulado: " + total);

  total += i;
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 4. Lista numerada
// Recorre ["Recepción", "Piscina", "Sala de actividades", "Pista"]
// y muestra: "Zona 1: Recepción", "Zona 2: Piscina", etc.
// Necesitas tanto el elemento como su posición. No uses forEach aquí.
// Tu código:
const actividades = ["Recepción", "Piscina", "Sala de actividades", "Pista"];
for (let i = 0; i < actividades.length; i++) {
  console.log("Zona " + (i + 1) + ": " + actividades[i]);
}

// 5. Contar vocales
// El texto es "deporte activo". Recorre sus letras y cuenta las vocales.
// Tu código:
const texto = "deporte activo";
const vocales = "aeiou";
let contador = 0;
for (const letra of texto) {
  if (vocales.includes(letra)) {
    contador++;
  }
}
console.log("Total vocales en el texto: " + contador);

// 6. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10.
// Elige tú los números del array.
const numeros = [11, 9, 12, 5, 33, 101, 2];
const nuevoN = [];
numeros.forEach((n) => {
  if (n > 10) {
    nuevoN.push(n);
  }
});
console.log("Nuevo array con numeros mayores a 10: " + nuevoN);

// 7. Tabla de una tarifa
// Una entrada cuesta 7 euros. Muestra el coste de comprar de 1 a 10
// entradas: "1 entrada: 7 €", "2 entradas: 14 €", etc.
// Tu código:
let entrada = 7;
for (let i = 1; i < 10; i++) {
  console.log(i + " entrada: " + entrada + "€");
  entrada += 7;
}

// 8. Texto al revés
// Dado el texto "SALA", crea otro texto con sus letras en orden inverso.
// Debe salir "ALAS". Recorre las posiciones desde la última hasta la
// primera.
// Tu código:
const palabraS = "SALA";
let textoReves = "";
for (let i = palabraS.length - 1; i >= 0; i--) {
  textoReves += palabraS[i];
}
console.log("Texto al revés: " + textoReves);

// 9. Alcanzar un objetivo
// Una hucha empieza con 0 euros. Cada semana se ingresan 6 euros.
// Usa while para mostrar en qué semana se alcanzan o superan los 25 euros.
// Muestra el saldo de cada semana y detén el bucle al llegar al objetivo.
// Tu código:
let hucha = 0;
let semana = 1;
while (hucha < 25) {
  semana++;
  hucha += 6;
  console.log("Semana " + semana + ": " + hucha);
}
console.log("Objetivo alcanzado en la semana " + semana);


// 10. Pirámide centrada
// Crea dos variables: una con el carácter (por ejemplo, "#") y otra con
// la altura (por ejemplo, 5). Dibuja una pirámide centrada en la consola
// con bucles anidados. Cambia las variables y prueba otra altura y carácter.
// No uses métodos como .repeat(). Para altura 5 y carácter "#" debe salir:
//     #
//    ###
//   #####
//  #######
// #########
// Tu código:
for (let i = 0; i < 5; i++) {
  console.log("#");
  for (let j = 0; j < 5; j++) {
    console.log(" ");
    
  }

}