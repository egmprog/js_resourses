/********************************************************* */
//autor/a: Eduardo Molino
//version: 1.0.
//fecha: 16/05/2024

//Manejo de variables de fecha y tiempo en Javascript
/********************************************************* */

//Manejo del tiempo y las fechas con JS

//new Date()crea un objeto de fecha con la fecha y hora actuales :

//formato dd/mm/aaaa
document.write("<p>La fecha actual es: " + new Date().toLocaleDateString() + "</p>");

//formato hh:mm:ss
document.write("<p>La hora actual es: " + new Date().toLocaleTimeString() + "</p>");

//formato dd/mm/aaaa hh:mm:ss
document.write("<p>La fecha y hora actual es: " + new Date().toLocaleString() + "</p>");

//formato día de la semana, ej lunes
document.write("<p>El día es: " + new Date().toLocaleString("es-ES", {weekday: "long"}) + "</p>");

//formato solo el día
document.write("<p>La fecha es: " + new Date().toLocaleString("es-ES", {day: "numeric"}) + "</p>");

//formato mes, ej enero
document.write("<p>El mes es: " + new Date().toLocaleString("es-ES", {month: "long"}) + "</p>");

//formato año
document.write("<p>El año es: " + new Date().toLocaleString("es-ES", {year: "numeric"}) + "</p>");

//formato hora, minutos y segundos
document.write("<p>La hora es: " + new Date().toLocaleString("es-ES", {hour: "numeric", minute: "numeric", second: "numeric"}) + "</p>");

//formato solo la hora
document.write("<p>La hora es: " + new Date().toLocaleString("es-ES", {hour: "numeric"}) + "</p>");

//formato solo los minutos
document.write("<p>Los minutos son: " + new Date().toLocaleString("es-ES", {minute: "numeric"}) + "</p>");

//formato solo los segundos
document.write("<p>Los segundos son: " + new Date().toLocaleString("es-ES", {second: "numeric"}) + "</p>");

//formato día, fecha, mes y año
document.write("<p>Hoy es: " + new Date().toLocaleString("es-ES", {weekday: "long", day: "numeric", month: "long", year: "numeric"}) + "</p>");

//la edad de la persona
document.write("<p>La persona nacida en el año 2000, tiene: " + (new Date().getFullYear() - 2000) + " años</p>");

/*---------------------------------------------------------*/
//el tiempo transcrurrido entre dos horarios en segundos

// Creamos objetos Date con la fecha actual y la hora deseada
var date1 = new Date();
date1.setHours(8, 0, 0); // Establecemos la hora en 8:00

var date2 = new Date();
date2.setHours(9, 0, 0); // Establecemos la hora en 9:00

// Calculamos la diferencia en segundos
var diferenciaSegundos = (date2.getTime() - date1.getTime()) / 1000;

// Mostramos el resultado
document.write("<p>El tiempo transcurrido entre las " + date1.toLocaleString ("es-ES", {hour: "numeric", minute: "numeric", second: "numeric"})+" y las "+date2.toLocaleString("es-ES", {hour: "numeric", minute: "numeric", second: "numeric"})+" es de: " + diferenciaSegundos + " segundos</p>");

/*---------------------------------------------------------*/
//el tiempo transcrurrido entre dos horarios en horas, minutos y segundos

// Creamos objetos Date con la fecha actual y la hora deseada
var date3 = new Date();
date3.setHours(8, 24, 0); // Establecemos la hora en 8:00

var date4 = new Date();
date4.setHours(19, 10, 0); // Establecemos la hora en 9:00

// Calculamos la diferencia en milisegundos
var diferenciaMilisegundos = date4.getTime() - date3.getTime();

// Calculamos las horas, minutos y segundos
var horas = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60));
var minutos = Math.floor((diferenciaMilisegundos % (1000 * 60 * 60)) / (1000 * 60));
var segundos = Math.floor((diferenciaMilisegundos % (1000 * 60)) / 1000);

// Mostramos el resultado
document.write("<p>El tiempo transcurrido entre las " + date1.toLocaleString ("es-ES", {hour: "numeric", minute: "numeric", second: "numeric"})+" y las "+date2.toLocaleString("es-ES", {hour: "numeric", minute: "numeric", second: "numeric"})+" es de: " + horas + " horas, " + minutos + " minutos y " + segundos + " segundos</p>");

/*---------------------------------------------------------*/
//definición de variable de tiempo
var date5 = new Date();
date5.setDate(1); // Establecemos el primer día del mes
date5.setDate(date5.getDate() + 7); // Sumamos 7 dias
date5.setMonth(2); // Establecemos el mes de febrero
date5.setFullYear(2022); // Establecemos el año 2022
date5.setHours(8); // Establecemos la hora 8
date5.setMinutes(15); // Establecemos los minutos 15
date5.setSeconds(30); // Establecemos los segundos 30
date5.setUTCHours(8); // Establecemos la hora UTC 8

document.write("<p>El tiempo configurado es: " + date5.toLocaleString("es-ES", {day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric"}) + "</p>");

document.write("<p>Ese tiempo configurado en UTC es: " + date5.toUTCString() + "</p>");





