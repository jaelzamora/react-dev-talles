import { heroes } from "../data/heroes"

export const getHeroeById = (id) => heroes.find((h)=> h.id === id)

export const getHeroeByOwner = (owner) => heroes.filter((h)=> h.owner === owner)

// console.log(getHeroeById(3));
// console.log(getHeroeByOwner('DC'));
