import { findHeroes } from "../bases/08-import-export";

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = findHeroes(10);
    if (heroe) {
      resolve(heroe);
    } else {
      reject("No se pudo encontrar el héroe");
    }
  }, 1000);
});

promesa
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.log(error);
  });

const getHeroeByIdAsync = (id: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = findHeroes(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se pudo encontrar el héroe");
      }
    }, 1000);
  });
};

getHeroeByIdAsync(1).then(console.log).catch(console.warn);
