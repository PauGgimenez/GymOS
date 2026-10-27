// 03 - CONDICIONALES: IF, ELSE IF Y SWITCH
//
// Resuelve los ejercicios debajo de cada enunciado y comprueba la consola.
// Usa lo estudiado: variables, operaciones, comparaciones, &&, ||, !,
// ternario, cadenas de texto y sus métodos, if y switch.
// Por ahora no necesitas arrays, funciones, prompt ni elementos del HTML.
// Si ejecutas todo el archivo a la vez, usa nombres de variables distintos
// en cada ejercicio para evitar declaraciones repetidas con let o const.


// ============================================================
// EJERCICIOS
// ============================================================

// 1. Acceso a un taller
// Una persona se llama "  ana  ", tiene 17 años, autorización y ha pagado.
// Quita los espacios del nombre y muéstralo en mayúsculas.
// Con if/else, permite el acceso solo si ha pagado Y además es mayor
// de edad O tiene autorización. Muestra el nombre y el resultado.
// Prueba después con autorización = false.
// Tu código:


// 2. Precio final de un envío
// Un artículo cuesta 24 € y se compran 2 unidades.
// El envío puede ser "normal" (4 €), "express" (8 €) o "recogida" (0 €).
// Usa switch para obtener el coste del envío; empieza con "express".
// Si el subtotal llega a 60 €, el envío es gratis, sea cual sea el modo.
// Un modo desconocido debe mostrar "Modo no válido" y no calcular total.
// Muestra subtotal, envío y total con una plantilla de texto.
// Cambia después las unidades a 3 y comprueba qué cambia.
// Tu código:


// 3. Nivel según la puntuación
// Una prueba se puntúa de 0 a 100. Comienza con 82 puntos.
// Usa if/else if/else: menos de 50 es "Inicial", de 50 a 79 es
// "Intermedio" y de 80 a 100 es "Avanzado".
// Si la puntuación está fuera de 0 a 100, muestra "Puntuación no válida".
// Después crea con un ternario una variable que diga "Certificado"
// si la puntuación válida es al menos 80, o "Sin certificado" si no.
// Prueba con 50, 100 y -1.
// Tu código:


// 4. Comprobar un código
// Recibes el texto "  vip-2026  ". Límpialo con trim y conviértelo
// a mayúsculas. El código es válido si empieza por "VIP" Y contiene
// "2026". Usa slice, includes y un if para mostrar si se acepta.
// Muestra también el código limpio. Prueba con "  vip-2025  ".
// Tu código:


// 5. Estado de un pedido
// Guarda "preparando" como estado. Usa switch para asignar un mensaje
// y las horas estimadas:
// "pendiente" -> "Aún no ha empezado", 24 horas;
// "preparando" -> "Se está preparando", 12 horas;
// "enviado" -> "Va de camino", 2 horas;
// "entregado" -> "Ya se ha entregado", 0 horas.
// Para otro estado, muestra "Estado desconocido".
// Si el estado es válido, usa un ternario para mostrar "En curso"
// cuando quedan horas o "Finalizado" cuando quedan 0.
// Tu código:


// 6. Descuento de una compra
// Se compran 4 unidades a 12 € cada una. La persona es socia.
// El cupón introducido es "  otoño10  ".
// Limpia el cupón y conviértelo a mayúsculas.
// Si el cupón es "OTOÑO10", aplica un descuento del 10 %.
// En caso contrario, si es socia, aplica un descuento del 5 %.
// Los descuentos NO se acumulan. Si no se cumple nada, no hay descuento.
// Muestra subtotal, porcentaje aplicado e importe final.
// Prueba con un cupón incorrecto y después con socio = false.
// Tu código:


// ============================================================
// RETOS
// ============================================================

// 7. Inscripción a una actividad
// Una persona pide 2 plazas para "  escalada  " en el turno "tarde".
// Turnos y aforos: "mañana" 12, "tarde" 15, "noche" 10.
// Ya hay 13 personas inscritas. Cada plaza nueva cuesta 11 €.
// Las dos plazas están pagadas. La persona tiene 16 años y autorización.
//
// a) Limpia el nombre de la actividad y muéstralo en mayúsculas.
// b) Usa switch para obtener el aforo del turno. Un turno desconocido
//    debe considerarse inválido.
// c) Acepta la inscripción solo si el turno es válido, las plazas caben,
//    están pagadas y la persona es mayor de edad O tiene autorización.
// d) Si no se acepta, muestra un motivo concreto: turno inválido,
//    falta de plazas, pago pendiente o edad sin autorización.
// e) Si se acepta, muestra el ingreso de las plazas nuevas. Si se
//    rechaza, el ingreso es 0. Prueba con 3 solicitudes y con pago false.
// Tu código:


// 8. Venta con stock y presupuesto
// Una tienda recibe el producto "  mochila  " y quiere vender 2 unidades.
// Usa switch para asignar precio y existencias:
// "libro" 15 € y 8 unidades; "cuaderno" 4 € y 20 unidades;
// "mochila" 28 € y 3 unidades. Otro producto es inválido.
// La persona tiene 50 € de presupuesto, es socia y usa "  OFERTA5  ".
//
// a) Limpia el nombre del producto y el cupón.
// b) Calcula el subtotal. Si es socia, descuenta el 10 %.
// c) Si el cupón es "OFERTA5" Y el subtotal inicial llega a 50 €,
//    resta otros 5 € al precio ya rebajado.
// d) Acepta la venta solo si existe el producto, hay stock suficiente
//    Y el precio final no supera el presupuesto.
// e) Solo si se acepta, reduce el stock y muestra el total y las
//    existencias que quedan. Si se rechaza, indica el motivo sin
//    cambiar el stock. Prueba con 4 unidades y con presupuesto de 40 €.
// Tu código:
