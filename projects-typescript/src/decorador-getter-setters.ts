// Decoradores Getters and Setters

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

class User {
    constructor(public name: string, public lastname: string) {}

    @UpperCase
    getFullName() {
        return `${this.name} ${this.lastname}`;
    }

}

const user = new User('Anakin', 'Skywalker');
console.log(user.getFullName);

