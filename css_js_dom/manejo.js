/********************************************************* */
//autor/a: Eduardo Molino
//version: 1.0.
//fecha: 18/05/2024

//Manipulación de párrafos y de palabras en un párrafo
/********************************************************* */
 

// Funciones para cambiar el color de los párrafos
function parrafo1() {
    let parrafo1 = document.getElementById("p1");
    parrafo1.style.color = "red";    
}

function parrafo2() {
    let parrafo2 = document.getElementById("p2");
    parrafo2.style.color = "red";    
}

function parrafo3() {
    let parrafo3 = document.getElementById("p3");
    parrafo3.style.color = "red";    
}

function parrafo4() {
    let parrafo4 = document.getElementById("p4");
    parrafo4.style.color = "red";    
}

function resetP() {
    let parrafo1 = document.getElementById("p1");
    parrafo1.style.color = "black";    
    let parrafo2 = document.getElementById("p2");
    parrafo2.style.color = "black";    
    let parrafo3 = document.getElementById("p3");
    parrafo3.style.color = "black";    
    let parrafo4 = document.getElementById("p4");
    parrafo4.style.color = "black";    
}

// Funciones para cambiar el color de los elementos dentro del párrafo 5
function sust() {
    let sustantivos = document.querySelectorAll("#p5 #sust");    
    sustantivos.forEach(element => {
        element.style.color = "red";
        element.style.fontWeight = "bold";
    });
}

function verb() {
    let verbos = document.querySelectorAll("#p5 #verb");     
    verbos.forEach(element => {
        element.style.color = "blue";
        element.style.fontWeight = "bold";
    });
}

function adv() {
    let adverbios = document.querySelectorAll("#p5 #adv");     
    adverbios.forEach(element => {
        element.style.color = "green";
        element.style.fontWeight = "bold";
    });
}

function adj() {
    let adjetivos = document.querySelectorAll("#p5 #adj");     
    adjetivos.forEach(element => {
        element.style.color = "orange";
        element.style.fontWeight = "bold";
    });
}

function conj() {
    let conjunciones = document.querySelectorAll("#p5 #conj");     
    conjunciones.forEach(element => {
        element.style.color = "LightSalmon";
        element.style.fontWeight = "bold";
    });
}

function pron() {
    let pronombres = document.querySelectorAll("#p5 #pron");     
    pronombres.forEach(element => {
        element.style.color = "purple";
        element.style.fontWeight = "bold";
    });
}

function num() {
    let numeros = document.querySelectorAll("#p5 #num");     
    numeros.forEach(element => {
        element.style.color = "Olive";
        element.style.fontWeight = "bold";
    });
}

function prep() {
    let preposiciones = document.querySelectorAll("#p5 #prep");     
    preposiciones.forEach(element => {
        element.style.color = "violet";
        element.style.fontWeight = "bold";
    });
}

function art() {
    let articulos = document.querySelectorAll("#p5 #art");     
    articulos.forEach(element => {
        element.style.color = "Lime";
        element.style.fontWeight = "bold";
    });
}

// Función para restablecer el color de todos los elementos dentro del párrafo 5
function resetPP() {
    let parrafo5 = document.getElementById("p5");
    let elements = parrafo5.querySelectorAll("*"); // Seleccionar todos los elementos dentro del párrafo 5
    elements.forEach(element => {
        element.style.color = "black";
        element.style.fontWeight = "normal";
    });
}

// Función para restablecer el color de todos los elementos dentro del párrafo 5
function resetPP() {
    let parrafo5 = document.getElementById("p5");
    let elements = parrafo5.querySelectorAll("*"); // Seleccionar todos los elementos dentro del párrafo 5
    elements.forEach(element => {
        element.style.color = "black";
        element.style.fontWeight = "normal";
    });
}
