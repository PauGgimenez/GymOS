// EJERCICIOS DE INICIO EN JAVASCRIPT
// Temas: comentarios, consola, variables y tipos de datos.
// Trabaja debajo de cada enunciado. Los ejemplos son pistas, no soluciones.
// Intenta predecir lo que saldrá antes de ejecutar cada bloque.


// ============================================================
// 00. PRIMEROS MENSAJES EN LA CONSOLA
// ============================================================

// Mini ejemplo: estas dos instrucciones no muestran lo mismo.
// console.log("6 + 2"); // Muestra el texto 6 + 2.
// console.log(6 + 2);   // Calcula la suma y muestra 8.


// Ejercicio 1. Escribe un comentario de una línea que indique qué
// aplicación estás preparando. Después escribe un comentario de varias
// líneas que explique qué vas a practicar en este archivo.
// Tu código:

// Ejercicio 2. Muestra en la consola el nombre de tu aplicación.
// En otra línea, muestra el número 15. Por último, muestra el texto
// literal "15". Observa si los dos últimos valores tienen el mismo tipo.
// Tu código:

// Ejercicio 3. Una actividad cuesta 18 euros por persona y se apuntan
// 4 personas. Muestra el importe total con una operación escrita dentro
// de console.log. Después muestra el texto literal "18 * 4".
// Antes de ejecutar, anota qué esperas ver en cada línea.
// Tu código:

// Ejercicio 4. Prueba con los números 17 y 5: una suma, una resta,
// una multiplicación, una división y el resto de la división (%).
// Muestra cada resultado en la consola y comprueba tus predicciones.
// Tu código:

// ============================================================
// 01. VARIABLES Y CONSTANTES
// ============================================================

// Mini ejemplo: let permite guardar un valor nuevo en la misma variable.
// let plazasLibres = 10;
// plazasLibres = 9;
// console.log(plazasLibres); // Muestra 10: la asignación a 9 está comentada.


// Ejercicio 5. Crea una variable con let para las reservas del día.
// Empieza en 2, muestra su valor, guarda un valor nuevo de 3 y vuelve
// a mostrarlo. Explica con un comentario cuál de las dos líneas cambia
// el dato guardado.
// Tu código:

// Ejercicio 6. Crea una constante con el nombre de una sala y muéstrala.
// Debajo, escribe una línea que intente cambiar el nombre. Antes de
// ejecutarla, predice el error. Déjala comentada para que el resto del
// archivo pueda seguir funcionando.
// Tu código:

// Ejercicio 7. JavaScript también permite declarar variables con var.
// Declara con var el nombre de una persona, muéstralo, asígnale otro
// nombre y vuelve a mostrarlo. Después haz lo mismo con let.
// Para el código nuevo de la aplicación utilizaremos normalmente
// const si el nombre no se reasigna y let si se va a reasignar.
// Tu código:

// ============================================================
// 02. TIPOS DE DATOS
// ============================================================

// Mini ejemplo: typeof indica el tipo del valor que recibe.
// const precioEjemplo = 12;
// console.log(typeof precioEjemplo); // Muestra "number".

// Ejercicio 8. Declara valores relacionados con tu aplicación:
// un texto (string), un número entero, un número decimal y un
// booleano (true o false). Muestra cada valor y, en otra línea,
// su tipo con typeof.
// Tu código:

// Ejercicio 9. Declara una variable sin darle valor y otra con null.
// Muestra ambas y comprueba sus tipos con typeof. El resultado de
// typeof null puede sorprenderte: anota en un comentario qué aparece.
// Tu código:

// Ejercicio 10. Crea un Symbol con una descripción relacionada con tu
// proyecto y un BigInt terminado en n. Muestra el tipo de ambos.
// Mini pista: Symbol("registro") y 12345678901234567890n son ejemplos
// de cómo se escriben, pero elige otros valores.
// Tu código:

// ============================================================
// 03. REPASO DE LOS PRIMEROS PASOS
// ============================================================

// Mini ejemplo: el valor puede cambiar de tipo si la variable es let.
// let datoEjemplo = 7;
// datoEjemplo = "siete";
// console.log(typeof datoEjemplo); // Muestra "string".

// Ejercicio 11. Crea con let una variable que guarde la cantidad 20.
// Muestra el valor y su tipo. Después asígnale otro número y repite
// las dos comprobaciones. Finalmente asígnale un texto y comprueba
// de nuevo el valor y el tipo. ¿Qué ha cambiado en cada paso?
// Tu código:

// ============================================================
// 04 Y 05. OPERADORES
// ============================================================
// Continúa aquí tus soluciones. Usa console.log para comprobarlas.
// Por ahora no necesitas if, funciones, arrays ni elementos del HTML.

// Mini ejemplo: primero se multiplica; los paréntesis cambian el orden.
// console.log(2 + 3 * 4);   // 14
// console.log((2 + 3) * 4); // 20

// Se conserva la numeración original: después del 11 viene el 14.
// Ejercicio 14. Una clase cuesta 12 euros y se apuntan 6 personas.
// Guarda precio y participantes en variables. Calcula y muestra el
// ingreso total. Después resta 15 euros de gastos y muestra lo que queda.
// Antes de ejecutar, predice ambos resultados.
// Tu código:

// Ejercicio 15. Hay 23 pelotas y quieres guardarlas en cajas de 5.
// Muestra el resultado de dividir 23 entre 5 y el resto con %.
// Explica en un comentario qué te indica el resto en este caso.
// Tu código:

// Ejercicio 16. Escribe dos operaciones con los números 4, 2 y 3:
// una sin paréntesis y otra con paréntesis, de modo que den resultados
// diferentes. Después calcula 3 elevado a 4 con **. Predice los tres
// resultados antes de mostrarlos en la consola.
// Tu código:

// Mini ejemplo: += guarda el resultado en la misma variable.
// let puntosEjemplo = 5;
// puntosEjemplo += 2; // Equivale a puntosEjemplo = puntosEjemplo + 2.
// console.log(puntosEjemplo); // 7


// Ejercicio 17. Empieza con 8 reservas. Añade una con ++, quita otra
// con -- y muestra el valor después de cada cambio. ¿Qué valor queda
// finalmente? Escribe una explicación breve en un comentario.
// Tu código:

// Ejercicio 18. Una caja contiene 10 unidades. Usa una variable let
// y aplica, en este orden: += 5, -= 3, *= 2 y /= 4. Muestra la
// cantidad después de cada operación. No vuelvas a declarar la variable.
// Tu código:

// Mini ejemplo: una comparación produce true o false.
// const aforoEjemplo = 15;
// console.log(aforoEjemplo >= 15); // true


// Ejercicio 19. Una actividad exige tener al menos 18 años.
// Guarda una edad de 18 y el mínimo. Muestra los resultados de
// edad > minimo, edad >= minimo y edad < minimo. Explica cuál de
// esas comparaciones sirve para incluir a quien tenga exactamente 18.
// Tu código:

// Ejercicio 20. Compara el número 12 con el texto "12" usando ==,
// ===, != y !==. Predice los cuatro resultados y compruébalos.
// Escribe un comentario sobre la diferencia entre comparar solo el
// valor y comparar también el tipo.
// Tu código:

// Mini ejemplo: && exige que se cumplan las dos condiciones.
// const pagadoEjemplo = true;
// const haySitioEjemplo = false;
// console.log(pagadoEjemplo && haySitioEjemplo); // false

// Ejercicio 21. Para entrar a una clase hace falta tener reserva Y
// haber pagado. Guarda ambos datos como booleanos y muestra con &&
// si se cumplen las dos condiciones. Cambia uno de los valores y
// comprueba cómo cambia el resultado.
// Tu código:

// Ejercicio 22. Una persona puede entrar si tiene una invitación O
// una cuota activa. Comprueba las cuatro combinaciones posibles de
// true y false con ||. Anota cuál es la única que no permite entrar.
// Tu código:

// Ejercicio 23. Usa ! para mostrar lo contrario de true y de false.
// Después predice y comprueba el resultado de !0, !"" y !"hola".
// Relaciónalo en un comentario con los valores falsy y truthy del curso.
// Tu código:

// Mini ejemplo: el ternario elige uno de dos resultados.
// const abiertoEjemplo = true;
// console.log(abiertoEjemplo ? "Abierto" : "Cerrado");


// Ejercicio 24. Guarda en una variable si una sala está ocupada.
// Usa el operador ternario para mostrar "No disponible" cuando lo
// esté y "Disponible" cuando no. Cambia el valor y prueba de nuevo.
// Tu código:

// ============================================================
// RETOS FINALES. 
// ============================================================

// Ejercicio 25. Una clase tiene 15 plazas, 13 personas inscritas y
// llegan 2 solicitudes nuevas. Cada plaza cuesta 9 euros.
// a) Calcula el total de personas si aceptas las dos solicitudes.
// b) Comprueba con <= si caben sin superar el aforo.
// c) Añade una variable booleana que indique si han pagado y usa &&
//    para comprobar que caben Y que han pagado.
// d) Usa un ternario para mostrar "Reserva posible" o "No se puede
//    reservar" según el resultado anterior.
// e) Calcula cuánto se ingresaría por las dos plazas. Cambia las
//    solicitudes a 3 y comprueba qué resultados cambian.
// Tu código:

// Ejercicio 26. Un centro permite el acceso si la cuota está activa
// Y la persona es mayor de edad O tiene autorización. Trabaja con
// estas variables: cuotaActiva = true, edad = 16 y autorizacion = true.
// a) Escribe la condición con &&, || y paréntesis para que la cuota
//    activa sea obligatoria en ambos casos.
// b) Muestra el resultado booleano y un mensaje con un ternario.
// c) Prueba cambiando autorizacion a false y luego edad a 18.
// d) Prueba también con cuotaActiva = false. Explica por qué no puede
//    entrar aunque cumpla la condición de edad o autorización.
// Tu código:
