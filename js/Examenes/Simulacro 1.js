// SIMULACRO 02 · FUNDAMENTOS DE JAVASCRIPT — ALUMNADO
// Resuelve los seis ejercicios debajo de su enunciado.
// Ejecuta el archivo en la consola. No necesitas prompt, HTML ni DOM.
// Utiliza nombres de variables diferentes en cada ejercicio.

// 1. Acceso a la piscina
// Datos: edad = 15, cuotaPagada = true, traeToalla = true, vieneConAdulto = false.
// Para entrar a la piscina es OBLIGATORIO tener la cuota pagada Y traer toalla.
// Además, si la persona tiene MENOS de 16 años, también es OBLIGATORIO que venga con un adulto.
// Usa if/else y operadores lógicos para mostrar "Acceso permitido" o "Acceso denegado".
// Cambia los datos (por ejemplo, vieneConAdulto = true) para comprobar que funciona.
// Tu código:

const edad = 15;
const cuotaPagada = true;
const traeToalla = true;
const vieneConAdulto = false;

if (cuotaPagada && traeToalla) {
    // Ya tiene lo básico, ahora comprobamos la edad ANTES de dejarle pasar
    if (edad < 16 && !vieneConAdulto) {
        console.log("Acceso denegado (necesita adulto)");
    } else {
        console.log("Acceso permitido");
    }
} else {
    console.log("Acceso denegado (falta cuota o toalla)");
}

// Una condicion

/*  Entra SI (tiene cuota Y toalla) Y ADEMÁS (es mayor de 16 O viene con un adulto)
if (cuotaPagada && traeToalla && (edad >= 16 || vieneConAdulto)) {
    console.log("Acceso permitido");
} else {
    console.log("Acceso denegado");
} */




// 2. Registro de pasos semanales
// Datos: [8500, 10200, 7000, 12000, 9000, 15000, 6000].
// Calcula el total de pasos dados en toda la semana y cuenta cuántos días
// se superaron los 10.000 pasos. 
// Muestra el total de pasos y los días que se logró el objetivo diario.
// Si el total de la semana supera los 60.000 pasos, muestra también "¡Reto semanal superado!".
// Tu código:

const pasos = [8500, 10200, 7000, 12000, 9000, 15000, 6000]
let mas10k = 0
let total = 0
pasos.forEach((p) => { 
    total += p 
    if (p > 10000) {
        mas10k++

     }
})

console.log("Total de pasos: " + total + ", dias que conseguiste el objetivo diario: " + mas10k);

if (total > 60000) {
    console.log("¡Reto semanal superado!");
}





// 3. Limpieza de códigos de descuento
// Datos: [" VERANO25 ", "Otoño24", "  verano25", " INVIERNO", "VERANO25 "].
// Tienes una lista de cupones introducidos por los usuarios. Crea un nuevo array 
// guardando SOLO los cupones que contengan la palabra "VERANO". 
// IMPORTANTE: Guárdalos en el nuevo array totalmente limpios de espacios a los lados 
// y siempre en MAYÚSCULAS. Al final, únelos con " - " y muéstralos por consola.
// Tu código:
const codigos = [" VERANO25 ", "Otoño24", "    222verano25", " INVIERNO", "VERANO4EVER25 "]
const verano = []
codigos.forEach((codigo) => {
    const limpio = codigo.trim().toUpperCase()
    if (limpio.includes("VERANO")) {
        verano.push(limpio)
        
    }
})
console.log("Cupones con la palabra verano: " + verano.join(" - "));




// 4. Inventario de tienda (NIVEL ALTO)
// Encuentra el producto MÁS CARO que tenga STOCK DISPONIBLE (stock mayor a 0).
// Muestra el nombre de ese producto y su precio. 
// Además, calcula y muestra el valor total del almacén (sumando el precio * stock de TODOS los productos).
// OJO: No uses sort() para buscar el más caro. Usa una variable temporal para guardar el ganador,
// como intentamos hacer en el ejercicio del concurso de fotografía.
const inventario = [
  { prod: "Ratón", precio: 15, stock: 10 },
  { prod: "Teclado", precio: 45, stock: 0 },
  { prod: "Monitor", precio: 150, stock: 3 },
  { prod: "Webcam", precio: 30, stock: 5 }
];
// Tu código:

let masCaro = inventario[0].precio
let productoMasCaro
let totalAlm = 0

console.log("------------ ALMACÉN ------------");
inventario.forEach(function (producto, i){
    if (producto.precio > masCaro && producto.stock > 0) {
        productoMasCaro = producto.prod;
        masCaro = producto.precio;
        
    }
    console.log((i + 1) + ".- Producto: " + producto.prod + ", precio: " + producto.precio + ", stock: " + producto.stock);
    i++
    totalAlm += producto.precio * producto.stock
    

})

console.log("Valor total del almacén: " + totalAlm);
console.log("Prodcuto mas caro: " + productoMasCaro);






// 5. Control de vuelos (JSON)
// Convierte este texto JSON en un array. Ordena los vuelos de MAYOR a MENOR retraso.
// Recorre el array ordenado para mostrar: "Vuelo [nombre]: [minutos] min de retraso".
// Después, usa el método .some() para comprobar y mostrar si hay ALGÚN vuelo
// con más de 30 minutos de retraso. Finalmente, vuelve a convertir el array a JSON.
let jsonVuelos = 
  '[{"vuelo":"IB123","retraso":15},{"vuelo":"RY44","retraso":0},{"vuelo":"VY88","retraso":45}]';
// Tu código:

const vuelos = JSON.parse(jsonVuelos)
let mas = 0
vuelos.sort(function(a, b) {
    return b.retraso - a.retraso;
});
vuelos.forEach(v => {
    console.log("Vuelo " + v.vuelo + ": " + v.retraso + " min de retraso");
    
    
});
const hayMas30 = vuelos.some(function(v) {
    return v.retraso > 30;
});

// Usamos el booleano directamente para imprimir un mensaje
if (hayMas30) {
    console.log("Aviso: Hay algún vuelo con más de 30 minutos de retraso.");
} else {
    console.log("Todo en orden: Ningún vuelo supera los 30 minutos de retraso.");
}

jsonVuelos = JSON.stringify(vuelos)
console.log(jsonVuelos);





// 6. Límite de peso en el ascensor (NIVEL ALTO)
// Tienes una cola de personas esperando para subir al ascensor. El peso de cada una es:
// [70, 85, 90, 65, 80]. El ascensor soporta un máximo de 300 kg en total.
// Usa un bucle WHILE para ir subiendo a las personas una a una. 
// En cada vuelta, suma su peso. Si al intentar subir a la siguiente persona 
// se superan los 300 kg, debes detener INMEDIATAMENTE el bucle usando "break".
// Muestra cuántas personas han subido y cuál es el peso total que llevan.
const pesosCola = [70, 85, 90, 65, 80];
const pesoMaximo = 300;
// Tu código:

let i = 0
let peso = 0

while (i < pesosCola.length) {
    peso += pesosCola[i]
    i++
   
    if (peso + pesosCola[i] > pesoMaximo) {
        break;
        
    }
}

console.log("Han subido: " + i + " personas");
console.log("Peso total: " + peso);

