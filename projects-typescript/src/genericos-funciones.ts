// Genericos en Funciones

/*
function log<T>(a: string, b: T) {
    console.log(a,b);
}
*/

/*
function log<T>(a: string, b: T): T {
    console.log(a,b);
    return b;
}
*/

function log<T,V>(a: T, b: V): V {
    console.log(a,b);
    return b;
}




// log<string>('dato1','Que la fuerza te acompañe');
// log<number>('dato2',1111);
// log<boolean>('dato3', true);

let dato1 = log<string,string>('dato1','Que la fuerza te acompañe');
let dato2 = log<string,number>('dato2',1111);
let dato3 = log<string,boolean>('dato3', true);

async function fetchData<T>(recurso: string): Promise<T> {
    const respuesta = await fetch(`${recurso}`);
    return respuesta.json();
}

type User = {
    id: string,
    name: string
}

async function main() {
    const user = await fetchData<User>('/usuarios');
    console.log(`${user.id} ${user.name}`)
}

