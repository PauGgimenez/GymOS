// PRÁCTICA 02 · FUNDAMENTOS DE JAVASCRIPT ALUMNADO
// Cinco ejercicios nuevos para practicar la misma lógica con otros datos.
// Muestra los resultados en la consola. No necesitas prompt, HTML ni DOM.
// Utiliza nombres distintos en cada ejercicio si ejecutas el archivo entero.

// 1. Gastos de envío
// Un pedido cuesta 38 euros y la persona no es socia. El enví­o cuesta
// 4 euros, salvo si el pedido llega a 50 euros o la persona es socia.
// Muestra el coste del enví­o y el total a pagar. Cambia las variables
// para probar un pedido con envío gratuito.
// Tu código:

const precio = 30;
const esSocia = false;
let envio = 4;
let precioFinal = 0;
if (precio > 50 || esSocia) {
    envio = 0;

} else {
    envio = 4;
}
precioFinal = precio + envio;
console.log("El precio final es: " + precioFinal);




// 2. Viajes de una semana
// Los kilómetros recorridos cada di­a fueron [12, 0, 18, 7, 0].
// Muestra los kilómetros totales, cuántos dí­as no hubo viaje y cuál fue
// el recorrido más largo de un di­a.
// Tu código:

const kilometros = [12, 0, 18, 7, 0]
let kmTotales = 0
let noViaje = 0
let masLargo = kilometros[0]
let i = 0

kilometros.forEach((km) => {
    kmTotales += km
    if (km == 0) {
        noViaje++
        
    } else if (km > masLargo) {
        masLargo = km
        i = km[masLargo]

    }

})

console.log("El total de kilometros fue: " + kmTotales);
console.log("No hubo viaje " + noViaje + " dias");
console.log("El dia mas fue el " + i + " con: " + masLargo + " kilometros")



// 3. Códigos de equipaje
// Los códigos son ["  A-104 ", "B-209", " A-330", "C-400"].
// Quita los espacios de los extremos y guarda en otro array solo los
// códigos que EMPIECEN por "A-". Muestra cuántos hay y Añadelos con ", ".
// Tu código:

const codigos = ["  A-104 ", "B-209", " A-330", "C-400"]
const codigosA = [];

codigos.forEach((cod) => {
   
    const codLimpio = cod.trim(); 
  
    if (codLimpio.startsWith("A-")) { 
        codigosA.push(codLimpio);
    }
});

console.log("Hay " + codigosA.length + " códigos que empiezan por A-");


console.log(codigosA.join(", "));



// 4. Pasajeros de un autobús
// El autobús comienza con 4 pasajeros. Procesa las paradas en orden.
// En cada una, muestra el nombre y cuántos pasajeros quedan después de
// subir y bajar. Al terminar, muestra el máximo de pasajeros que hubo
// y la parada en la que se alcanza por primera vez.
const paradasE4 = [
  { nombre: "Centro", suben: 3, bajan: 1 },
  { nombre: "Mercado", suben: 5, bajan: 2 },
  { nombre: "Estación", suben: 0, bajan: 6 },
  { nombre: "Parque", suben: 4, bajan: 1 }
];
// Tu código:
let pasajeros = 4
let max = 0
let estacionMax = ""
console.log("Hay " + pasajeros + " pasajeros");

paradasE4.forEach(function (parada, i) {
    console.log((i + 1) + ". parada: " + parada.nombre + " suben " + parada.suben + " y  bajan " + parada.bajan);
    pasajeros += parada.suben
    pasajeros -= parada.bajan
    if (pasajeros > max) {
        max = pasajeros
        estacionMax = parada.nombre

        
    }
    console.log("Hay " + pasajeros + " pasajeros");
    
})

console.log("El numero maximo de pasajeros fue: " + max + " en la parada: " + estacionMax);


// 5. Servicios municipales recibidos como JSON
// Convierte el texto en un array. Muestra los nombres de los servicios
// abiertos y cuéntalos. Comprueba con every si están todos abiertos.
// Después abre el Archivo, repite la comprobación y crea un nuevo texto
// JSON con los datos actualizados.
const serviciosJSONE5 =
  '[{"nombre":"Biblioteca","abierto":true},{"nombre":"Archivo","abierto":false},{"nombre":"Museo","abierto":true}]';
// Tu código:

const serviciosArray = JSON.parse(serviciosJSONE5);
console.log(serviciosArray);
serviciosArray.forEach(function (serv, i) {
    if (serv.abierto) {
        console.log("Servicios abiertos: " + serv.nombre);
        
        
    }
})

const estanAbiertos = serviciosArray.every(function (estan) {
    return estan
})

if (estanAbiertos) {
    console.log("Estan todos abiertos");
    
    
} else {
    console.log("No estan todos abiertos");
}



// 6. Ejercicio 1. Lecturas vÃ¡lidas
// Un sensor ha registrado estos valores: Un sensor ha registrado estos valores:
const lecturas = [7, 0, 12, 5, 0, 9];
// El 0 significa que la lectura ha fallado. Recorre el array con un for y muestra cada lectura vÃ¡lida. Al terminar,
// muestra cuÃ¡ntas lecturas vÃ¡lidas hay y cuÃ¡nto suman. Usa continue para saltar las lecturas fallidas.