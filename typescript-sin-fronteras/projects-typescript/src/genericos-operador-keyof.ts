// Operador Key Of

type Calendar = {
    id: number,
    fuente: string
    propietario: string
}

const calendar: Calendar = {id: 1, fuente: 'Google', propietario:'Anakin'}

function getProg<T>(objeto: T, property: keyof T): unknown {
    return objeto[property];
}

getProg<Calendar>(calendar, 'id');
getProg<Calendar>(calendar, 'fuente');
getProg<Calendar>(calendar, 'propietario');