
// Tipos en TypeScript

/** Tipos primitivos en TypeScript
 * 
 * number
 * string
 * boolean
 * null
 * undefined
 * function
 */

console.log(typeof []); // number

/** Tipos de datos en TypeScript
 * 
 * any (no usarlo)
 * unknown
 * never
 * arrays
 * tuplas
 * Enums
 * 
 */

/** Tipos inferidos en TypeScript */

let extincionDinosaurios: number = 76_000_000; // number
let dinosaurioFavorito: string = "T-Rex"; // string
let extintos: boolean = true; // boolean

let miVariable;
miVariable = "Que la fuerza te acompañe";
miVariable = 10;

function saludar(config: any) {
    return config;
}