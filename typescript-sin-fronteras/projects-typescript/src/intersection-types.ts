// Intersection Types

type Audit = {
    createdAt: string;
    modifiedAt: string;
}

type Product = {
    name: string;
}


const product: Product & Audit = {
    createdAt: '',
    modifiedAt: '',
    name: ''
}   

type Fibo =  0 | 1 | 2 | 3 | 5;

const nDeFibo: Fibo = 3;