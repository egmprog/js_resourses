/********************************************************* */
//autor/a: Eduardo Molino
//version: 1.0.
//fecha: 16/05/2024

//Temás del DOM con Javascript
/********************************************************* */

//Creación de elementos - título principal
let titulo1 = document.getElementsByTagName("main")[0];
// Modificacion del titulo
titulo1.innerHTML =  "<h1>Creación un título</h1>";

// Creación de un parrafo
let parrafo = document.createElement("p");
parrafo.innerHTML = "Esto es un párrafo <br> <span>Estamos manipulando el DOM HTML con JS</span>, Si revisas el documento html, verás que está vacío. Todo lo que aquí se lee y las acciones de botones y enlaces es inyectado con JS.";
document.body.appendChild(parrafo); // Agregar el párrafo al cuerpo del documento

//aplicar estilo al párrafo
parrafo.style.color = "blue"; // Aplicar color azul al texto

//destacar el fragmento del párrafo encerrado entre <span>
// Acceder al elemento span dentro del párrafo
let spanElement = parrafo.querySelector("span");

// Aplicar el estilo de color rojo al texto dentro del span
spanElement.style.color = "red";

/*----------------------------------------------*/
//Crear un botón
// Seleccionar el elemento main
const mainElement = document.querySelector("main");

// Crear un botón
const boton1 = document.createElement("button");

// Asignarle una leyenda al botón
boton1.innerHTML = "Pulse aquí";

// Darle estilo al botón
boton1.style.backgroundColor = "green"; // Color de fondo verde
boton1.style.color = "white"  //color del texto
boton1.style.border = "none"; // Sin borde
boton1.style.borderRadius = "10px";  // Borde redondeado
boton1.style.padding = "10px 30px"; // Padding de 10px arriba y abajo, 30px a la izquierda y derecha

// Insertar el botón después del párrafo
parrafo.insertAdjacentElement('afterend', boton1);


// Animación del botón
// Animación del botón al pasar el mouse sobre él
boton1.addEventListener("mouseover", () => {
    boton1.textContent = "Anímate a pulsar!!";
    boton1.style.backgroundColor = "red";
});

// Animación del botón cuando el mouse deja de estar sobre él
boton1.addEventListener("mouseout", () => {
    boton1.textContent = "Pulse aquí";
    boton1.style.backgroundColor = "green";
});


// Agregar un evento al botón
boton1.addEventListener("click", () => {
    let leyenda2 = document.createElement("h4");
    leyenda2.textContent = "Haz pulsado el botón";
    document.body.appendChild(leyenda2);    
});

/*----------------------------------------------*/
// Crear un salto de línea
// Crear un salto de línea
const saltoDeLinea = document.createElement("br");

// Insertar el salto de línea después del botón
boton1.insertAdjacentElement("afterend", saltoDeLinea);


/*----------------------------------------------*/
// Modificar el título principal
/* titulo1.innerHTML = "<h1>Modificamos el título</h1>"; */

// Crear un enlace con una acción
let link1 = document.createElement("a");
link1.textContent = "Haz clic aquí - para modificar el título superior del documento";
link1.style.cursor = "pointer"; // Cambiar el cursor al pasar sobre el enlace
link1.addEventListener("click", () => {
    titulo1.innerHTML = "<h1>Modificamos el título</h1>";
    titulo1.style.backgroundColor="yellow";
});

// Insertar el enlace después del botón
boton1.insertAdjacentElement("afterend", link1);

// Crear un salto de línea adicional
const saltoDeLinea2 = document.createElement("br");
const saltoDeLinea3 = document.createElement("br");

// Insertar el segundo salto de línea antes del enlace
link1.insertAdjacentElement("beforebegin", saltoDeLinea2);
link1.insertAdjacentElement("beforebegin", saltoDeLinea3);



