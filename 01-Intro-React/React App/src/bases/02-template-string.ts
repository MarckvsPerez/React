const nombre = "Juan";
const apellido = "Perez";

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getNombre(nombre: string, apellido: string) {
  return `Hola ` + nombre + ` ` + apellido;
}

console.log(`Texto: ${getNombre("Juan", "Perez")}`);
