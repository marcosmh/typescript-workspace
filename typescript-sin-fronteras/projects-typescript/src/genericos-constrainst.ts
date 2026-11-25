// Genericos Contraints

interface Usuario {
    id: string,
    name: string
}

class User {
    constructor(public id: string, public name: string) {}
}


function print<T>(t: T): T {
    console.log(t);
    return t;
}

function print2<T extends boolean>(t: T): T {
    console.log(t);
    return t;
}

function print3<T extends Usuario>(t: T): T {
    console.log(t);
    return t;
}

function print4<T extends User>(t: T): T {
    console.log(t);
    return t;
}



print(true);
print('hola');
print(123);

print2(true);
print3({id: '1', name: 'Anakin'});

const user = new User('1','Luke');
print4(user);


