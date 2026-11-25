// Decoradores de Propiedades

function UpperCase(target: any, methodName: string, propertyDescriptor: PropertyDescriptor) {
    console.log(target, methodName, propertyDescriptor);

    const original = propertyDescriptor.get;
    delete (propertyDescriptor as any).value;
    delete (propertyDescriptor as any).writable;

    propertyDescriptor.get = function() {
        const r = original?.call(this);
        if(typeof r === 'string') {
            return r.toUpperCase();
        }
        return r;
    }
}

function Min(min: number) {
    return (target: any, propertyName: string) => {
        let val: string;
        const descriptor: PropertyDescriptor = {
            get() {
                return 'Que la fuerza te acompañe!';
            },
            set(v: string) {
                if( v.length < min) {
                    throw new Error(`La propiedad ${propertyName} debe ser de largo mín.`);
                }

                val = v;
            },
        }
        Object.defineProperty(target, propertyName, descriptor);
    }
}

class User {

    @Min(8)
    public password: string;

    constructor(public name: string, public lastname: string, password: string) {
        this.password = password;
    }

    @UpperCase
    getFullName() {
        return `${this.name} ${this.lastname}`;
    }

}

const user = new User('Anakin', 'Skywalker','starwars');
// console.log(user.getFullName);
console.log(user.password);


export { }