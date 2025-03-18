const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  direccion: {
    ciudad: "Mendoza",
    pais: "Argentina",
    lat: 123.123,
    lng: 123.123,
  },
};

const persona2 = { ...persona };
persona2.nombre = "Marc";

console.log(persona);
console.log(persona2);
