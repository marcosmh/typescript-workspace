// Funciones

const fn = () => void {

}

function fn2() {

}


const fn3: () => number = () =>  {
    let x = 2;

    if(x > 5) {
        return 7;
    } else {
        return 4;
    }

}

const fn4: (a: number) => string = (edad: number) => {
    if(edad > 17) {
        return 'Puedes ingresar';
    } else {
        return 'No puedes ingresar';
    }
    
}


function validaEdad(edad: number, msg: string = 'Hola'): string {
    if(edad > 17) 
        return `Puedes ingresar ${msg}`;

    return 'No puedes ingresar';
}


validaEdad(18, 'Bienvenido');