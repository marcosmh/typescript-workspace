// Type Narrowing

function lala(x: string | number) {

    if(typeof x === 'number') {
        x.toFixed(2);
    }

    if(typeof x === 'string') {
        x.concat('X');

    }

}