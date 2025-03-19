function saludar(nombre: string) {
  return `Hola ${nombre}`;
}

const saludar2 = (nombre: string) => {
  return `Hola ${nombre}`;
};

const saludar3 = (nombre: string) => `Hola ${nombre}`;
const saludar4 = () => `Hola Mundo`;

const getUser = () => ({
  id: 1,
  nombre: "Juan",
});

const getUserActive = (nombre: string) => ({
  id: 1,
  nombre,
  isActive: true,
});

const user = getUserActive("Juan");

console.log(saludar("Juan"));
console.log(saludar2("Pepe"));
console.log(saludar3("Ana"));
console.log(saludar4());
console.log(getUser());
console.log(user);
