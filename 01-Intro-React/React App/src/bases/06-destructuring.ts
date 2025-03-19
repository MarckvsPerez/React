const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
};

const { nombre: nombre2, apellido, edad } = persona;

console.log(nombre2, apellido, edad);

const retornarPersona = ({
  nombre,
  apellido,
  edad,
  rango = "Capitan",
}: {
  nombre: string;
  apellido: string;
  edad: number;
  rango?: string;
}) => {
  console.log(nombre, apellido, edad, rango);
};

retornarPersona(persona);

const useContext = ({ nombre }: { nombre: string }) => ({
  nombreClave: nombre,
  latLang: {
    lat: 14.123123,
    lng: -14.123123,
  },
});

const {
  nombreClave,
  latLang: { lat, lng },
} = useContext(persona);

console.log(nombreClave, lat, lng);
