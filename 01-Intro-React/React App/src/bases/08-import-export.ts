import heroes, { owners } from "../data/heroes";

const findHeroes = (id: number) => {
  const hero = heroes.find((hero) => hero.id === id);
  return hero;
};

const getHeroesByOwner = (owner: string) => {
  return heroes.filter((hero) => hero.owner === owner);
};

console.log(findHeroes(1));
console.log(getHeroesByOwner("DC"));
console.log(owners);

export { findHeroes, getHeroesByOwner };
