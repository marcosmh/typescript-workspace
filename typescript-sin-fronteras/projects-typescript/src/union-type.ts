// Union Type

let puntaje: number | string = 98;

puntaje = 'Hola Mundo';

type Animal = {
    id: number;
    estado: string;
}

type Usuario = {
    id: number;
    name: string;
}

let animal: Usuario | Animal = {id: 1, estado:'', name: '' }

function sumaDos(n: number | string): number {
    if(typeof n === 'number') {
        return n + 2;
    }

    return parseInt(n) + 2;
}

console.log("suma de 2 + 2 es: ", sumaDos(2));

console.log("suma de 5 + 2 es: ", sumaDos('5'));
