// SIMULACRO 03 · FUNDAMENTOS DE JAVASCRIPT — ALUMNADO
// Resuelve los seis ejercicios debajo de su enunciado.
// Ejecuta el archivo en la consola. No necesitas prompt, HTML ni DOM.
// Utiliza nombres de variables diferentes en cada ejercicio.

// 1. Verificación de Matrículas (Strings y Condicionales)
// Recibes el texto "  AB-1234-C   ". Para que la matrícula sea válida debe cumplir TRES cosas:
// 1. No tener espacios a los lados.
// 2. Tener exactamente 9 caracteres de longitud (una vez limpia).
// 3. Terminar con la letra "C" o la letra "E".
// Limpia la matrícula, extrae su último carácter para comprobarlo y usa un if/else
// para mostrar "Matrícula válida" o "Matrícula rechazada".
// Tu código:
const matricula = "  AB-1234-E   ";


const matriculaLimpia = matricula.trim();

const ultimaLetra = matriculaLimpia[matriculaLimpia.length - 1];


if (matriculaLimpia.length === 9 && (ultimaLetra === "C" || ultimaLetra === "E")) {
  console.log("Matrícula válida");
} else {
  console.log("Matrícula rechazada");
}

// 2. Control de Calidad (Arrays y Math)
// Tienes un array con el peso (en gramos) de varios paquetes: [850, 1200, 900, 3000, 1500]
// Crea un array vacío llamado "paquetesValidos".
// Recorre el array original. Debes convertir cada peso a KILOS (dividiendo entre 1000).
// Solo los paquetes que pesen entre 1kg y 2kg (ambos incluidos) son válidos, guárdalos
// en el nuevo array. Al final, muestra cuántos paquetes se han rechazado en total.
// Tu código:
const pesos = [850, 1200, 900, 3000, 1500]
const paquetesValidos = []
let rechazados = 0
pesos.forEach(peso => {
    peso /= 1000
    if (peso >= 1 && peso <= 2) {
        paquetesValidos.push(peso)

    } else {
        rechazados++
    }
    
});

console.log("Paquetes válidos: " + paquetesValidos.join(" // "));
console.log("Se han rechazado " + rechazados + " paquetes");



// 3. Actualización masiva de usuarios (Objetos)
// Ha habido un error en el sistema y hay que regalar 15 puntos a todos los usuarios.
// Recorre el array: súmale 15 puntos a cada uno.
// Además, si tras la suma el usuario alcanza o supera los 100 puntos,
// cámbiale el nivel a "Oro". Si se queda por debajo, no le cambies nada.
// Muestra por consola cada usuario con su puntuación y nivel actualizados.
const usuarios = [
  { nombre: "Leo", puntos: 80, nivel: "Plata" },
  { nombre: "Mia", puntos: 95, nivel: "Plata" },
  { nombre: "Zoe", puntos: 40, nivel: "Bronce" },
];
// Tu código:
console.log("---------- Usuarios ----------");

usuarios.forEach(usuario => {
    usuario.puntos += 15
    if (usuario.puntos >= 100) {
        usuario.nivel = "Oro"
        
    }
    console.log("Nombre: " + usuario.nombre + ", puntos: " + usuario.puntos + ", nivel: " + usuario.nivel);
    

    
});





// 4. Lista de la compra automática (Cruce de Arrays - NIVEL ALTO)
// Vas a cocinar y necesitas unos ingredientes, pero tienes que mirar qué te falta.
// Tienes la "receta" y lo que hay en tu "despensa".
// Crea un array vacío llamado "listaCompra". Recorre los ingredientes de la receta.
// Si un ingrediente de la receta NO ESTÁ incluido en la despensa, añádelo a la listaCompra.
// Finalmente, muestra: "Tienes que ir a comprar: [ingredientes separados por comas]".
const receta = ["harina", "huevos", "azúcar", "levadura", "mantequilla"];
const despensa = ["leche", "azúcar", "harina", "cacao"];
// Tu código:
const listaCompra = []

receta.forEach(i => {
    if (!despensa.includes(i)) {
        listaCompra.push(i)
        
    }
    
});
console.log("Tienes que ir a comprar: " + listaCompra.join(", "));


// 5. Monitorización de Servidores (JSON y every/some)
// Convierte el JSON a un array de objetos.
// Un servidor está en estado crítico si su temperatura actual es MAYOR que su temperatura máxima permitida.
// 1. Usa .every() para comprobar si TODOS los servidores están seguros (temperatura menor o igual a la máxima).
// 2. Usa .some() para comprobar si HAY ALGÚN servidor en estado crítico.
// Muestra un mensaje adecuado para cada comprobación.
const jsonServidores =
  '[{"id":1, "tempActual": 65, "tempMax": 70}, {"id":2, "tempActual": 85, "tempMax": 80}]';

const servidores = JSON.parse(jsonServidores)

const todosSeguros = servidores.every(function (t){
    return t.tempActual <= t.tempMax

})

const algunosSeguros = servidores.some(function (t){
    return t.tempActual > t.tempMax

})

todosSeguros ? console.log("Todos los servidores estan estables") : console.log("NO estan todos PRECAUCIÓN");
algunosSeguros ? console.log("Hay servidores en estado CRITICO") : console.log("No hay ningun servidor en estado critico");



