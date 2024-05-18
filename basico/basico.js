/********************************************************* */
//autor/a: Eduardo Molino
//version: 1.0.
//fecha: 16/05/2024

//Temás básicos de Javascript
/********************************************************* */


/*
Esto es un comentario de varias lineas

*/

// Esto es un comentario de una sola linea

//Esta es una salida de consola
console.log("Hello World!");

//Esta es una salida por pantalla
document.write("<h1>Temas básicos de Javascript</h1>");
document.write("<p>Observar el código en el archivo <b><i>basico.html</i></b>.</p>");
//Variables
document.write("<h3>Variables 'let'</h3>");
let x = 10;
let y = 20;
let nom = "Cristian";
let bool = true;

document.write("<p>Los siguientes valores se intodujeron mediante variables 'let': </p>");
document.write(x + " - " + nom);

//Constantes
document.write("<h3>Constantes</h3>");
const pi = 3.14;

document.write("<p>El valor de 'pi' es: " + pi + " es una constante.</p>");

//Tipos de datos
document.write("<h3>Tipos de datos</h3>");
document.write("<p>El tipo de dato de la variable 'x' es: " + typeof x);
document.write("<p>El tipo de dato de la variable 'nom' es: " + typeof nom);
document.write("<p>El tipo de dato de la variable 'pi' es: " + typeof pi);
document.write("<p>El tipo de dato de la variable 'bool' es: " + typeof bool);

//Operadores aritmeticos
document.write("<h3>Operadores aritmeticos</h3>");
document.write("<p>x es: " + x + " -------  y es: " + y+" </p>");
document.write("<p>El resultado de la suma de x + y es: " + (x + y));
document.write("<p>El resultado de la resta de x - y es: " + (x - y));
document.write("<p>El resultado de la multiplicacion de x * y es: " + (x * y));
document.write("<p>El resultado de la division de x / y es: " + (x / y));
document.write("<p>El resultado de la potencia de x ** y es: " + (x ** y));

//Operadores logicos
document.write("<h3>Operadores logicos</h3>");
document.write("<p>Tres operadores logicos: && (y), || (o), ! (no)</p>");
document.write("<p>x es: " + x + " -------  y es: " + y+" </p>");
document.write("<p>El resultado de la comparacion de x == y es: " + (x == y));
document.write("<p>El resultado de la comparacion de x != y es: " + (x != y));
document.write("<p>El resultado de la comparacion de x > y es: " + (x > y));
document.write("<p>El resultado de la comparacion de x < y es: " + (x < y));
document.write("<p>El resultado de la comparacion de x >= y es: " + (x >= y));
document.write("<p>El resultado de la comparacion de x <= y es: " + (x <= y));

//Operadores de asignacion
document.write("<h3>Operadores de asignacion</h3>");
document.write("<p>x es: " + x + " -------  y es: " + y+" </p>");
document.write("<p>El resultado de la asignacion de x += y es: " + (x += y));
document.write("<p>El resultado de la asignacion de x -= y es: " + (x -= y));
document.write("<p>El resultado de la asignacion de x *= y es: " + (x *= y));
document.write("<p>El resultado de la asignacion de x /= y es: " + (x /= y));

//Operadores de incremento y decremento
document.write("<h3>Operadores de incremento y decremento</h3>");
document.write("<p>x es: " + x + " -------  y es: " + y+" </p>");
document.write("<p>El resultado de la incremento de x++ es: " + (x++));
document.write("<p>Ahora el valor de x es: " + (x));
document.write("<p>El resultado de la incremento de ++x es: " + (++x));
document.write("<p>El resultado de la decremento de x-- es: " + (x--));
document.write("<p>Ahora el valor de x es: " + (x));
document.write("<p>El resultado de la decremento de --x es: " + (--x));

//Operadores condicionales
document.write("<h3>Operadores de condicionales</h3>");
document.write("<p>x es: " + x + " -------  y es: " + y+" </p>");
document.write("<p>El resultado de la condicion de x > y es: " + (x > y ? "x es mayor que y" : "x es menor o igual que y"));

//Funciones
document.write("<h3>Funciones</h3>");
document.write("<p>x es: " + x + " -------  y es: " + y+" </p>");

function sumar(x, y) {
    return x + y;
}

document.write("<p>La suma de x + y (a través de la función 'sumar') es: " + sumar(x, y));

//Funciones flecha
document.write("<h3>Funciones flecha</h3>");
document.write("<p>x es: " + x + " -------  y es: " + y+" </p>");

const restar = (x, y) => x - y;
document.write("<p>La resta de x - y (aplicando la función flecha 'restar') es: " + restar(x, y));

document.write("<h3>Otro ejemplo con función flecha</h3>");

// Solución con función flecha
const persona2 = {
  nombre: "Ana",
  saludo: function () {    
      // this se refiere al contexto léxico de la función, que es el objeto persona2
      document.write("Hola " + this.nombre);    
  },
};

persona2.saludo();   //esta línea es la que imprime en el html

// Flujos de control
document.write("<h3>Flujos de control</h3>");
document.write("<p>Tres flujos principales: WHILE, DO WHILE y FOR</p>");

// While
let i = 0;
document.write("<h4>While:</h4>");
document.write(
  "<p>La variable 'i' vale: " + i+"</p>"+
  "<p>Se aplica un ciclo WHILE para incrementar la variable 'i' y se imprime una lista, partiendo de cero e incrementando 1 cinco veces</p>"
);

while (i < 5) {
  document.write("<p>" + i + "</p>");   
  i++;
}


// Do While
document.write("<h4>Do While:</h4>");
i = 0;
document.write(  
  "<p>La variable 'i' vale: " + i+"</p>"+
  "<p>Se aplica un ciclo DO WHILE para incrementar la variable 'i' y se imprime una lista, partiendo de cero e incrementando 1 cinco veces</p>"
)

do {
  document.write("<p>" + i + "</p>");   
  i++;
} while (i < 5);


// For
document.write("<h4>For:</h4>");
i = 0;
document.write(
  "<p>Se aplica un ciclo FOR para incrementar la variable 'i' y se imprime una lista, partiendo de cero e incrementando 1 cinco veces</p>"
);

for (let index = 0; index < 5; index++) {
  document.write("<p>" + i + "</p>");
  i++;
}

//Arrrays

/**
 * Un array es una lista ordenada de elementos.
Los elementos de un array se almacenan en posiciones indexadas, comenzando desde 0.
Puede contener elementos duplicados.
Los arrays son mutables, lo que significa que pueden cambiar en tamaño y contenido.
Se accede a los elementos de un array mediante sus índices.
Los métodos comunes de los arrays incluyen push, pop, shift, unshift, splice, slice, entre otros.
 */

document.write("<h3>Arrays</h3>");
document.write("<p>Un array es una lista de valores</p>");
document.write("<p>Los arrays se definen con corchetes '[]'</p>");
let colores = ["rojo", "azul", "verde"];
document.write("<p>Los colores son: "+colores+"</p>");
document.write("<p>El primer color es: "+colores[0]+"</p>");
document.write("<p>El segundo color es: "+colores[1]+"</p>");
document.write("<p>El tercer color es: "+colores[2]+"</p>");

document.write("<p>Para agregar un nuevo color al array se agrega al final: "+colores.push("naranja")+"</p>");
document.write("<p>Los colores son: "+colores+"</p>");

document.write("<p>Para agregar un nuevo color al array se agrega al principio: "+colores.unshift("morado")+"</p>");
document.write("<p>Los colores son: "+colores+"</p>");

document.write("<p>Para eliminar un color del array se elimina al final: "+colores.pop()+"</p>");
document.write("<p>Los colores son: "+colores+"</p>");

document.write("<p>Para eliminar un color del array se elimina al principio: "+colores.shift()+"</p>");
document.write("<p>Los colores son: "+colores+"</p>");

document.write("<p>Para eliminar un color del array se elimina por indice (ej. el indice 2): "+colores.splice(2,1)+"</p>");
document.write("<p>Los colores son: "+colores+"</p>");

//Arrrays multidimensionales
document.write("<h3>Arrays multidimensionales</h3>");
document.write("<p>Un array multidimensional es un array dentro de otro array</p>");
document.write("<p>Los arrays multidimensionales se definen con corchetes '[][]'</p>");

let personas = [
  ["Cristian", "Perez"],
  ["Ana", "Lopez"],
  ["Maria", "Gonzalez"]
]

document.write("<p>Las personas son: "+personas+"</p>");
document.write("<p>La primera persona es: "+personas[0]+"</p>");
document.write("<p>La segunda persona es: "+personas[1]+"</p>");
document.write("<p>La tercera persona es: "+personas[2]+"</p>");
document.write("<p>El nombre de la primera persona es: "+personas[0][0]+"</p>");
document.write("<p>El apellido de la primera persona es: "+personas[0][1]+"</p>");

//Set

/** 
 * Un set es una colección de valores únicos, lo que significa que no puede contener elementos duplicados.
Los elementos en un set no tienen un orden específico.
Los sets no tienen índices y no se pueden acceder a sus elementos mediante índices.
Los sets son iterables, lo que significa que se pueden recorrer con for...of o utilizar métodos como forEach.
Los sets no tienen métodos para agregar elementos repetidos, si intentas agregar un elemento ya existente, se ignorará.
*/

document.write("<h3>Set</h3>");
document.write("<p>Un set es una colección de valores únicos</p>");
document.write("<p>Los sets se definen con corchetes '[]'</p>");

let set = new Set([1, 2, 3, 4, 5]);
document.write(set.has(1)); // Salida: true

document.write("<p>Dado Set([1, 2, 3, 4, 5])</p>");
document.write("<p>El set contiene el valor 1: "+set.has(1)+"</p>");
document.write("<p>El set contiene el valor 15: "+set.has(15)+"</p>");

//Map
document.write("<h3>Map</h3>");
document.write("<p>Un map es una colección de pares clave-valor</p>");
document.write("<p>Los maps se definen con corchetes '[]'</p>");

let map = new Map();
map.set("nombre1", "Cristian");
map.set("apellidos1", "Perez");
map.set("nombre2", "juana");
map.set("apellidos2", "López");

document.write(map.get("apellidos1"));

//Clases
document.write("<h3>Clases</h3>");
document.write("<p>Las clases son una forma de crear objetos</p>");
document.write("<p>Las clases se definen con la palabra clave 'class'</p>");

class Persona {
  constructor(nombre, apellidos) {
    this.nombre = nombre;
    this.apellidos = apellidos;
  }
  saludo() {
    document.write("Apellidos: " + this.apellidos + ", nombres: " + this.nombre);
  }
}

let persona = new Persona("Cristian", "Perez");
let persona3 = new Persona("Juan", "Jerez");

persona.saludo();
persona3.saludo();


//Enum

document.write("<h3>Enum</h3>");
document.write("<p>Un enum es una colección de pares clave-valor</p>");
document.write("<p>Los enums se definen con corchetes '[]'</p>");

const Color = {
  Rojo: "rojo",
  Verde: "verde",
  Azul: "azul",
}

document.write(Color.Rojo);
