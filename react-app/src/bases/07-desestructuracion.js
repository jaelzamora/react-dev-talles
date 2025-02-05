const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [, ,p3] = personajes;
console.log(p3)


const returnArray = () => {
    return ['ABC', 123];
}
const [letras, numeros] = returnArray();
console.log(letras)


// Tarea
// 1. el primer valor del array se llamara noombre
// 2. el segundo sera setNombre
const useState = ( valor ) => {
    return [valor, ()=> { console.log('Hola Mundo'); }]
}

const [ nombre, setNombre] = useState('Pepe');

console.log(nombre);
setNombre();
