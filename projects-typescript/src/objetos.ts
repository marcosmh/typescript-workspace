// Objetos

// const objeto = { id: 1, nombre: '' };
// objeto.nombre = 'Luke';

enum Talla { Chica = 'S', Mediana = 'M', Grande = 'L', ExtraGrande = 'XL' }

type Direccion = {
    calle: string,
    numero: number,
    ciudad: string,
    pais: string
}

type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion
}

const objeto: {
    readonly id: number,
    nombre: string,
    talla: Talla
} = { id: 1, nombre: 'Luke', talla: Talla.Mediana };

const objPersona: Persona = { 
    id: 1, 
    nombre: 'Luke', 
    talla: Talla.Mediana,
    direccion: {
        calle: 'Calle Siempre viva',
        numero: 123,
        ciudad: 'CDMX',
        pais: 'México'
    }
};

const arr: Persona[] = [];