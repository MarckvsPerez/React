const personajes: string[] = ["Goku", "Vegeta", "Trunks"];

const [, , p3] = personajes;

console.log(p3);

const construirHeroe = () => {
  return ["ABC", 123];
};

const [letras, numeros] = construirHeroe();

console.log(letras, numeros);

const useState = (valor: string): [string, () => void] => {
  return [valor, () => console.log("Hola")];
};

const [nombre, setNombre] = useState("Goku");

console.log(nombre);
setNombre();
