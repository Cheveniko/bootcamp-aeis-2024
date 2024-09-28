let variable: string = "Hola mundo";

console.log(variable);

let variable2: number = 1000;

let arreglo: number[] = [1, 2, 3, 4, 5];

type Persona = {
  nombre: string;
  edad: number;
  isAlive: boolean;
  observations: {
    status: boolean;
  };
};

let objeto: Persona = {
  nombre: "Juan",
  edad: 30,
  isAlive: true,
  observations: {
    status: true,
  },
};
