// Genericos en Interfaces

interface KeyValue<T,V> {
    key: T,
    value: V
}


interface Product {
    id: string
}

function fetchProduct(): KeyValue<string, Product> {
    return {
        key: 'id de prodcuto',
        value: { id: 'producto' }
    }
}


function fetchSopt(): KeyValue<string, number> {
    return {
        key: 'id del producto',
        value: 500
    }
}