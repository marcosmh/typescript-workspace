// Decorador Composicion

function Dec1(_constructor: Function) {
    console.log('Decorador 1');
}

function Dec2(_constructor: Function) {
    console.log('Decorador 2');
}


@Dec1
@Dec2
class User {

}


export {}