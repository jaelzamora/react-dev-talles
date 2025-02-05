import { getHeroeById } from "./bases/08-imports";

// const promesa = new Promise( (resolve, reject)  => {
//     setTimeout(() => {
//         // Tarea 
//         const heroe = getHeroeById(2);        
//         resolve( heroe );
//         // reject( 'No se pudo encontrar el heroe' );
//     }, 3000);
// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// })
// .catch( err => console.warn(err))


const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject)  => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (!heroe) {
                reject('No se pudo encontrar al heroe con id: ' + id)
                return;
            }
            resolve( heroe );

        }, 3000);
    });
}

getHeroeByIdAsync(1)
.then(( heroe ) => console.log('heroe',heroe))
.catch(( err )=> console.error(err))