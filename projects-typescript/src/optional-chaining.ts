// Optional Chaining

function getUser(id: number) {
    if(id < 0) {
        return null;
    }
    return {
        id: 1,
        name: 'Anakin',
        createdAt: new Date()
    }

}

const user = getUser(1);

console.log('usuario: ',user?.createdAt);

const arr1 = null;

arr1?.[0];

const fn: any = null;

fn?.();

