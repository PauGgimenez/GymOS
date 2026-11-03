// 05 - BUCLES EN JAVASCRIPT: SOLUCIONES
// Corresponde a los 11 ejercicios de «05 - Bucles - alumnado.js».
// Puede haber otras soluciones correctas. Solo el ejercicio 10 usa prompt
// y debe ejecutarse en el navegador (por ejemplo, con Live Server).

// 1. Números de turno
let cantidadE1 = 0;
for (let turnoE1 = 1; turnoE1 <= 12; turnoE1++) {
  console.log("Turno", turnoE1);
  cantidadE1++;
}
console.log("Total de turnos:", cantidadE1);

// 2. Recuento de una semana
let sumaE2 = 0;
for (let diaE2 = 1; diaE2 <= 7; diaE2++) {
  sumaE2 += diaE2; // Conserva la suma anterior y añade el día actual.
  console.log("Día", diaE2, "→ acumulado:", sumaE2);
}
console.log("Total:", sumaE2);

// 3. Números pares entre 1 y 50
// Empezamos en 2 y avanzamos de dos en dos; así no aparece el 0.
for (let numeroE3 = 2; numeroE3 <= 50; numeroE3 += 2) {
  console.log(numeroE3);
}

// 4. Lista numerada
const zonasE4 = ["Recepción", "Piscina", "Sala de actividades", "Pista"];
for (let indiceE4 = 0; indiceE4 < zonasE4.length; indiceE4++) {
  console.log("Zona " + (indiceE4 + 1) + ": " + zonasE4[indiceE4]);
}
// El índice del array empieza en 0; el número mostrado empieza en 1.

// 5. Contar vocales
const textoE5 = "deporte activo";
const vocalesE5 = "aeiou";
let totalVocalesE5 = 0;
for (let indiceE5 = 0; indiceE5 < textoE5.length; indiceE5++) {
  const letraE5 = textoE5[indiceE5];
  if (vocalesE5.includes(letraE5)) {
    totalVocalesE5++;
  }
}
console.log("Vocales:", totalVocalesE5); // 6

// 6. Crear otro array con números mayores que 10
const numerosE6 = [4, 12, 9, 25, 10, 17];
const mayoresDeDiezE6 = [];
for (const numeroE6 of numerosE6) {
  if (numeroE6 > 10) {
    mayoresDeDiezE6.push(numeroE6);
  }
}
console.log("Original:", numerosE6);
console.log("Mayores que 10:", mayoresDeDiezE6); // [12, 25, 17]

// 7. Tabla de una tarifa
const precioE7 = 7;
for (let entradasE7 = 1; entradasE7 <= 10; entradasE7++) {
  const palabraE7 = entradasE7 === 1 ? "entrada" : "entradas";
  console.log(entradasE7 + " " + palabraE7 + ": " + (entradasE7 * precioE7) + " €");
}

// 8. Texto al revés
const textoE8 = "SALA";
let invertidoE8 = "";
for (let indiceE8 = textoE8.length - 1; indiceE8 >= 0; indiceE8--) {
  invertidoE8 += textoE8[indiceE8];
}
console.log("Texto invertido:", invertidoE8); // ALAS

// 9. Alcanzar un objetivo
let saldoE9 = 0;
let semanaE9 = 0;
while (saldoE9 < 25) {
  semanaE9++;
  saldoE9 += 6;
  console.log("Semana " + semanaE9 + ": " + saldoE9 + " €");
}
console.log("Objetivo alcanzado en la semana", semanaE9); // 5

// 10. Tu primer dato introducido por el usuario
// Al cargar esta hoja desde el HTML, prompt abre el cuadro de entrada.
// Devuelve texto; Number lo convierte para compararlo con el contador.
const cantidadE10 = Number(prompt("¿Cuántos turnos quieres mostrar?"));
for (let turnoE10 = 1; turnoE10 <= cantidadE10; turnoE10++) {
  console.log("Turno", turnoE10);
}


// 11. Pirámide centrada con bucles anidados
// Cambia estas dos variables para probar otros resultados.
const caracterE11 = "#";
const alturaE11 = 5;

for (let filaE11 = 1; filaE11 <= alturaE11; filaE11++) {
  let lineaE11 = "";

  // Añadimos los espacios necesarios para centrar esta fila.
  for (let espacioE11 = 0; espacioE11 < alturaE11 - filaE11; espacioE11++) {
    lineaE11 += " ";
  }

  // Cada fila tiene 1, 3, 5... caracteres.
  for (let columnaE11 = 0; columnaE11 < 2 * filaE11 - 1; columnaE11++) {
    lineaE11 += caracterE11;
  }

  console.log(lineaE11);
}
