// Decoradores de Clades

function Route(ruta: string) {
    return (constructor: Function) => {
         console.log('Ejecutando el decorador de ruta');
         constructor.prototype.route = ruta;
    }
}

/*
function Method(target: any, methodName: string, descriptor: PropertyDescriptor) {
    console.log(target, methodName, descriptor);
    const original = descriptor.value;
    descriptor.value = function(...args: any) {
        console.log('Antes del metodo');
        original.call(this, args)
        console.log('Despues del metodo');
    }
}
*/

function Method(method: string) {

    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {

        console.log(target, methodName, descriptor,method);
        const original = descriptor.value;
            descriptor.value = function(...args: any) {
            console.log('Antes del metodo');
            original.call(this, args)
            console.log('Despues del metodo');
        }
    }
}


@Route('/productos')
class Products {

    @Method('get')
    find(val: string) {
        console.log('Soy el metodo find: ' +  val);
    }
}

const p = new Products();
p.find('Que la fuerza te acompañe');