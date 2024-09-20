// * CONCEPTOS BÁSICOS DE JAVASCRIPT

// * Variables
var nombre = "Juan"; // Legacy
let lastname = "Pérez"; // Moderna

lastname = "Gómez";

// * Constantes
const PI = 3.1416; // Teoría
const fullname = "Juan Pérez"; // Práctica

// console.log(nombre, lastname, PI, fullname);

// * Tipos de datos

// Primitivas
let string = "Hola mundo";
let number = 100;
let boolean = false;
let nullValue = null;
// let undefinedValue = undefined;

// Métodos de los tipos de datos
// console.log(string.toUpperCase());
// console.log(number.toFixed(5));
// console.log(null.includes("a"));

// Tipado dinámico
let newVariable = "Hola";
newVariable = 100;
// console.log(newVariable);
newVariable = true;
// console.log(newVariable);

// Funciones

function suma(a, b) {
  return a + b;
}

const arrowSuma = (a, b) => {
  return a + b;
};

// Arrays

const array = [1, 2, 3, 4, 5];

array.map((item, index) => {
  console.log("Index ", index, ":", item);
});
// console.log(array[0]);

const object = {
  name: "Juan",
  age: 30,
  isStudent: false,
  grades: [8, 9, 10],
  observations: {
    message: "Good job",
    success: {
      status: true,
    },
  },
};

// // Condicionales
// if (number < 200) {
//   console.log("Es menor a 200");
// } else {
//   console.log("Es mayor a 200");
// }

// console.log(arrowSuma(5, 10));
