// Nullish Colescing Operator


const difficulty: number | null = 0;

const user = {
    username: 'Anakin',
    difficulty: difficulty ?? 1
}

console.log('user: ', user);