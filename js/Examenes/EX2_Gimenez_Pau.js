// EXAMEN · BUCLES · ALUMNADO
// Resuelve los 5 ejercicios debajo de cada enunciado.
// Comprueba tus resultados en la consola. Usa nombres distintos en cada ejercicio.

// 1. Turnos pares
// Usa for para mostrar los turnos pares entre 1 y ultimoTurnoE1,
// en orden ascendente y con un turno por línea.
// Tu código:
const ultimoTurnoE1 = 10;

for (let i = 0; i <= ultimoTurnoE1; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
  
}



// 2. Llenar el depósito
// Usa while para sumar los litros de cada garrafa en orden hasta
// alcanzar o superar el objetivo, o hasta agotar las garrafas.
// Muestra cuántas has usado y cuántos litros has reunido.
const garrafasE2 = [4, 3, 2, 2];
const objetivoE2 = 10;
let suma = 0
let i = 0
let nGarrafas = 0
// Tu código:
while (suma < objetivoE2 && i < garrafasE2.length) {
  
    suma += garrafasE2[i]
    console.log((i + 1) + "º Garrafa: " + garrafasE2[i] + " litros, llevas " + suma + " litros");
    i++
    nGarrafas++
   

    
    
}
console.log("Has reunido " + suma + " litros en " + nGarrafas + " garrafas");





// 3. Fichas para revisar
// Usa for...of para crear un array con los nombres de los equipos
// que estén activos y tengan menos de 3 unidades. Muestra los nombres
// separados por " | " y el número de equipos seleccionados.
const equiposE3 = [
  { nombre: "Balones", activo: true, unidades: 2 },
  { nombre: "Redes", activo: false, unidades: 0 },
  { nombre: "Conos", activo: true, unidades: 3 },
  { nombre: "Petos", activo: true, unidades: 1 },
];
const activos = []
let nEquipos = 0
// Tu código:
for (const equipo of equiposE3) {
    if (equipo.activo === true && equipo.unidades >= 3) {
        nEquipos++
        activos.push(equipo.nombre)
        
    }
    
}
console.log(activos.join(" | "));
console.log("Número de equipos seleccionados: " + nEquipos);




// 4. Asientos libres por fila
// En esta sala, "L" significa libre y "O", ocupado. Usa dos bucles
// anidados para mostrar cuántos asientos libres tiene cada fila,
// empezando por la fila 1. Al final, muestra el total de la sala.
const salaE4 = [
  ["L", "O", "L"],
  ["O", "O", "O"],
  ["L", "L", "O"],
];
// Tu código:
let libresPorFila = 0
let totalLibres = 0
for (let i = 0; i < salaE4.length; i++) {
    for (let j = 0; j < salaE4[0].length; j++) {
        if (salaE4[i][j].includes("L")) {
            libresPorFila++
            totalLibres++

            
        }
    }
    console.log("En la " + (i+1) + " fila hay " + libresPorFila + " asientos libres");
    libresPorFila = 0
    
    
}
console.log("En total en la sala hay " + totalLibres + " asientos libres");




// 5. La racha más larga
// Cada número indica los pasos de un día. Usa un bucle para encontrar
// y mostrar cuántos días seguidos se alcanzaron al menos 7000 pasos
// en la racha más larga. Si ningún día llega al objetivo, muestra 0.
const pasosE5 = [7200, 8000, 4300, 6900, 7000, 8200, 7600];
// Tu código:´
let ndias = 0

let rachaMaxima = 0
pasosE5.forEach((dia, i) => {
    if (dia >= 7000) {
        rachaMaxima++
        ndias++
            
    } else {
        rachaMaxima = 0
        
        
    }
    
});
console.log("Has llegado al objetivo diario de pasos " + ndias + " esta semana");

console.log("La racha maxima de dias fue " + rachaMaxima + " dias");

