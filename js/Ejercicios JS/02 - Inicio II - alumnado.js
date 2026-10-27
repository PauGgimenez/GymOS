// 02 - INICIO (II): CADENAS DE TEXTO
// Ejercicios para practicar cadenas de texto en JavaScript.
// Escribe tus respuestas debajo de "Tu código". Los ejemplos son pistas,
// no soluciones. Antes de ejecutar, intenta predecir el resultado.
// Usa nombres de variables distintos en cada ejercicio para poder ejecutar
// el archivo completo sin errores por repetir un let o un const.


// ============================================================
// 01. UNIR TEXTOS Y MEDIR SU LONGITUD
// ============================================================

// Mini ejemplo: + une textos; length indica cuántos caracteres tienen.
// const saludo = "Hola" + " " + "Ana";
// console.log(saludo);        // Hola Ana
// console.log(saludo.length); // 8: el espacio también cuenta.

// Ejercicio 1. Guarda por separado el nombre de una actividad y el nombre
// de su sala. Muestra una frase con ambos datos, separándolos con " - ".
// Comprueba con typeof que el resultado es un string.
// Tu código:

// Ejercicio 2. Guarda el nombre de tu aplicación en una variable. Muestra
// su longitud. Cambia el nombre por otro que contenga un espacio y observa
// cómo cambia la longitud. ¿El espacio se cuenta como un carácter?
// Tu código:

// ============================================================
// 02. CARACTERES Y CAMBIOS DE MAYÚSCULAS
// ============================================================

// Mini ejemplo: los caracteres empiezan en la posición 0.
// const palabra = "Yoga";
// console.log(palabra[0]);                 // Y
// console.log(palabra[palabra.length - 1]); // a

// Ejercicio 3. Guarda el nombre de un monitor. Muestra su primer carácter
// y su último carácter sin escribir a mano la posición del último.
// Cambia el nombre por otro de distinta longitud y comprueba el resultado.
// Tu código:

// Ejercicio 4. Guarda un título que mezcle mayúsculas y minúsculas, por
// ejemplo "cLaSe De PiLaTeS". Muéstralo todo en mayúsculas y después todo
// en minúsculas. Muestra también la variable original: ¿ha cambiado?
// Tu código:

// ============================================================
// 03. BUSCAR DENTRO DE UNA CADENA
// ============================================================

// Mini ejemplo: includes responde true/false; indexOf indica la posición.
// const aviso = "Clase de natación";
// console.log(aviso.includes("natación")); // true
// console.log(aviso.indexOf("de"));        // 6

// Ejercicio 5. Guarda "Reserva para pilates a las 18:00". Comprueba si
// contiene "pilates" y luego si contiene "yoga". Explica con un comentario
// qué significan los dos resultados booleanos.
// Tu código:

// Ejercicio 6. Con el mismo texto, averigua en qué posición comienza
// "18:00". Busca también "mañana". ¿Qué devuelve indexOf cuando no la
// encuentra? Muestra ambos resultados.
// Tu código:

// Ejercicio 7. Crea dos nombres de actividades iguales salvo por sus
// mayúsculas, por ejemplo "Yoga" y "yoga". Compara ambos con ===.
// Después compáralos tras convertirlos a minúsculas. ¿Cambia el resultado?
// Tu código:

// ============================================================
// 04. EXTRAER Y SUSTITUIR TEXTO
// ============================================================

// Mini ejemplo: slice(inicio, fin) extrae desde inicio hasta antes de fin.
// const codigo = "ACT-245";
// console.log(codigo.slice(0, 3)); // ACT
// console.log(codigo.slice(4));    // 245

// Ejercicio 8. Guarda el código "SALA-204". Muestra por separado "SALA"
// y "204" usando slice. Haz que la segunda extracción llegue hasta el
// final sin indicar el número de la última posición.
// Tu código:

// Ejercicio 9. Guarda el aviso "Clase cancelada". Crea y muestra otro
// texto en el que "cancelada" se cambie por "confirmada". Muestra también
// el aviso original para comprobar si replace lo ha modificado.
// Tu código:

// Ejercicio 10. Guarda "sala norte sala sur". Sustituye todas las apariciones
// de "sala" por "aula". Prueba primero replace y observa qué ocurre;
// después utiliza replaceAll para conseguir el resultado pedido.
// Tu código:

// ============================================================
// 05. PLANTILLAS DE TEXTO
// ============================================================

// Mini ejemplo: las comillas invertidas permiten incluir variables con ${}.
// const persona = "Lucía";
// console.log(`Hola, ${persona}.`); // Hola, Lucía.

// Ejercicio 11. Guarda el nombre de una actividad, su precio y el número
// de participantes. Muestra una sola frase con los tres datos usando
// comillas invertidas y ${}. Incluye el importe total calculado.
// Tu código:

// Ejercicio 12. Escribe con comillas invertidas un mensaje de tres líneas:
// actividad, sala y hora. Los valores deben venir de variables. Comprueba
// en la consola que aparecen tres líneas, no el texto "\n".
// Tu código:

// Ejercicio 13. Guarda dos nombres de salas diferentes. Comprueba con ===
// si los nombres son iguales y si tienen la misma longitud. Muestra una
// frase para cada comprobación con su resultado true o false.
// Tu código:

// ============================================================
// 06. RETOS MÁS DIFÍCILES: SOLO CADENAS
// ============================================================

// Ejercicio 14. Recibes "   yoga para principiantes   ". Prepara un
// nombre para mostrar en pantalla: quita los espacios de los extremos con
// trim, conviértelo a mayúsculas y cambia "PRINCIPIANTES" por "INICIO".
// Guarda el resultado en otra variable. Muestra el original y el nuevo.
// Pista: puedes encadenar métodos, pero también hacerlo paso a paso.
// Tu código:

// Ejercicio 15. Tienes "RES-2026-154". Extrae con slice el tipo (RES),
// el año (2026) y el número final (154). Forma este mensaje con una
// plantilla: "Reserva 154 del año 2026 (tipo RES)".
// Después comprueba con includes si el código pertenece a 2026.
// Tu código:

// ============================================================
// 07. RETOS QUE MEZCLAN CONTENIDOS ANTERIORES
// ============================================================

// Ejercicio 16. Una clase admite 15 personas y ya hay 12. Llegan 3
// solicitudes, cada una cuesta 9 euros y todas han pagado.
// a) Calcula cuántas personas habría si se aceptaran.
// b) Usa <= y && para comprobar que caben Y han pagado.
// c) Con un ternario, muestra "Reserva aceptada" o "Sin plazas".
// d) Muestra con una plantilla el ingreso de las solicitudes aceptadas.
//    Si no se aceptan, el ingreso será 0. Cambia solicitudes a 4 y prueba.
// Tu código:

// Ejercicio 17. Una persona escribe el código "  VIP-12  ". La reserva
// solo se puede aceptar si el código, tras quitar los espacios de los
// extremos, empieza por "VIP" Y quedan al menos 2 plazas libres.
// a) Guarda el código limpio con trim y comprueba el prefijo con slice.
// b) Parte de un aforo de 15 y 13 personas inscritas; calcula plazas libres.
// c) Usa && y un ternario para mostrar "Acceso permitido" o
//    "Acceso denegado". Muestra el código limpio junto al mensaje.
// d) Cambia los inscritos a 14 y observa qué resultado cambia.
// Tu código:
